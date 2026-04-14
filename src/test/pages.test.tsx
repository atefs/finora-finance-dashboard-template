import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/context/theme-context";
import { describe, it, expect } from "vitest";

import DashboardPage from "@/pages/dashboard/DashboardPage";
import TransactionsPage from "@/pages/transactions/TransactionsPage";
import ProfilePage from "@/pages/profile/ProfilePage";
import CardsPage from "@/pages/cards/CardsPage";
import SettingsPage from "@/pages/settings/SettingsPage";
import LoginPage from "@/pages/auth/LoginPage";
import RegisterPage from "@/pages/auth/RegisterPage";
import ForgotPasswordPage from "@/pages/auth/ForgotPasswordPage";
import NotFound from "@/pages/NotFound";

function renderWithProviders(ui: React.ReactElement) {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });
  return render(
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <MemoryRouter>{ui}</MemoryRouter>
      </ThemeProvider>
    </QueryClientProvider>,
  );
}

describe("DashboardPage", () => {
  it("renders the greeting and finance prompt", () => {
    renderWithProviders(<DashboardPage />);
    expect(
      screen.getByText((_, el) => el?.tagName === "H2" && !!el.textContent?.includes("Hello")),
    ).toBeInTheDocument();
    expect(
      screen.getByText("View and control your finances here!"),
    ).toBeInTheDocument();
    expect(screen.getByText("Balance Statistics")).toBeInTheDocument();
  });
});

describe("TransactionsPage", () => {
  it("renders heading and table controls", () => {
    renderWithProviders(<TransactionsPage />);
    expect(screen.getByText("Transactions")).toBeInTheDocument();
    expect(
      screen.getByLabelText("Search transactions"),
    ).toBeInTheDocument();
    expect(screen.getByText("Export CSV")).toBeInTheDocument();
  });
});

describe("ProfilePage", () => {
  it("renders personal information form", () => {
    renderWithProviders(<ProfilePage />);
    expect(screen.getByText("Profile")).toBeInTheDocument();
    expect(screen.getByText("Personal Information")).toBeInTheDocument();
    expect(screen.getByLabelText("Full Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByText("Save Changes")).toBeInTheDocument();
  });
});

describe("CardsPage", () => {
  it("renders card list and management controls", () => {
    renderWithProviders(<CardsPage />);
    expect(screen.getByText("My Cards")).toBeInTheDocument();
    expect(screen.getByText("Add new card")).toBeInTheDocument();
    expect(screen.getByText("Card ending in 2734")).toBeInTheDocument();
    expect(screen.getByText("Card ending in 8821")).toBeInTheDocument();
    expect(screen.getByText("Card ending in 4419")).toBeInTheDocument();
  });
});

describe("SettingsPage", () => {
  it("renders settings tabs", () => {
    renderWithProviders(<SettingsPage />);
    expect(screen.getByText("Settings")).toBeInTheDocument();
    expect(screen.getByText("General")).toBeInTheDocument();
    expect(screen.getByText("Appearance")).toBeInTheDocument();
    expect(screen.getByText("Notifications")).toBeInTheDocument();
    expect(screen.getByText("Security")).toBeInTheDocument();
    expect(screen.getByText("Billing")).toBeInTheDocument();
  });
});

describe("LoginPage", () => {
  it("renders sign in form", () => {
    renderWithProviders(<LoginPage />);
    expect(screen.getByRole("heading", { name: "Sign In" })).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Sign In" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Forgot password?")).toBeInTheDocument();
  });
});

describe("RegisterPage", () => {
  it("renders create account form", () => {
    renderWithProviders(<RegisterPage />);
    expect(screen.getByRole("heading", { name: "Create Account" })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Create Account" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Google")).toBeInTheDocument();
    expect(screen.getByText("Apple")).toBeInTheDocument();
  });
});

describe("ForgotPasswordPage", () => {
  it("renders forgot password form", () => {
    renderWithProviders(<ForgotPasswordPage />);
    expect(screen.getByText("Forgot Password")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Send Reset Link" }),
    ).toBeInTheDocument();
  });
});

describe("NotFound", () => {
  it("renders 404 message", () => {
    renderWithProviders(<NotFound />);
    expect(screen.getByText("404")).toBeInTheDocument();
    expect(screen.getByText("Oops! Page not found")).toBeInTheDocument();
    expect(screen.getByText("Return to Home")).toBeInTheDocument();
  });
});
