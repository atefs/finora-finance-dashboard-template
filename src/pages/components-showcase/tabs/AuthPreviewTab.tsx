import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AuthPreviewTab() {
  return (
    <div>
      <h2 className="text-muted-foreground mb-4 text-sm font-medium tracking-wider uppercase">
        Auth Page Previews
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {[
          { title: "Login", path: "/login" },
          { title: "Register", path: "/register" },
          { title: "Forgot Password", path: "/forgot-password" },
        ].map((page) => (
          <Card key={page.title} className="overflow-hidden rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">{page.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-background border-border w-[125%] origin-top-left scale-[0.8] transform rounded-xl border p-4">
                <div className="mb-4 text-center">
                  <div className="bg-primary text-primary-foreground mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold">
                    F
                  </div>
                  <p className="text-muted-foreground text-[10px]">Finora Finance</p>
                </div>
                <div className="space-y-2">
                  <div className="bg-muted h-8 rounded" />
                  <div className="bg-muted h-8 rounded" />
                  {page.title === "Register" && <div className="bg-muted h-8 rounded" />}
                  <div className="bg-primary h-8 rounded" />
                </div>
                <a
                  href={page.path}
                  className="text-primary mt-3 block text-center text-xs hover:underline"
                >
                  Open full page →
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
