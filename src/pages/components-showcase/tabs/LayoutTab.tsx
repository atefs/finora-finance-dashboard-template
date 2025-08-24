import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronDown, User, Settings, LogOut } from "lucide-react";
import { useState } from "react";

export default function LayoutTab() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-muted-foreground mb-4 text-sm font-medium tracking-wider uppercase">
          Page Header
        </h2>
        <Card className="rounded-2xl">
          <CardContent className="pt-5">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink>Analytics</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="mt-3 flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold">Analytics</h1>
                <p className="text-muted-foreground text-sm">
                  Overview of your analytics data
                </p>
              </div>
              <Button>Export</Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-muted-foreground mb-4 text-sm font-medium tracking-wider uppercase">
          Cards & Containers
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card className="rounded-2xl">
            <CardContent className="pt-5">
              <p className="text-sm">Basic card with just content.</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>With Header</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Card with header, content, and footer.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">
                Action
              </Button>
            </CardFooter>
          </Card>
          <Card className="overflow-hidden rounded-2xl">
            <div className="from-primary to-accent h-24 bg-gradient-to-r" />
            <CardContent className="pt-5">
              <p className="text-sm">Card with gradient header image.</p>
            </CardContent>
          </Card>
          <Collapsible open={open} onOpenChange={setOpen}>
            <Card className="rounded-2xl">
              <CardContent className="pt-5">
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    className="h-auto w-full justify-between p-0 hover:bg-transparent"
                  >
                    <span className="font-medium">Collapsible Card</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${open ? "rotate-180" : ""}`}
                    />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-3">
                  <p className="text-muted-foreground text-sm">
                    This content can be toggled. Great for FAQ sections or
                    expandable details.
                  </p>
                </CollapsibleContent>
              </CardContent>
            </Card>
          </Collapsible>
          <Card className="rounded-2xl">
            <CardContent className="pt-5">
              <p className="mb-3 text-sm">Nested Card</p>
              <Card className="bg-muted rounded-xl">
                <CardContent className="pt-4">
                  <p className="text-muted-foreground text-sm">
                    Inner card with muted background
                  </p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardContent className="flex gap-4 pt-5">
              <div className="from-primary to-accent h-24 w-24 shrink-0 rounded-xl bg-gradient-to-br" />
              <div>
                <p className="font-medium">Horizontal Card</p>
                <p className="text-muted-foreground mt-1 text-sm">
                  Card with image on the left and content on the right.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-muted-foreground mb-4 text-sm font-medium tracking-wider uppercase">
          Grid Layouts
        </h2>
        <div className="space-y-4">
          {[1, 2, 3, 4].map((cols) => (
            <div key={cols}>
              <p className="text-muted-foreground mb-2 text-xs">
                {cols}-column grid
              </p>
              <div className={`grid gap-3 grid-cols-${cols}`}>
                {Array.from({ length: cols }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-muted text-muted-foreground flex h-16 items-center justify-center rounded-xl text-sm"
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-muted-foreground mb-4 text-sm font-medium tracking-wider uppercase">
          Dividers
        </h2>
        <div className="space-y-4">
          <Separator />
          <div className="flex items-center gap-4">
            <Separator className="flex-1" />
            <span className="text-muted-foreground text-xs">OR</span>
            <Separator className="flex-1" />
          </div>
          <div className="flex h-12 items-center gap-4">
            <div className="bg-muted rounded p-3 text-sm">Left</div>
            <Separator orientation="vertical" />
            <div className="bg-muted rounded p-3 text-sm">Right</div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-muted-foreground mb-4 text-sm font-medium tracking-wider uppercase">
          User Profile Menu
        </h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="gap-2">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                  AR
                </AvatarFallback>
              </Avatar>
              Alif Reza
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <div className="px-2 py-1.5">
              <p className="text-sm font-medium">Alif Reza</p>
              <p className="text-muted-foreground text-xs">alif@fenco.io</p>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User size={14} className="mr-2" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings size={14} className="mr-2" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut size={14} className="mr-2" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </section>
    </div>
  );
}
