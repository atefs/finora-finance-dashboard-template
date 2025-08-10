import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

export default function AppShell() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="mb-20 flex min-h-screen min-w-0 flex-1 flex-col md:mb-0 md:ml-[76px]">
        <TopBar />
        <main className="min-h-0 flex-1 p-4 md:p-6">
          <div
            key={location.pathname}
            className="animate-page-enter will-change-[transform,opacity]"
          >
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
