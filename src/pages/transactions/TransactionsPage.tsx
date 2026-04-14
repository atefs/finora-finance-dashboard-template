import { useState, useMemo } from "react";
import PageHeader from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { TRANSACTIONS } from "@/lib/mock-data";
import StatusBadge from "@/components/shared/StatusBadge";
import { ArrowUpDown, Download, Search } from "lucide-react";

type SortKey = "date" | "amount" | "description";

export default function TransactionsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sortKey, setSortKey] = useState<SortKey>("date");
  const [sortAsc, setSortAsc] = useState(false);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [page, setPage] = useState(0);
  const perPage = 10;

  const filtered = useMemo(() => {
    let data = [...TRANSACTIONS];
    if (search)
      data = data.filter((t) => t.description.toLowerCase().includes(search.toLowerCase()));
    if (category !== "all") data = data.filter((t) => t.category === category);
    data.sort((a, b) => {
      const mul = sortAsc ? 1 : -1;
      if (sortKey === "date")
        return mul * (new Date(a.date).getTime() - new Date(b.date).getTime());
      if (sortKey === "amount") return mul * (a.amount - b.amount);
      return mul * a.description.localeCompare(b.description);
    });
    return data;
  }, [search, category, sortKey, sortAsc]);

  const paged = filtered.slice(page * perPage, (page + 1) * perPage);
  const totalPages = Math.ceil(filtered.length / perPage);

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) setSortAsc(!sortAsc);
    else {
      setSortKey(key);
      setSortAsc(true);
    }
  };

  const toggleSelect = (id: string) => {
    const next = new Set(selected);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelected(next);
  };

  const toggleAll = () => {
    if (selected.size === paged.length) setSelected(new Set());
    else setSelected(new Set(paged.map((t) => t.id)));
  };

  return (
    <div>
      <PageHeader
        title="Transactions"
        breadcrumb="Home / Transactions"
        actions={
          <Button variant="outline" size="sm">
            <Download size={14} className="mr-2" />
            Export CSV
          </Button>
        }
      />

      <div className="mb-4 flex flex-wrap items-center gap-3">
        <div className="bg-card border-border flex items-center gap-2 rounded-lg border px-3 py-1.5">
          <Search size={16} className="text-muted-foreground" />
          <Input
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search transactions"
            className="h-7 w-40 border-0 bg-transparent p-0 text-sm focus-visible:ring-0"
          />
        </div>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="h-9 w-40">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="Food & Dining">Food & Dining</SelectItem>
            <SelectItem value="Transport">Transport</SelectItem>
            <SelectItem value="Shopping">Shopping</SelectItem>
            <SelectItem value="Entertainment">Entertainment</SelectItem>
            <SelectItem value="Income">Income</SelectItem>
            <SelectItem value="Transfer">Transfer</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="bg-card border-border overflow-hidden rounded-2xl border">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-10">
                  <Checkbox
                    checked={selected.size === paged.length && paged.length > 0}
                    onCheckedChange={toggleAll}
                  />
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => toggleSort("date")}>
                  Date <ArrowUpDown size={12} className="ml-1 inline" />
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => toggleSort("description")}>
                  Description <ArrowUpDown size={12} className="ml-1 inline" />
                </TableHead>
                <TableHead>Category</TableHead>
                <TableHead
                  className="cursor-pointer text-right"
                  onClick={() => toggleSort("amount")}
                >
                  Amount <ArrowUpDown size={12} className="ml-1 inline" />
                </TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paged.map((t) => (
                <TableRow key={t.id} className="transition-colors">
                  <TableCell>
                    <Checkbox
                      checked={selected.has(t.id)}
                      onCheckedChange={() => toggleSelect(t.id)}
                    />
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm">
                    {new Date(t.date).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="text-sm font-medium">{t.description}</TableCell>
                  <TableCell>
                    <span className="text-muted-foreground text-xs">{t.category}</span>
                  </TableCell>
                  <TableCell
                    className={`text-right text-sm font-medium ${t.amount >= 0 ? "text-emerald-600" : "text-red-500"}`}
                  >
                    {t.amount >= 0 ? "+" : ""}
                    {t.amount.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={t.status} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="border-border flex items-center justify-between border-t px-4 py-3">
          <p className="text-muted-foreground text-xs">
            Showing {page * perPage + 1}–{Math.min((page + 1) * perPage, filtered.length)} of{" "}
            {filtered.length}
          </p>
          <div className="flex gap-1">
            <Button
              variant="outline"
              size="sm"
              disabled={page === 0}
              onClick={() => setPage(page - 1)}
            >
              Prev
            </Button>
            <Button
              variant="outline"
              size="sm"
              disabled={page >= totalPages - 1}
              onClick={() => setPage(page + 1)}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
