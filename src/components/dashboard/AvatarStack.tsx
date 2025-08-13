import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { USERS } from "@/lib/mock-data";

export default function AvatarStack() {
  const visible = USERS.slice(0, 5);
  const overflow = USERS.length - visible.length;

  return (
    <div className="flex items-center">
      {visible.map((user, i) => (
        <Avatar
          key={user.id}
          className={`border-card h-8 w-8 border-2 ${i > 0 ? "-ml-3" : ""}`}
          style={{ zIndex: visible.length - i }}
        >
          <AvatarFallback
            className={`${user.avatarColor} text-primary-foreground text-xs font-semibold`}
          >
            {user.avatarInitials}
          </AvatarFallback>
        </Avatar>
      ))}
      {overflow > 0 && (
        <div className="bg-muted border-card text-muted-foreground -ml-3 flex h-8 w-8 items-center justify-center rounded-full border-2 text-xs font-medium">
          +{overflow}
        </div>
      )}
    </div>
  );
}
