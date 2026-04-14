import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { ErrorBoundary } from "@/components/ErrorBoundary";

// Suppress console.error from ErrorBoundary + React during expected throws
beforeEach(() => {
  vi.spyOn(console, "error").mockImplementation(() => {});
});

function ProblemChild({ shouldThrow }: { shouldThrow: boolean }) {
  if (shouldThrow) {
    throw new Error("Test error message");
  }
  return <div>Child content</div>;
}

describe("ErrorBoundary", () => {
  it("renders children when there is no error", () => {
    render(
      <ErrorBoundary>
        <ProblemChild shouldThrow={false} />
      </ErrorBoundary>,
    );
    expect(screen.getByText("Child content")).toBeInTheDocument();
  });

  it("renders fallback UI when a child throws", () => {
    render(
      <ErrorBoundary>
        <ProblemChild shouldThrow={true} />
      </ErrorBoundary>,
    );
    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
    expect(screen.getByText("Test error message")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Try again" }),
    ).toBeInTheDocument();
  });

  it("renders custom fallback when provided", () => {
    render(
      <ErrorBoundary fallback={<div>Custom fallback</div>}>
        <ProblemChild shouldThrow={true} />
      </ErrorBoundary>,
    );
    expect(screen.getByText("Custom fallback")).toBeInTheDocument();
    expect(
      screen.queryByText("Something went wrong"),
    ).not.toBeInTheDocument();
  });

  it("recovers when Try again is clicked", () => {
    let shouldThrow = true;

    function Toggler() {
      if (shouldThrow) {
        throw new Error("Recoverable error");
      }
      return <div>Recovered content</div>;
    }

    render(
      <ErrorBoundary>
        <Toggler />
      </ErrorBoundary>,
    );

    expect(screen.getByText("Something went wrong")).toBeInTheDocument();

    // Fix the error before clicking retry
    shouldThrow = false;
    fireEvent.click(screen.getByRole("button", { name: "Try again" }));

    expect(screen.getByText("Recovered content")).toBeInTheDocument();
    expect(
      screen.queryByText("Something went wrong"),
    ).not.toBeInTheDocument();
  });
});
