import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

const profileSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().optional(),
  address: z.string().optional(),
});

type ProfileFormData = z.infer<typeof profileSchema>;

export default function ProfilePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      fullName: "Alif Reza",
      email: "alif@fenco.io",
      phone: "+1 234 567 890",
      address: "San Francisco, CA",
    },
  });

  const onSubmit = (data: ProfileFormData) => {
    toast.success("Profile updated successfully");
    console.log(data);
  };

  return (
    <div>
      <PageHeader title="Profile" breadcrumb="Home / Profile" />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" {...register("fullName")} aria-describedby={errors.fullName ? "profile-name-error" : undefined} />
                {errors.fullName && (
                  <p id="profile-name-error" className="text-destructive mt-1 text-xs">{errors.fullName.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" {...register("email")} aria-describedby={errors.email ? "profile-email-error" : undefined} />
                {errors.email && (
                  <p id="profile-email-error" className="text-destructive mt-1 text-xs">{errors.email.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" {...register("phone")} />
              </div>
              <div>
                <Label htmlFor="address">Address</Label>
                <Input id="address" {...register("address")} />
              </div>
              <Button type="submit">Save Changes</Button>
            </form>
          </CardContent>
        </Card>

        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>Account Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <p className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
                Notifications
              </p>
              {["Email notifications", "Push notifications", "SMS alerts", "Weekly digest"].map(
                (label) => (
                  <div key={label} className="flex items-center justify-between">
                    <Label>{label}</Label>
                    <Switch defaultChecked={label.includes("Email")} />
                  </div>
                ),
              )}
            </div>
            <Separator />
            <div className="space-y-3">
              <p className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
                Change Password
              </p>
              <Input type="password" placeholder="Current password" />
              <Input type="password" placeholder="New password" />
              <Input type="password" placeholder="Confirm new password" />
              <Button variant="outline">Update Password</Button>
            </div>
            <Separator />
            <div>
              <p className="text-destructive mb-2 text-sm font-medium">Danger Zone</p>
              <Button variant="destructive">Delete Account</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
