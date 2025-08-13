import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Diamond } from "lucide-react";

export default function UpgradeBanner() {
  return (
    <Card className="bg-foreground text-background flex items-center gap-4 rounded-2xl border-0 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
      <Diamond size={24} className="text-background shrink-0" />
      <div className="flex-1">
        <p className="text-sm font-semibold">More features?</p>
        <p className="text-xs opacity-70">
          Update your account to premium to get more features
        </p>
      </div>
      <Button
        variant="secondary"
        size="sm"
        className="shrink-0 rounded-full text-xs transition-transform duration-200 hover:scale-105"
      >
        Go to premium
      </Button>
    </Card>
  );
}
