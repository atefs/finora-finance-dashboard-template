import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Search, Eye, EyeOff, Check } from "lucide-react";

const formSchema = z
  .object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Min 6 characters"),
    confirm: z.string(),
    tos: z.boolean().refine((v) => v, "You must accept the terms"),
  })
  .refine((d) => d.password === d.confirm, {
    message: "Passwords don't match",
    path: ["confirm"],
  });

type FormData = z.infer<typeof formSchema>;

export default function FormsTab() {
  const [showPw, setShowPw] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [formSuccess, setFormSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = () => {
    setFormSuccess(true);
    setTimeout(() => setFormSuccess(false), 3000);
  };

  const simulateUpload = () => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + 10;
      });
    }, 200);
  };

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-muted-foreground mb-4 text-sm font-medium tracking-wider uppercase">
          Text Inputs
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card className="rounded-2xl">
            <CardContent className="pt-5">
              <Label>Default</Label>
              <Input placeholder="Enter text..." />
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardContent className="pt-5">
              <Label>With Leading Icon</Label>
              <div className="relative">
                <Search
                  size={16}
                  className="text-muted-foreground absolute top-1/2 left-3 -translate-y-1/2"
                />
                <Input className="pl-9" placeholder="Search..." />
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardContent className="pt-5">
              <Label>Password Toggle</Label>
              <div className="relative">
                <Input
                  type={showPw ? "text" : "password"}
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPw(!showPw)}
                  className="text-muted-foreground absolute top-1/2 right-3 -translate-y-1/2"
                >
                  {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardContent className="pt-5">
              <Label>Disabled</Label>
              <Input disabled placeholder="Disabled input" />
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardContent className="pt-5">
              <Label>Read-only</Label>
              <Input readOnly defaultValue="Read-only value" />
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardContent className="pt-5">
              <Label>Error State</Label>
              <Input className="ring-destructive ring-2" />
              <p className="text-destructive mt-1 text-xs">
                This field is required
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardContent className="pt-5">
              <Label>Success State</Label>
              <div className="relative">
                <Input
                  className="pr-9 ring-2 ring-emerald-500"
                  defaultValue="Valid input"
                />
                <Check
                  size={16}
                  className="absolute top-1/2 right-3 -translate-y-1/2 text-emerald-500"
                />
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardContent className="pt-5">
              <Label>Textarea</Label>
              <Textarea rows={3} placeholder="Write something..." />
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardContent className="pt-5">
              <Label>Textarea with Counter</Label>
              <Textarea
                rows={3}
                maxLength={200}
                onChange={(e) => setCharCount(e.target.value.length)}
                placeholder="Write something..."
              />
              <p className="text-muted-foreground mt-1 text-right text-xs">
                {charCount} / 200
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-muted-foreground mb-4 text-sm font-medium tracking-wider uppercase">
          Select
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card className="rounded-2xl">
            <CardContent className="pt-5">
              <Label>Single Select</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choose..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="a">Option A</SelectItem>
                  <SelectItem value="b">Option B</SelectItem>
                  <SelectItem value="c">Option C</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardContent className="pt-5">
              <Label>Grouped Select</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choose..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="de">Germany</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-muted-foreground mb-4 text-sm font-medium tracking-wider uppercase">
          Checkboxes & Radios
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card className="rounded-2xl">
            <CardContent className="space-y-3 pt-5">
              <Label>Checkbox Group</Label>
              {["Option 1", "Option 2", "Option 3", "Option 4"].map((o, i) => (
                <div key={o} className="flex items-center gap-2">
                  <Checkbox id={`cb-${i}`} defaultChecked={i < 2} />
                  <Label htmlFor={`cb-${i}`}>{o}</Label>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardContent className="pt-5">
              <Label>Radio Group</Label>
              <RadioGroup defaultValue="a" className="mt-2 space-y-2">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="a" id="r1" />
                  <Label htmlFor="r1">Choice A</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="b" id="r2" />
                  <Label htmlFor="r2">Choice B</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="c" id="r3" />
                  <Label htmlFor="r3">Choice C</Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-muted-foreground mb-4 text-sm font-medium tracking-wider uppercase">
          Switches
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card className="rounded-2xl">
            <CardContent className="space-y-3 pt-5">
              <Label>Basic Switch</Label>
              <Switch />
              <div className="flex items-center justify-between">
                <Label>With label</Label>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-muted-foreground mb-4 text-sm font-medium tracking-wider uppercase">
          File Upload
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card className="rounded-2xl">
            <CardContent className="pt-5">
              <Label>Upload Progress</Label>
              <Button
                variant="outline"
                className="mb-3"
                onClick={simulateUpload}
              >
                Simulate Upload
              </Button>
              <Progress value={uploadProgress} className="h-2" />
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardContent className="pt-5">
              <Label>Drag & Drop Zone</Label>
              <div className="border-border text-muted-foreground hover:border-primary cursor-pointer rounded-lg border-2 border-dashed p-8 text-center text-sm transition-colors">
                Drop files here or click to browse
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-muted-foreground mb-4 text-sm font-medium tracking-wider uppercase">
          Complete Validated Form
        </h2>
        <Card className="max-w-md rounded-2xl">
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
          </CardHeader>
          <CardContent>
            {formSuccess && (
              <Alert className="mb-4 border-emerald-500 bg-emerald-50">
                <AlertDescription className="text-emerald-700">
                  Account created successfully!
                </AlertDescription>
              </Alert>
            )}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Label>Name</Label>
                <Input {...register("name")} />
                {errors.name && (
                  <p className="text-destructive mt-1 text-xs">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <Label>Email</Label>
                <Input type="email" {...register("email")} />
                {errors.email && (
                  <p className="text-destructive mt-1 text-xs">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <Label>Password</Label>
                <Input type="password" {...register("password")} />
                {errors.password && (
                  <p className="text-destructive mt-1 text-xs">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div>
                <Label>Confirm Password</Label>
                <Input type="password" {...register("confirm")} />
                {errors.confirm && (
                  <p className="text-destructive mt-1 text-xs">
                    {errors.confirm.message}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-2">
                <Checkbox {...register("tos")} />
                <Label className="text-sm">I accept the Terms</Label>
              </div>
              {errors.tos && (
                <p className="text-destructive text-xs">{errors.tos.message}</p>
              )}
              <Button type="submit" className="w-full">
                Create Account
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
