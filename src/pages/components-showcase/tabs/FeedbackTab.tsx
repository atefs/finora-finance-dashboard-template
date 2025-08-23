import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import EmptyState from "@/components/shared/EmptyState";
import {
  AlertCircle,
  CheckCircle,
  AlertTriangle,
  Info,
  Loader2,
} from "lucide-react";
import { useState } from "react";

export default function FeedbackTab() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-muted-foreground mb-4 text-sm font-medium tracking-wider uppercase">
          Toasts
        </h2>
        <div className="flex flex-wrap gap-3">
          <Button onClick={() => toast.success("Operation successful!")}>
            Success Toast
          </Button>
          <Button
            variant="destructive"
            onClick={() => toast.error("Something went wrong")}
          >
            Error Toast
          </Button>
          <Button
            variant="outline"
            onClick={() => toast.warning("Please check your input")}
          >
            Warning Toast
          </Button>
          <Button
            variant="secondary"
            onClick={() => toast.info("New update available")}
          >
            Info Toast
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast("File deleted", {
                action: {
                  label: "Undo",
                  onClick: () => toast.success("Undone!"),
                },
              })
            }
          >
            Toast with Undo
          </Button>
        </div>
      </section>

      <section>
        <h2 className="text-muted-foreground mb-4 text-sm font-medium tracking-wider uppercase">
          Alerts
        </h2>
        <div className="max-w-xl space-y-3">
          <Alert>
            <CheckCircle className="h-4 w-4 text-emerald-500" />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>Your changes have been saved.</AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              There was an error processing your request.
            </AlertDescription>
          </Alert>
          <Alert>
            <AlertTriangle className="h-4 w-4 text-amber-500" />
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>
              Your session is about to expire.
            </AlertDescription>
          </Alert>
          <Alert>
            <Info className="text-accent h-4 w-4" />
            <AlertTitle>Info</AlertTitle>
            <AlertDescription>A new version is available.</AlertDescription>
          </Alert>
        </div>
      </section>

      <section>
        <h2 className="text-muted-foreground mb-4 text-sm font-medium tracking-wider uppercase">
          Loading States
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card className="rounded-2xl">
            <CardContent className="space-y-4 pt-5">
              <div className="flex items-center gap-4">
                <Loader2 className="text-primary animate-spin" size={16} />
                <Loader2 className="text-primary animate-spin" size={24} />
                <Loader2 className="text-primary animate-spin" size={32} />
              </div>
              <div>
                <p className="mb-2 text-sm">Determinate (65%)</p>
                <Progress value={65} className="h-2" />
              </div>
              <Button disabled>
                <Loader2 className="mr-2 animate-spin" size={16} />
                Loading…
              </Button>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardContent className="space-y-3 pt-5">
              <p className="mb-2 text-sm font-medium">Skeleton Cards</p>
              <div className="space-y-3">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-20 w-full rounded-xl" />
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="mt-4">
          <Button
            variant="outline"
            onClick={() => {
              setLoading(true);
              setTimeout(() => setLoading(false), 2000);
            }}
          >
            Toggle Full-page Overlay
          </Button>
          {loading && (
            <div className="bg-background/80 fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs">
              <Loader2 className="text-primary animate-spin" size={48} />
            </div>
          )}
        </div>
      </section>

      <section>
        <h2 className="text-muted-foreground mb-4 text-sm font-medium tracking-wider uppercase">
          Empty States
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card className="rounded-2xl">
            <CardContent className="pt-5">
              <EmptyState
                title="No data yet"
                description="Start by adding your first transaction."
                actionLabel="Add Transaction"
                onAction={() => toast.info("Add transaction clicked")}
              />
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardContent className="pt-5">
              <EmptyState
                title="No results"
                description="No results found for your search. Try adjusting your filters."
                actionLabel="Clear Filters"
                onAction={() => toast.info("Filters cleared")}
              />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
