import { TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { MONTHLY_BALANCE } from "@/lib/mock-data";
import { LineChart, Line, BarChart, Bar, ResponsiveContainer } from "recharts";

export default function BalanceCard() {
  const barData = MONTHLY_BALANCE.slice(-5);
  const lineData = MONTHLY_BALANCE.slice(-6);

  return (
    <Card className="rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
      <p className="text-muted-foreground mb-1 text-sm font-medium tracking-wider uppercase">
        Balance Statistics
      </p>
      <div className="mb-1 flex items-baseline gap-3">
        <span className="text-foreground text-3xl font-bold">$38,729.61</span>
        <span className="text-muted-foreground text-sm">Total amount</span>
      </div>
      <div className="mb-4 flex items-center gap-1">
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
          <TrendingUp size={12} /> 14%
        </span>
      </div>
      <div className="flex items-end gap-4">
        <div className="h-16 flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineData}>
              <Line
                type="monotone"
                dataKey="balance"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className="text-muted-foreground mb-1 text-[10px]">
          Always see
          <br />
          your earning updates
        </p>
        <div className="h-16 w-32">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData}>
              <Bar dataKey="income" fill="hsl(var(--foreground))" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="mt-1 flex justify-end gap-3">
        {barData.map((d) => (
          <span key={d.month} className="text-muted-foreground text-[10px]">
            {d.month}
          </span>
        ))}
      </div>
    </Card>
  );
}
