import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/context/theme-context";
import AppShell from "@/components/layout/AppShell";
import ScrollToTop from "@/components/ScrollToTop";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const DashboardPage = lazy(() => import("@/pages/dashboard/DashboardPage"));
const TransactionsPage = lazy(() => import("@/pages/transactions/TransactionsPage"));
const ProfilePage = lazy(() => import("@/pages/profile/ProfilePage"));
const CardsPage = lazy(() => import("@/pages/cards/CardsPage"));
const SettingsPage = lazy(() => import("@/pages/settings/SettingsPage"));
const ComponentsPage = lazy(() => import("@/pages/components-showcase/ComponentsPage"));
const LoginPage = lazy(() => import("@/pages/auth/LoginPage"));
const RegisterPage = lazy(() => import("@/pages/auth/RegisterPage"));
const ForgotPasswordPage = lazy(() => import("@/pages/auth/ForgotPasswordPage"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const queryClient = new QueryClient();

const RouteFallback = () => (
  <div className="bg-background flex min-h-screen items-center justify-center p-6">
    <div className="bg-card rounded-3xl px-8 py-6 text-center shadow-lg">
      <p className="text-foreground text-sm font-medium">Loading the next view...</p>
      <p className="text-muted-foreground mt-1 text-sm">Pulling in the page bundle now.</p>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Suspense fallback={<RouteFallback />}>
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route
                element={
                  <ErrorBoundary>
                    <AppShell />
                  </ErrorBoundary>
                }
              >
                <Route index element={<Navigate to="/dashboard" replace />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/transactions" element={<TransactionsPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/cards" element={<CardsPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/components" element={<ComponentsPage />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
        <Sonner richColors position="bottom-right" />
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
