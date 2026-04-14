import BalanceCard from "@/components/dashboard/BalanceCard";
import CreditCardWidget from "@/components/dashboard/CreditCardWidget";
import AnalyticsGauge from "@/components/dashboard/AnalyticsGauge";
import TransactionsList from "@/components/dashboard/TransactionsList";
import ExpensesIncome from "@/components/dashboard/ExpensesIncome";
import UpgradeBanner from "@/components/dashboard/UpgradeBanner";

export default function DashboardPage() {
  return (
    <div className="animate-page-enter">
      <div className="mb-6">
        <h2 className="text-foreground text-2xl font-bold">
          Hello, <span className="text-primary">Alif Reza</span>
        </h2>
        <p className="text-muted-foreground text-sm">View and control your finances here!</p>
      </div>
      <div className="animate-stagger grid grid-cols-1 gap-4 lg:grid-cols-3">
        <BalanceCard />
        <CreditCardWidget />
        <AnalyticsGauge />
        <TransactionsList />
        <div className="space-y-4">
          <ExpensesIncome />
          <UpgradeBanner />
        </div>
      </div>
    </div>
  );
}
