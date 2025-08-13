import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AnalyticsGauge() {
  const percentage = 90;
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <Card className="rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
          Analytics
        </p>
      </div>
      <div className="mb-3 flex gap-2">
        <Badge variant="outline" className="gap-1 text-[10px]">
          <span className="bg-foreground inline-block h-2 w-2 rounded-full" />
          Done
        </Badge>
        <Badge variant="outline" className="gap-1 text-[10px]">
          <span className="bg-accent inline-block h-2 w-2 rounded-full" />
          In progress
        </Badge>
        <Badge variant="outline" className="gap-1 text-[10px]">
          <span className="bg-muted-foreground inline-block h-2 w-2 rounded-full" />
          To do
        </Badge>
      </div>
      <div className="flex items-center justify-center">
        <svg width="110" height="110" viewBox="0 0 110 110">
          <circle
            cx="55"
            cy="55"
            r={radius}
            fill="none"
            stroke="hsl(var(--muted))"
            strokeWidth="10"
          />
          <circle
            cx="55"
            cy="55"
            r={radius}
            fill="none"
            stroke="hsl(var(--foreground))"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            transform="rotate(-90 55 55)"
            className="transition-all duration-1000 ease-out"
            style={{ animation: "gauge-fill 1.2s ease-out" }}
          />
          <text
            x="55"
            y="55"
            textAnchor="middle"
            dominantBaseline="central"
            className="fill-foreground text-xl font-bold"
          >
            {percentage}%
          </text>
          <text
            x="55"
            y="72"
            textAnchor="middle"
            className="fill-muted-foreground text-[10px]"
          >
            Done
          </text>
        </svg>
      </div>
    </Card>
  );
}
