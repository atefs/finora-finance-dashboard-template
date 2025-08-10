import { useLocation } from "react-router-dom";
import { Bell, Search } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/hooks/use-theme";
import AvatarStack from "@/components/dashboard/AvatarStack";
import { NAV_ITEMS } from "@/lib/constants";

export default function TopBar() {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const current = NAV_ITEMS.find((n) => location.pathname.startsWith(n.path));
  const title = current?.label ?? "Dashboard";

  return (
    <header className="flex h-16 items-center justify-between px-6">
      <div>
        <p className="text-muted-foreground text-xs">Finora Finance</p>
        <h1 className="text-foreground text-lg font-semibold">{title}</h1>
      </div>

      <div className="hidden lg:block">
        <AvatarStack />
      </div>

      <div className="flex items-center gap-3">
        <div className="bg-card border-border focus-within:ring-ring hidden items-center gap-2 rounded-xl border px-3 py-1.5 transition-all duration-200 focus-within:ring-2 sm:flex">
          <Search size={16} className="text-muted-foreground" />
          <Input
            placeholder="Search me..."
            className="h-7 w-32 border-0 bg-transparent p-0 text-sm focus-visible:ring-0"
          />
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="relative rounded-xl transition-transform duration-200 hover:scale-110"
        >
          <Bell size={20} />
          <span className="bg-primary absolute top-1 right-1 h-2 w-2 animate-pulse rounded-full" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full transition-transform duration-200 hover:scale-110"
            >
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-foreground text-background text-xs font-semibold">
                  AR
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="animate-scale-in w-48">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
