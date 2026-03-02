import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface DataTableToolbarProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  children?: React.ReactNode;
}

export default function DataTableToolbar({
  searchValue,
  onSearchChange,
  children,
}: DataTableToolbarProps) {
  return (
    <div className="mb-4 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
      <div className="bg-card border-border flex w-full items-center gap-2 rounded-lg border px-3 py-1.5 sm:w-auto">
        <Search size={16} className="text-muted-foreground" />
        <Input
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          aria-label="Search"
          className="h-7 border-0 bg-transparent p-0 text-sm focus-visible:ring-0"
        />
      </div>
      {children}
    </div>
  );
}
