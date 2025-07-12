import type { LucideIcon } from "lucide-react";

export interface Transaction {
  id: string;
  date: string;
  description: string;
  category: TransactionCategory;
  amount: number;
  status: "completed" | "pending" | "failed";
  avatar?: string;
}

export type TransactionCategory =
  | "Food & Dining"
  | "Transport"
  | "Shopping"
  | "Entertainment"
  | "Health"
  | "Utilities"
  | "Income"
  | "Transfer";

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatarInitials: string;
  avatarColor: string;
}

export interface BalancePoint {
  month: string;
  balance: number;
  expenses: number;
  income: number;
}

export interface ActivityItem {
  id: string;
  type: "payment" | "transfer" | "login" | "alert";
  description: string;
  timestamp: string;
  amount?: number;
}

export interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
  path: string;
  section: "main" | "bottom";
}

export interface Session {
  id: string;
  device: string;
  location: string;
  lastActive: string;
  current: boolean;
}

export interface Invoice {
  id: string;
  date: string;
  amount: number;
  status: "paid" | "pending" | "overdue";
  description: string;
}
