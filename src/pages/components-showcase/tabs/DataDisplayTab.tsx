import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import StatCard from "@/components/shared/StatCard";
import StatusBadge from "@/components/shared/StatusBadge";
import { TRANSACTIONS, ACTIVITY_FEED } from "@/lib/mock-data";
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  ArrowLeftRight,
  MoreHorizontal,
  Search,
} from "lucide-react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

export default function DataDisplayTab() {
  const [tableSearch, setTableSearch] = useState("");
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const filtered = useMemo(() => {
    if (!tableSearch) return TRANSACTIONS.slice(0, 10);
    return TRANSACTIONS.filter((t) =>
      t.description.toLowerCase().includes(tableSearch.toLowerCase()),
    ).slice(0, 10);
  }, [tableSearch]);

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-muted-foreground mb-4 text-sm font-medium tracking-wider uppercase">
          Stat Cards
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            icon={DollarSign}
            label="Total Revenue"
            value="$45,231"
            trend="12% from last month"
            trendUp
          />
          <StatCard
            icon={TrendingDown}
            label="Expenses"
            value="$12,840"
            trend="3.2% from last month"
            trendUp={false}
          />
          <StatCard
            icon={TrendingUp}
            label="Net Balance"
            value="$32,391"
            trend="8.1% from last month"
            trendUp
          />
          <StatCard
            icon={ArrowLeftRight}
            label="Transactions"
            value="1,429"
            trend="201 this week"
            trendUp
          />
        </div>
      </section>

      <section>
        <h2 className="text-muted-foreground mb-4 text-sm font-medium tracking-wider uppercase">
          Table with Features
        </h2>
        <Card className="rounded-2xl">
          <CardContent className="pt-5">
            <div className="mb-4 flex items-center gap-2">
              <Search size={16} className="text-muted-foreground" />
              <Input
                placeholder="Filter..."
                value={tableSearch}
                onChange={(e) => setTableSearch(e.target.value)}
                className="bg-muted h-8 w-48 border-0 focus-visible:ring-0"
              />
              {selected.size > 0 && (
                <Badge variant="secondary">{selected.size} selected</Badge>
              )}
            </div>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-10">
                      <Checkbox
                        checked={
                          selected.size === filtered.length &&
                          filtered.length > 0
                        }
                        onCheckedChange={() => {
                          if (selected.size === filtered.length)
                            setSelected(new Set());
                          else setSelected(new Set(filtered.map((t) => t.id)));
                        }}
                      />
                    </TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="w-10"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filtered.map((t) => (
                    <TableRow key={t.id}>
                      <TableCell>
                        <Checkbox
                          checked={selected.has(t.id)}
                          onCheckedChange={() => {
                            const n = new Set(selected);
                            if (n.has(t.id)) n.delete(t.id);
                            else n.add(t.id);
                            setSelected(n);
                          }}
                        />
                      </TableCell>
                      <TableCell className="text-sm font-medium">
                        {t.description}
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="text-xs">
                          {t.category}
                        </Badge>
                      </TableCell>
                      <TableCell
                        className={`text-right text-sm font-medium ${t.amount >= 0 ? "text-emerald-600" : "text-red-500"}`}
                      >
                        {t.amount >= 0 ? "+" : ""}$
                        {Math.abs(t.amount).toFixed(2)}
                      </TableCell>
                      <TableCell>
                        <StatusBadge status={t.status} />
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-7 w-7"
                            >
                              <MoreHorizontal size={14} />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Duplicate</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                  {filtered.length === 0 && (
                    <TableRow>
                      <TableCell
                        colSpan={6}
                        className="text-muted-foreground py-8 text-center"
                      >
                        No results found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-muted-foreground mb-4 text-sm font-medium tracking-wider uppercase">
          Activity Feed
        </h2>
        <Card className="rounded-2xl">
          <CardContent className="pt-5">
            <div className="space-y-0">
              {ACTIVITY_FEED.slice(0, 6).map((item, i) => (
                <div key={item.id} className="relative flex gap-3 pb-6">
                  {i < 5 && (
                    <div className="bg-border absolute top-6 bottom-0 left-[11px] w-px" />
                  )}
                  <div
                    className={`text-primary-foreground z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs ${item.type === "payment" ? "bg-primary" : item.type === "transfer" ? "bg-accent" : item.type === "alert" ? "bg-destructive" : "bg-muted-foreground"}`}
                  >
                    {item.type[0].toUpperCase()}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">{item.description}</p>
                    <p className="text-muted-foreground text-xs">
                      {new Date(item.timestamp).toLocaleString()}
                    </p>
                  </div>
                  {item.amount && (
                    <span
                      className={`text-sm font-medium ${item.amount > 0 ? "text-emerald-600" : "text-red-500"}`}
                    >
                      {item.amount > 0 ? "+" : ""}$
                      {Math.abs(item.amount).toFixed(2)}
                    </span>
                  )}
                </div>
              ))}
            </div>
            <Button variant="outline" size="sm" className="mt-2 w-full">
              Load more
            </Button>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-muted-foreground mb-4 text-sm font-medium tracking-wider uppercase">
          Progress Indicators
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card className="rounded-2xl">
            <CardContent className="space-y-4 pt-5">
              <div>
                <p className="mb-1 text-sm">
                  Expenses <span className="text-muted-foreground">60%</span>
                </p>
                <Progress value={60} className="h-2" />
              </div>
              <div>
                <p className="mb-1 text-sm">
                  Income <span className="text-muted-foreground">40%</span>
                </p>
                <Progress value={40} className="h-2 [&>div]:bg-emerald-500" />
              </div>
              <div>
                <p className="mb-1 text-sm">
                  Savings <span className="text-muted-foreground">25%</span>
                </p>
                <Progress value={25} className="[&>div]:bg-accent h-2" />
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardContent className="pt-5">
              <p className="mb-4 text-sm font-medium">Step Progress</p>
              <ol className="flex items-center gap-2">
                {["Details", "Review", "Payment", "Done"].map((s, i) => (
                  <li key={s} className="flex items-center gap-2">
                    <div
                      className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-medium ${i < 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
                    >
                      {i + 1}
                    </div>
                    <span className="hidden text-xs sm:inline">{s}</span>
                    {i < 3 && (
                      <div
                        className={`h-px w-6 ${i < 1 ? "bg-primary" : "bg-border"}`}
                      />
                    )}
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-muted-foreground mb-4 text-sm font-medium tracking-wider uppercase">
          Badges & Tags
        </h2>
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge className="bg-emerald-100 text-emerald-700">Success</Badge>
          <Badge className="bg-amber-100 text-amber-700">Warning</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge className="bg-accent text-accent-foreground">Info</Badge>
          <Badge className="bg-violet-100 text-violet-700">Purple</Badge>
          <Badge variant="outline" className="gap-1">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
            With dot
          </Badge>
          <Badge className="rounded-md">Square-ish</Badge>
          <Badge variant="outline" className="gap-1">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            Active
          </Badge>
        </div>
      </section>

      <section>
        <h2 className="text-muted-foreground mb-4 text-sm font-medium tracking-wider uppercase">
          Sparkline Cards
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[
            {
              label: "Revenue",
              value: "$12,340",
              data: [10, 15, 8, 20, 18, 25],
            },
            { label: "Users", value: "2,845", data: [5, 12, 8, 15, 20, 18] },
          ].map((item) => (
            <Card key={item.label} className="rounded-2xl">
              <CardContent className="flex items-center justify-between pt-5">
                <div>
                  <p className="text-muted-foreground text-sm">{item.label}</p>
                  <p className="text-xl font-bold">{item.value}</p>
                </div>
                <div className="h-12 w-24">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={item.data.map((v, i) => ({ i, v }))}>
                      <Line
                        type="monotone"
                        dataKey="v"
                        stroke="hsl(var(--primary))"
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
