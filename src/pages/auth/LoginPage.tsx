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

const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const [showPw, setShowPw] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log("Login:", data);
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
            <CardTitle className="text-center">Sign In</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" {...register("email")} />
                {errors.email && (
                  <p className="text-destructive mt-1 text-xs">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPw ? "text" : "password"}
                    {...register("password")}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPw(!showPw)}
                    className="text-muted-foreground absolute top-1/2 right-3 -translate-y-1/2"
                  >
                    {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-destructive mt-1 text-xs">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember" className="text-sm">
                    Remember me
                  </Label>
                </div>
                <Link
                  to="/forgot-password"
                  className="text-primary text-sm hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <Button type="submit" className="w-full">
                Sign In
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
              Don't have an account?{" "}
              <Link to="/register" className="text-primary hover:underline">
                Sign up
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
