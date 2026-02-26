import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Mail } from "lucide-react";

type Step = "request" | "sent" | "reset";

export default function ForgotPasswordPage() {
  const [step, setStep] = useState<Step>("request");
  const [resendIn, setResendIn] = useState(60);

  useEffect(() => {
    if (step !== "sent") return;
    setResendIn(60);
    const interval = setInterval(() => {
      setResendIn((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [step]);

  return (
    <div className="bg-background flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-[420px]">
        <Link
          to="/login"
          className="text-muted-foreground hover:text-foreground mb-6 inline-flex items-center gap-1 text-sm"
        >
          <ArrowLeft size={14} /> Back to login
        </Link>
        <div className="mb-6 text-center">
          <div className="bg-primary text-primary-foreground mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg text-lg font-bold">
            F
          </div>
          <p className="text-muted-foreground text-xs">Finora Finance</p>
        </div>
        <Card className="rounded-2xl shadow-lg">
          <CardHeader>
            <CardTitle className="text-center">
              {step === "sent"
                ? "Check your email"
                : step === "reset"
                  ? "Set New Password"
                  : "Forgot Password"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {step === "request" && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="forgot-email">Email</Label>
                  <Input id="forgot-email" type="email" placeholder="Enter your email" />
                </div>
                <Button className="w-full" onClick={() => setStep("sent")}>
                  Send Reset Link
                </Button>
                <p className="text-muted-foreground text-center text-sm">
                  <Link to="/login" className="text-primary hover:underline">
                    Back to login
                  </Link>
                </p>
              </div>
            )}
            {step === "sent" && (
              <div className="space-y-4 text-center">
                <Mail size={48} className="text-muted-foreground mx-auto" />
                <p className="text-muted-foreground text-sm">
                  We've sent a password reset link to your email
                </p>
                <Button
                  variant="outline"
                  className="w-full"
                  disabled={resendIn > 0}
                  onClick={() => setStep("sent")}
                >
                  {resendIn > 0 ? `Resend in ${resendIn}s` : "Resend"}
                </Button>
                <Button className="w-full" onClick={() => setStep("reset")}>
                  I have the code
                </Button>
              </div>
            )}
            {step === "reset" && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div>
                  <Label htmlFor="confirm-new-password">Confirm Password</Label>
                  <Input id="confirm-new-password" type="password" />
                </div>
                <Button className="w-full" onClick={() => setStep("request")}>
                  Set New Password
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
