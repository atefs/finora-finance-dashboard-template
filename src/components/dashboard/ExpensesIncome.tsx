import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function ExpensesIncome() {
  return (
    <Card className="rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
      <p className="text-muted-foreground mb-4 text-sm font-medium tracking-wider uppercase">
        Expenses & Income
      </p>
      <div className="grid grid-cols-2 gap-6">
        <div className="text-center">
          <p className="text-foreground text-3xl font-bold">60%</p>
          <p className="text-muted-foreground mb-2 text-xs">Expenses</p>
          <Progress value={60} className="[&>div]:bg-accent h-2" />
        </div>
        <div className="text-center">
          <p className="text-foreground text-3xl font-bold">40%</p>
          <p className="text-muted-foreground mb-2 text-xs">Income</p>
          <Progress value={40} className="h-2 [&>div]:bg-amber-400" />
        </div>
      </div>
    </Card>
  );
}
