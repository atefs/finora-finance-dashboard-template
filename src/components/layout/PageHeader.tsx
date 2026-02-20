import type { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  breadcrumb?: string;
  actions?: ReactNode;
}

export default function PageHeader({ title, breadcrumb, actions }: PageHeaderProps) {
  return (
    <div className="mb-6 flex items-center justify-between">
      <div>
        {breadcrumb && <p className="text-muted-foreground mb-1 text-xs">{breadcrumb}</p>}
        <h2 className="text-foreground text-2xl font-bold">{title}</h2>
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </div>
  );
}
