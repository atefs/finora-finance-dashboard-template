import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useTheme } from "@/hooks/use-theme";
import { SESSIONS, INVOICES } from "@/lib/mock-data";
import StatusBadge from "@/components/shared/StatusBadge";
import { Sun, Moon, Monitor } from "lucide-react";

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <PageHeader title="Settings" breadcrumb="Home / Settings" />
      <Tabs
        defaultValue="general"
        orientation="vertical"
        className="flex flex-col gap-6 lg:flex-row"
      >
        <TabsList className="bg-card border-border flex h-auto shrink-0 rounded-2xl border p-1 lg:w-48 lg:flex-col">
          {[
            "General",
            "Appearance",
            "Notifications",
            "Security",
            "Billing",
          ].map((t) => (
            <TabsTrigger
              key={t}
              value={t.toLowerCase()}
              className="w-full justify-start"
            >
              {t}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="flex-1">
          <TabsContent value="general">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>App Name</Label>
                  <Input defaultValue="Finora Finance" />
                </div>
                <div>
                  <Label>Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Timezone</Label>
                  <Select defaultValue="pst">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pst">Pacific Time</SelectItem>
                      <SelectItem value="est">Eastern Time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Currency</Label>
                  <Select defaultValue="usd">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usd">USD ($)</SelectItem>
                      <SelectItem value="eur">EUR (€)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="appearance">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Appearance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="mb-3 block">Theme</Label>
                  <RadioGroup
                    value={theme}
                    onValueChange={(v) =>
                      setTheme(v as "light" | "dark" | "system")
                    }
                    className="flex gap-4"
                  >
                    {[
                      { value: "light", label: "Light", icon: Sun },
                      { value: "dark", label: "Dark", icon: Moon },
                      { value: "system", label: "System", icon: Monitor },
                    ].map(({ value, label, icon: Icon }) => (
                      <label
                        key={value}
                        className="flex cursor-pointer items-center gap-2"
                      >
                        <RadioGroupItem value={value} />
                        <Icon size={16} />
                        {label}
                      </label>
                    ))}
                  </RadioGroup>
                </div>
                <div>
                  <Label className="mb-3 block">Accent Color</Label>
                  <div className="flex gap-3">
                    {[
                      "bg-primary",
                      "bg-accent",
                      "bg-emerald-500",
                      "bg-violet-500",
                      "bg-amber-500",
                      "bg-rose-500",
                    ].map((c) => (
                      <button
                        key={c}
                        className={`h-8 w-8 rounded-full ${c} border-border border-2 transition-transform hover:scale-110`}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <Label className="mb-3 block">Font Size</Label>
                  <Slider
                    defaultValue={[16]}
                    min={12}
                    max={20}
                    step={1}
                    className="w-64"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    label: "Transaction alerts",
                    desc: "Get notified for every transaction",
                  },
                  {
                    label: "Security alerts",
                    desc: "Important security notifications",
                  },
                  {
                    label: "Marketing emails",
                    desc: "Product updates and offers",
                  },
                  { label: "Weekly reports", desc: "Weekly spending summary" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between"
                  >
                    <div>
                      <p className="text-sm font-medium">{item.label}</p>
                      <p className="text-muted-foreground text-xs">
                        {item.desc}
                      </p>
                    </div>
                    <Switch
                      defaultChecked={
                        item.label.includes("Transaction") ||
                        item.label.includes("Security")
                      }
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">
                      Two-factor authentication
                    </p>
                    <p className="text-muted-foreground text-xs">
                      Add an extra layer of security
                    </p>
                  </div>
                  <Switch />
                </div>
                <div>
                  <p className="mb-3 text-sm font-medium">Active Sessions</p>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Device</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Last Active</TableHead>
                        <TableHead></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {SESSIONS.map((s) => (
                        <TableRow key={s.id}>
                          <TableCell className="text-sm">{s.device}</TableCell>
                          <TableCell className="text-muted-foreground text-sm">
                            {s.location}
                          </TableCell>
                          <TableCell className="text-muted-foreground text-sm">
                            {s.lastActive}
                          </TableCell>
                          <TableCell>
                            {!s.current && (
                              <Button variant="outline" size="sm">
                                Revoke
                              </Button>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <Button variant="outline">Download my data</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="billing">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Billing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-muted rounded-xl p-4">
                  <p className="text-sm font-medium">
                    Current Plan: <span className="text-primary">Premium</span>
                  </p>
                  <p className="text-muted-foreground text-xs">
                    $29.99/month · Renews on April 1, 2024
                  </p>
                </div>
                <div>
                  <p className="mb-3 text-sm font-medium">Invoice History</p>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {INVOICES.map((inv) => (
                        <TableRow key={inv.id}>
                          <TableCell className="text-muted-foreground text-sm">
                            {new Date(inv.date).toLocaleDateString()}
                          </TableCell>
                          <TableCell className="text-sm">
                            {inv.description}
                          </TableCell>
                          <TableCell className="text-right text-sm">
                            ${inv.amount}
                          </TableCell>
                          <TableCell>
                            <StatusBadge status={inv.status} />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
