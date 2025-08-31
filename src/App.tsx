import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/context/theme-context";
import AppShell from "@/components/layout/AppShell";
import ScrollToTop from "@/components/ScrollToTop";
import DashboardPage from "@/pages/dashboard/DashboardPage";
import TransactionsPage from "@/pages/transactions/TransactionsPage";
import ProfilePage from "@/pages/profile/ProfilePage";
import CardsPage from "@/pages/cards/CardsPage";
import SettingsPage from "@/pages/settings/SettingsPage";
import ComponentsPage from "@/pages/components-showcase/ComponentsPage";
import LoginPage from "@/pages/auth/LoginPage";
import RegisterPage from "@/pages/auth/RegisterPage";
import ForgotPasswordPage from "@/pages/auth/ForgotPasswordPage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route element={<AppShell />}>
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
        <Sonner richColors position="bottom-right" />
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
