import { Card } from "@/components/ui/card";

export default function CreditCardWidget() {
  return (
    <Card className="overflow-hidden rounded-2xl border-0 p-0 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
      <div className="bg-accent text-accent-foreground flex h-full min-h-[200px] flex-col justify-between rounded-2xl p-5">
        <div className="flex items-start justify-between">
          <p className="text-xs tracking-widest uppercase opacity-70">
            The Bank of Anything
          </p>
          <div className="grid h-6 w-8 grid-cols-3 grid-rows-2 gap-px rounded bg-amber-400/80 p-0.5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-xs bg-amber-500/60" />
            ))}
          </div>
        </div>
        <div className="mt-4">
          <p className="font-mono text-sm tracking-widest">
            •••• •••• •••• 2734
          </p>
          <div className="mt-2 flex items-center justify-between">
            <div>
              <p className="text-[10px] opacity-70">3/18 — 3/28</p>
              <p className="text-sm font-medium">Alif Reza</p>
            </div>
            <div className="flex -space-x-2">
              <div className="h-7 w-7 rounded-full bg-red-500 opacity-80" />
              <div className="h-7 w-7 rounded-full bg-amber-400 opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
