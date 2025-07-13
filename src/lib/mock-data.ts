import type {
  Transaction,
  User,
  BalancePoint,
  ActivityItem,
  Session,
  Invoice,
} from "@/types";

export const USERS: User[] = [
  {
    id: "1",
    name: "Alif Reza",
    email: "alif@fenco.io",
    role: "Owner",
    avatarInitials: "AR",
    avatarColor: "bg-primary",
  },
  {
    id: "2",
    name: "Sarah Chen",
    email: "sarah@fenco.io",
    role: "Admin",
    avatarInitials: "SC",
    avatarColor: "bg-accent",
  },
  {
    id: "3",
    name: "Marcus Johnson",
    email: "marcus@fenco.io",
    role: "Editor",
    avatarInitials: "MJ",
    avatarColor: "bg-emerald-500",
  },
  {
    id: "4",
    name: "Emma Wilson",
    email: "emma@fenco.io",
    role: "Viewer",
    avatarInitials: "EW",
    avatarColor: "bg-amber-500",
  },
  {
    id: "5",
    name: "David Park",
    email: "david@fenco.io",
    role: "Editor",
    avatarInitials: "DP",
    avatarColor: "bg-violet-500",
  },
  {
    id: "6",
    name: "Lisa Anderson",
    email: "lisa@fenco.io",
    role: "Viewer",
    avatarInitials: "LA",
    avatarColor: "bg-rose-500",
  },
  {
    id: "7",
    name: "James Taylor",
    email: "james@fenco.io",
    role: "Viewer",
    avatarInitials: "JT",
    avatarColor: "bg-cyan-500",
  },
];

const categories: Transaction["category"][] = [
  "Food & Dining",
  "Transport",
  "Shopping",
  "Entertainment",
  "Health",
  "Utilities",
  "Income",
  "Transfer",
];
const statuses: Transaction["status"][] = ["completed", "pending", "failed"];
const descriptions = [
  "Apple Store Purchase",
  "Uber Ride",
  "Netflix Subscription",
  "Grocery Store",
  "Gas Station",
  "Salary Deposit",
  "Restaurant Bill",
  "Electric Bill",
  "Gym Membership",
  "Amazon Order",
  "Spotify Premium",
  "Coffee Shop",
  "Freelance Payment",
  "Insurance Premium",
  "Phone Bill",
  "Flight Booking",
  "Hotel Reservation",
  "Book Purchase",
  "Medical Checkup",
  "Transfer to Savings",
];

export const TRANSACTIONS: Transaction[] = Array.from(
  { length: 50 },
  (_, i) => ({
    id: `txn-${i + 1}`,
    date: new Date(2024, 3 - Math.floor(i / 15), 28 - (i % 28)).toISOString(),
    description: descriptions[i % descriptions.length],
    category: categories[i % categories.length],
    amount:
      i % 5 === 0
        ? Math.round((Math.random() * 5000 + 500) * 100) / 100
        : -Math.round((Math.random() * 800 + 10) * 100) / 100,
    status: statuses[i % 7 === 0 ? 2 : i % 3 === 0 ? 1 : 0],
    avatar: USERS[i % USERS.length]?.avatarInitials,
  }),
);

export const MONTHLY_BALANCE: BalancePoint[] = [
  { month: "Apr", balance: 28400, expenses: 4200, income: 6800 },
  { month: "May", balance: 29100, expenses: 5100, income: 5900 },
  { month: "Jun", balance: 27800, expenses: 6300, income: 5000 },
  { month: "Jul", balance: 30200, expenses: 4800, income: 7200 },
  { month: "Aug", balance: 31500, expenses: 5500, income: 6800 },
  { month: "Sep", balance: 29800, expenses: 6200, income: 4500 },
  { month: "Oct", balance: 32100, expenses: 4100, income: 6400 },
  { month: "Nov", balance: 33400, expenses: 5300, income: 6600 },
  { month: "Dec", balance: 35200, expenses: 4700, income: 6500 },
  { month: "Jan", balance: 36100, expenses: 5800, income: 6700 },
  { month: "Feb", balance: 37500, expenses: 4500, income: 5900 },
  { month: "Mar", balance: 38729, expenses: 5200, income: 6400 },
];

export const ACTIVITY_FEED: ActivityItem[] = [
  {
    id: "a1",
    type: "payment",
    description: "Payment to Apple Store",
    timestamp: "2024-04-03T14:30:00Z",
    amount: -653,
  },
  {
    id: "a2",
    type: "transfer",
    description: "Transfer from Savings",
    timestamp: "2024-04-03T10:15:00Z",
    amount: 2000,
  },
  {
    id: "a3",
    type: "payment",
    description: "Netflix subscription renewed",
    timestamp: "2024-04-02T09:00:00Z",
    amount: -15.99,
  },
  {
    id: "a4",
    type: "login",
    description: "New login from MacBook Pro",
    timestamp: "2024-04-02T08:30:00Z",
  },
  {
    id: "a5",
    type: "payment",
    description: "Salary deposit received",
    timestamp: "2024-04-01T12:00:00Z",
    amount: 5400,
  },
  {
    id: "a6",
    type: "alert",
    description: "Unusual spending detected",
    timestamp: "2024-04-01T11:00:00Z",
  },
  {
    id: "a7",
    type: "transfer",
    description: "Transfer to Ralph Edwards",
    timestamp: "2024-04-01T09:30:00Z",
    amount: -2643,
  },
  {
    id: "a8",
    type: "payment",
    description: "Amazon order shipped",
    timestamp: "2024-03-31T16:00:00Z",
    amount: -89.99,
  },
  {
    id: "a9",
    type: "login",
    description: "New login from iPhone 15",
    timestamp: "2024-03-31T07:45:00Z",
  },
  {
    id: "a10",
    type: "payment",
    description: "Jerome Bell payment",
    timestamp: "2024-03-27T14:00:00Z",
    amount: -20,
  },
];

export const SESSIONS: Session[] = [
  {
    id: "s1",
    device: "MacBook Pro — Chrome",
    location: "San Francisco, US",
    lastActive: "Active now",
    current: true,
  },
  {
    id: "s2",
    device: "iPhone 15 — Safari",
    location: "San Francisco, US",
    lastActive: "2 hours ago",
    current: false,
  },
  {
    id: "s3",
    device: "Windows PC — Firefox",
    location: "New York, US",
    lastActive: "3 days ago",
    current: false,
  },
];

export const INVOICES: Invoice[] = [
  {
    id: "inv-001",
    date: "2024-03-01",
    amount: 29.99,
    status: "paid",
    description: "Premium Plan — March",
  },
  {
    id: "inv-002",
    date: "2024-02-01",
    amount: 29.99,
    status: "paid",
    description: "Premium Plan — February",
  },
  {
    id: "inv-003",
    date: "2024-01-01",
    amount: 29.99,
    status: "paid",
    description: "Premium Plan — January",
  },
  {
    id: "inv-004",
    date: "2023-12-01",
    amount: 29.99,
    status: "paid",
    description: "Premium Plan — December",
  },
  {
    id: "inv-005",
    date: "2023-11-01",
    amount: 19.99,
    status: "paid",
    description: "Basic Plan — November",
  },
  {
    id: "inv-006",
    date: "2023-10-01",
    amount: 19.99,
    status: "paid",
    description: "Basic Plan — October",
  },
];
