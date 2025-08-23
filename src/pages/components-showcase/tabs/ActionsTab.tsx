import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { toast } from "sonner";
import {
  Plus,
  Trash2,
  Edit,
  MoreHorizontal,
  CalendarIcon,
  Loader2,
  Home,
  Settings,
  User,
} from "lucide-react";

export default function ActionsTab() {
  const [dateRange, setDateRange] = useState<{ from?: Date; to?: Date }>({});
  const [filters, setFilters] = useState<string[]>(["Active", "Recent"]);

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-muted-foreground mb-4 text-sm font-medium tracking-wider uppercase">
          Filters & Date Picker
        </h2>
        <div className="space-y-4">
          <ToggleGroup
            type="multiple"
            value={filters}
            onValueChange={setFilters}
            className="justify-start"
          >
            {["Active", "Recent", "Pending", "Archived"].map((f) => (
              <ToggleGroupItem
                key={f}
                value={f}
                variant="outline"
                className="rounded-full"
              >
                {f}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "justify-start text-left font-normal",
                  !dateRange.from && "text-muted-foreground",
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {dateRange.from
                  ? dateRange.to
                    ? `${format(dateRange.from, "LLL dd")} - ${format(dateRange.to, "LLL dd")}`
                    : format(dateRange.from, "LLL dd, y")
                  : "Pick date range"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="range"
                selected={
                  dateRange.from && dateRange.to
                    ? { from: dateRange.from, to: dateRange.to }
                    : undefined
                }
                onSelect={(range) =>
                  setDateRange({ from: range?.from, to: range?.to })
                }
                className="pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
          {filters.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <Badge
                  key={f}
                  variant="secondary"
                  className="cursor-pointer gap-1"
                  onClick={() => setFilters(filters.filter((x) => x !== f))}
                >
                  {f} ×
                </Badge>
              ))}
              <button
                className="text-primary text-xs hover:underline"
                onClick={() => setFilters([])}
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      </section>

      <section>
        <h2 className="text-muted-foreground mb-4 text-sm font-medium tracking-wider uppercase">
          Buttons
        </h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="outline">Outline</Button>
          <Button disabled>Disabled</Button>
          <Button>
            <Loader2 className="mr-2 animate-spin" size={16} />
            Loading
          </Button>
          <Button size="icon">
            <Plus size={16} />
          </Button>
          <Button className="col-span-2 w-full">Full Width</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      <section>
        <h2 className="text-muted-foreground mb-4 text-sm font-medium tracking-wider uppercase">
          Dropdown Menus
        </h2>
        <div className="flex gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <MoreHorizontal size={16} className="mr-2" />
                Actions
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Edit size={14} className="mr-2" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Plus size={14} className="mr-2" />
                Duplicate
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>More options</DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>Archive</DropdownMenuItem>
                  <DropdownMenuItem>Export</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                <Trash2 size={14} className="mr-2" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </section>

      <section>
        <h2 className="text-muted-foreground mb-4 text-sm font-medium tracking-wider uppercase">
          Modals
        </h2>
        <div className="flex flex-wrap gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Confirmation</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button>Confirm</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="destructive">Delete Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Delete Account</DialogTitle>
                <DialogDescription>
                  This will permanently delete your account and all data.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button variant="destructive">Delete</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Form Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit Profile</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div>
                  <Label>Name</Label>
                  <Input defaultValue="Alif Reza" />
                </div>
                <div>
                  <Label>Email</Label>
                  <Input defaultValue="alif@fenco.io" />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button onClick={() => toast.success("Saved!")}>Save</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      <section>
        <h2 className="text-muted-foreground mb-4 text-sm font-medium tracking-wider uppercase">
          Drawers / Sheets
        </h2>
        <div className="flex flex-wrap gap-3">
          {(["right", "left", "bottom"] as const).map((side) => (
            <Sheet key={side}>
              <SheetTrigger asChild>
                <Button variant="outline">Sheet from {side}</Button>
              </SheetTrigger>
              <SheetContent side={side}>
                <SheetHeader>
                  <SheetTitle>Sheet Content</SheetTitle>
                </SheetHeader>
                <div className="py-4">
                  <p className="text-muted-foreground text-sm">
                    This is a sheet sliding from the {side}.
                  </p>
                </div>
                <SheetFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button>Save</Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-muted-foreground mb-4 text-sm font-medium tracking-wider uppercase">
          Tabs Variants
        </h2>
        <div className="space-y-6">
          <Card className="rounded-2xl">
            <CardContent className="pt-5">
              <p className="mb-3 text-sm font-medium">Default (underline)</p>
              <Tabs defaultValue="tab1">
                <TabsList>
                  <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                  <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                  <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1">
                  <p className="text-muted-foreground p-3 text-sm">
                    Content for Tab 1
                  </p>
                </TabsContent>
                <TabsContent value="tab2">
                  <p className="text-muted-foreground p-3 text-sm">
                    Content for Tab 2
                  </p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardContent className="pt-5">
              <p className="mb-3 text-sm font-medium">With Icons</p>
              <Tabs defaultValue="home">
                <TabsList>
                  <TabsTrigger value="home" className="gap-1">
                    <Home size={14} />
                    Home
                  </TabsTrigger>
                  <TabsTrigger value="settings" className="gap-1">
                    <Settings size={14} />
                    Settings
                  </TabsTrigger>
                  <TabsTrigger value="profile" className="gap-1">
                    <User size={14} />
                    Profile
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="home">
                  <p className="text-muted-foreground p-3 text-sm">
                    Home content
                  </p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardContent className="pt-5">
              <p className="mb-3 text-sm font-medium">Pill Style</p>
              <Tabs defaultValue="a">
                <TabsList className="bg-muted rounded-full p-1">
                  <TabsTrigger value="a" className="rounded-full">
                    Option A
                  </TabsTrigger>
                  <TabsTrigger value="b" className="rounded-full">
                    Option B
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="a">
                  <p className="text-muted-foreground p-3 text-sm">
                    Option A content
                  </p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
