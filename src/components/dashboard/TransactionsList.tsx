import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

const txns = [
  {
    name: "Apple",
    date: "03 April, 2024",
    amount: "$653",
    initials: "A",
    color: "bg-foreground",
  },
  {
    name: "Ralph Edwards",
    date: "01 April, 2024",
    amount: "$2,643",
    initials: "RE",
    color: "bg-accent",
  },
  {
    name: "Jerome Bell",
    date: "27 March, 2024",
    amount: "$20",
    initials: "JB",
    color: "bg-emerald-500",
  },
];

export default function TransactionsList() {
  return (
    <Card className="rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
          Last Transactions
        </p>
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 transition-transform duration-200 hover:scale-110"
        >
          <MoreHorizontal size={14} />
        </Button>
      </div>
      <div className="space-y-0">
        {txns.map((t, i) => (
          <div key={t.name}>
            <div className="group hover:bg-muted/50 -mx-2 flex items-center justify-between rounded-lg px-2 py-3 transition-colors duration-200">
              <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9 transition-transform duration-200 group-hover:scale-110">
                  <AvatarFallback
                    className={`${t.color} text-primary-foreground text-xs`}
                  >
                    {t.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-foreground text-sm font-medium">
                    {t.name}
                  </p>
                  <p className="text-primary text-xs">{t.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-foreground text-sm font-medium">
                  {t.amount}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 opacity-0 transition-all duration-200 group-hover:opacity-100"
                >
                  <MoreHorizontal size={14} />
                </Button>
              </div>
            </div>
            {i < txns.length - 1 && <Separator />}
          </div>
        ))}
      </div>
    </Card>
  );
}
