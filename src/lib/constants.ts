import {
  LayoutDashboard,
  ArrowLeftRight,
  UserCircle,
  CreditCard,
  Settings,
  Component,
  Lock,
} from "lucide-react";
import type { NavItem } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
    section: "main",
  },
  {
    id: "transactions",
    label: "Transactions",
    icon: ArrowLeftRight,
    path: "/transactions",
    section: "main",
  },
  {
    id: "profile",
    label: "Profile",
    icon: UserCircle,
    path: "/profile",
    section: "main",
  },
  {
    id: "cards",
    label: "Cards",
    icon: CreditCard,
    path: "/cards",
    section: "main",
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
    path: "/settings",
    section: "main",
  },
  {
    id: "components",
    label: "Components",
    icon: Component,
    path: "/components",
    section: "bottom",
  },
  {
    id: "auth",
    label: "Auth Pages",
    icon: Lock,
    path: "/login",
    section: "bottom",
  },
];

export const STATUS_COLORS: Record<string, string> = {
  completed: "bg-emerald-100 text-emerald-700",
  pending: "bg-amber-100 text-amber-700",
  failed: "bg-red-100 text-red-700",
  paid: "bg-emerald-100 text-emerald-700",
  overdue: "bg-red-100 text-red-700",
};

export const CATEGORY_COLORS: Record<string, string> = {
  "Food & Dining": "bg-orange-100 text-orange-700",
  Transport: "bg-blue-100 text-blue-700",
  Shopping: "bg-pink-100 text-pink-700",
  Entertainment: "bg-purple-100 text-purple-700",
  Health: "bg-emerald-100 text-emerald-700",
  Utilities: "bg-gray-100 text-gray-700",
  Income: "bg-green-100 text-green-700",
  Transfer: "bg-cyan-100 text-cyan-700",
};
