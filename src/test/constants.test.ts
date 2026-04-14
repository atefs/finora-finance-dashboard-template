import { describe, it, expect } from "vitest";
import {
  ROUTES,
  NAV_ITEMS,
  STATUS_COLORS,
  CATEGORY_COLORS,
} from "@/lib/constants";

describe("ROUTES", () => {
  it("contains all expected route keys", () => {
    expect(ROUTES).toHaveProperty("DASHBOARD");
    expect(ROUTES).toHaveProperty("TRANSACTIONS");
    expect(ROUTES).toHaveProperty("PROFILE");
    expect(ROUTES).toHaveProperty("CARDS");
    expect(ROUTES).toHaveProperty("SETTINGS");
    expect(ROUTES).toHaveProperty("LOGIN");
    expect(ROUTES).toHaveProperty("REGISTER");
    expect(ROUTES).toHaveProperty("FORGOT_PASSWORD");
  });

  it("has string values starting with /", () => {
    for (const value of Object.values(ROUTES)) {
      expect(value).toMatch(/^\//);
    }
  });
});

describe("STATUS_COLORS", () => {
  it("has entries for expected statuses", () => {
    expect(STATUS_COLORS).toHaveProperty("completed");
    expect(STATUS_COLORS).toHaveProperty("pending");
    expect(STATUS_COLORS).toHaveProperty("failed");
    expect(STATUS_COLORS).toHaveProperty("paid");
    expect(STATUS_COLORS).toHaveProperty("overdue");
  });

  it("has non-empty string values", () => {
    for (const value of Object.values(STATUS_COLORS)) {
      expect(typeof value).toBe("string");
      expect(value.length).toBeGreaterThan(0);
    }
  });
});

describe("CATEGORY_COLORS", () => {
  it("has entries for expected categories", () => {
    expect(CATEGORY_COLORS).toHaveProperty("Food & Dining");
    expect(CATEGORY_COLORS).toHaveProperty("Transport");
    expect(CATEGORY_COLORS).toHaveProperty("Shopping");
    expect(CATEGORY_COLORS).toHaveProperty("Entertainment");
    expect(CATEGORY_COLORS).toHaveProperty("Income");
    expect(CATEGORY_COLORS).toHaveProperty("Transfer");
  });

  it("has non-empty string values", () => {
    for (const value of Object.values(CATEGORY_COLORS)) {
      expect(typeof value).toBe("string");
      expect(value.length).toBeGreaterThan(0);
    }
  });
});

describe("NAV_ITEMS", () => {
  it("is a non-empty array", () => {
    expect(Array.isArray(NAV_ITEMS)).toBe(true);
    expect(NAV_ITEMS.length).toBeGreaterThan(0);
  });

  it("each item has required properties", () => {
    for (const item of NAV_ITEMS) {
      expect(item).toHaveProperty("id");
      expect(item).toHaveProperty("label");
      expect(item).toHaveProperty("icon");
      expect(item).toHaveProperty("path");
      expect(item).toHaveProperty("section");
      expect(typeof item.id).toBe("string");
      expect(typeof item.label).toBe("string");
      expect(typeof item.path).toBe("string");
      expect(["main", "bottom"]).toContain(item.section);
    }
  });

  it("contains dashboard and settings nav items", () => {
    const ids = NAV_ITEMS.map((item) => item.id);
    expect(ids).toContain("dashboard");
    expect(ids).toContain("settings");
  });
});
