import { Card } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
}

export default function StatCard({
  label,
  value,
  icon: Icon,
  trend,
  trendUp,
}: StatCardProps) {
  return (
    <Card className="rounded-2xl p-5">
      <div className="mb-2 flex items-center gap-3">
        <div className="bg-muted rounded-lg p-2">
          <Icon size={18} className="text-muted-foreground" />
        </div>
        <p className="text-muted-foreground text-sm">{label}</p>
      </div>
      <p className="text-foreground text-2xl font-bold">{value}</p>
      {trend && (
        <p
          className={`mt-1 text-xs ${trendUp ? "text-emerald-600" : "text-red-500"}`}
        >
          {trendUp ? "↑" : "↓"} {trend}
        </p>
      )}
    </Card>
  );
}
