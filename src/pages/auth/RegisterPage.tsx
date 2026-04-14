import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";

const getStrength = (pw: string): 0 | 1 | 2 | 3 | 4 => {
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  return score as 0 | 1 | 2 | 3 | 4;
};
const labels = ["", "Weak", "Fair", "Good", "Strong"];
const colors = ["", "bg-destructive", "bg-warning", "bg-accent", "bg-emerald-500"];

const registerSchema = z
  .object({
    fullName: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Min 6 characters"),
    confirmPassword: z.string(),
    terms: z.boolean(),
  })
  .refine((d) => d.password === d.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const [showPw, setShowPw] = useState(false);
  const [pwValue, setPwValue] = useState("");
  const strength = getStrength(pwValue);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormData) => {
    console.log("Register:", data);
  };

  return (
    <div className="bg-background flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-[420px]">
        <Link
          to="/dashboard"
          className="text-muted-foreground hover:text-foreground mb-6 inline-flex items-center gap-1 text-sm"
        >
          <ArrowLeft size={14} /> Back to dashboard
        </Link>
        <div className="mb-6 text-center">
          <div className="bg-primary text-primary-foreground mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg text-lg font-bold">
            F
          </div>
          <p className="text-muted-foreground text-xs">Finora Finance</p>
        </div>
        <Card className="rounded-2xl shadow-lg">
          <CardHeader>
            <CardTitle className="text-center">Create Account</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Label htmlFor="register-name">Full Name</Label>
                <Input id="register-name" {...register("fullName")} aria-describedby={errors.fullName ? "register-name-error" : undefined} />
                {errors.fullName && (
                  <p id="register-name-error" className="text-destructive mt-1 text-xs">{errors.fullName.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="register-email">Email</Label>
                <Input id="register-email" type="email" {...register("email")} aria-describedby={errors.email ? "register-email-error" : undefined} />
                {errors.email && (
                  <p id="register-email-error" className="text-destructive mt-1 text-xs">{errors.email.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="register-password">Password</Label>
                <div className="relative">
                  <Input
                    id="register-password"
                    type={showPw ? "text" : "password"}
                    {...register("password")}
                    onChange={(e) => {
                      register("password").onChange(e);
                      setPwValue(e.target.value);
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPw(!showPw)}
                    aria-label="Toggle password visibility"
                    className="text-muted-foreground absolute top-1/2 right-3 -translate-y-1/2"
                  >
                    {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                {pwValue && (
                  <div className="mt-2">
                    <div className="mb-1 flex gap-1">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className={`h-1.5 flex-1 rounded-full ${i <= strength ? colors[strength] : "bg-muted"}`}
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-xs">{labels[strength]}</p>
                  </div>
                )}
              </div>
              <div>
                <Label htmlFor="register-confirm">Confirm Password</Label>
                <Input id="register-confirm" type="password" {...register("confirmPassword")} aria-describedby={errors.confirmPassword ? "register-confirm-error" : undefined} />
                {errors.confirmPassword && (
                  <p id="register-confirm-error" className="text-destructive mt-1 text-xs">{errors.confirmPassword.message}</p>
                )}
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="terms" {...register("terms")} />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the Terms & Conditions
                </Label>
              </div>
              <Button type="submit" className="w-full">
                Create Account
              </Button>
            </form>
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="border-border w-full border-t" />
              </div>
              <div className="text-muted-foreground relative flex justify-center text-xs">
                <span className="bg-card px-2">or continue with</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline">Google</Button>
              <Button variant="outline">Apple</Button>
            </div>
            <p className="text-muted-foreground mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:underline">
                Sign in
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
