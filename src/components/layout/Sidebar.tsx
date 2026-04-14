import { NavLink, useLocation } from "react-router-dom";
import { NAV_ITEMS } from "@/lib/constants";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const location = useLocation();
  const mainItems = NAV_ITEMS.filter((n) => n.section === "main");
  const bottomItems = NAV_ITEMS.filter((n) => n.section === "bottom");

  const linkClass = (path: string) => {
    const active = location.pathname.startsWith(path);
    return cn(
      "relative flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200 group",
      active
        ? "bg-sidebar-active-bg text-sidebar-active-fg shadow-lg shadow-black/20"
        : "text-sidebar-fg hover:text-sidebar-active-fg hover:bg-sidebar-active-bg/50 hover:scale-110",
    );
  };

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="fixed top-0 bottom-0 left-0 z-40 hidden w-[76px] flex-col items-center gap-1 px-2 py-3 md:flex">
        {/* Top section */}
        <div className="bg-sidebar-bg flex w-full flex-col items-center gap-1 rounded-2xl px-1.5 py-4">
          <div className="bg-primary/10 text-primary mb-2 flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold transition-transform duration-200 hover:scale-110">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <nav className="flex w-full flex-col items-center gap-1">
            {mainItems.map((item) => (
              <Tooltip key={item.id} delayDuration={0}>
                <TooltipTrigger asChild>
                  <NavLink to={item.path} className={linkClass(item.path)}>
                    <item.icon size={20} />
                  </NavLink>
                </TooltipTrigger>
                <TooltipContent side="right" className="animate-scale-in">
                  {item.label}
                </TooltipContent>
              </Tooltip>
            ))}
          </nav>
        </div>

        <div className="flex-1" />

        {/* Bottom section */}
        <div className="bg-sidebar-bg flex w-full flex-col items-center gap-1 rounded-2xl px-1.5 py-3">
          {bottomItems.map((item) => (
            <Tooltip key={item.id} delayDuration={0}>
              <TooltipTrigger asChild>
                <NavLink to={item.path} className={linkClass(item.path)}>
                  <item.icon size={20} />
                </NavLink>
              </TooltipTrigger>
              <TooltipContent side="right" className="animate-scale-in">
                {item.label}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </aside>

      {/* Mobile bottom bar */}
      <nav className="bg-sidebar-bg fixed right-0 bottom-0 left-0 z-40 mx-2 mb-2 flex h-16 items-center justify-around rounded-2xl px-2 md:hidden">
        {NAV_ITEMS.filter((n) => n.id !== "auth").map((item) => (
          <NavLink key={item.id} to={item.path} className={linkClass(item.path)}>
            <item.icon size={20} />
          </NavLink>
        ))}
      </nav>
    </>
  );
}
