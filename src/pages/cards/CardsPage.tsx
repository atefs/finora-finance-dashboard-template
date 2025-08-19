import { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface CardData {
  id: string;
  number: string;
  holder: string;
  expiry: string;
  color: string;
}

const cards: CardData[] = [
  {
    id: "1",
    number: "2734",
    holder: "Alif Reza",
    expiry: "03/28",
    color: "bg-accent",
  },
  {
    id: "2",
    number: "8821",
    holder: "Alif Reza",
    expiry: "05/27",
    color: "bg-foreground",
  },
  {
    id: "3",
    number: "4419",
    holder: "Alif Reza",
    expiry: "11/26",
    color: "bg-violet-600",
  },
];

export default function CardsPage() {
  const [selectedId, setSelectedId] = useState(cards[0].id);

  return (
    <div>
      <PageHeader
        title="My Cards"
        breadcrumb="Home / Cards"
        actions={<Button>Add new card</Button>}
      />
      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        {cards.map((card) => (
          <Card
            key={card.id}
            className={cn(
              "cursor-pointer rounded-2xl border-2 p-5 transition-all duration-200",
              card.color,
              "text-primary-foreground",
              selectedId === card.id
                ? "ring-primary border-primary ring-2"
                : "border-transparent hover:-translate-y-0.5 hover:shadow-md",
            )}
            onClick={() => setSelectedId(card.id)}
          >
            <p className="mb-6 text-xs tracking-widest uppercase opacity-70">
              The Bank of Anything
            </p>
            <p className="mb-4 font-mono text-sm tracking-widest">
              •••• •••• •••• {card.number}
            </p>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[10px] opacity-70">{card.expiry}</p>
                <p className="text-sm font-medium">{card.holder}</p>
              </div>
              <div className="flex -space-x-2">
                <div className="h-6 w-6 rounded-full bg-red-500 opacity-80" />
                <div className="h-6 w-6 rounded-full bg-amber-400 opacity-80" />
              </div>
            </div>
          </Card>
        ))}
      </div>
      <Card className="rounded-2xl p-5">
        <div className="space-y-4">
          {cards.map((card) => (
            <div key={card.id} className="flex items-center justify-between">
              <span className="text-sm font-medium">
                Card ending in {card.number}
              </span>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Label className="text-muted-foreground text-sm">
                    Freeze
                  </Label>
                  <Switch />
                </div>
                <Button variant="destructive" size="sm">
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
