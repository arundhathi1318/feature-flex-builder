import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User } from "lucide-react";

const Profile = () => {
  const [formData, setFormData] = useState({
    fullName: "Alex Smith",
    email: "alex@example.com",
    employment: "Salaried",
    monthlyIncome: "80000",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle save changes
  };

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <User className="w-7 h-7 text-primary" />
            <h1 className="text-3xl font-bold">Profile & Settings</h1>
          </div>
          <p className="text-muted-foreground mb-8">
            Update your personal details and account preferences.
          </p>

          <div className="bg-card rounded-xl shadow-sm p-8">
            <h2 className="text-xl font-semibold mb-6">Personal Information</h2>

            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="max-w-md"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="max-w-md"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6 max-w-md">
                  <div>
                    <Label htmlFor="employment">Employment</Label>
                    <Input
                      id="employment"
                      value={formData.employment}
                      onChange={(e) => setFormData({ ...formData, employment: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="monthlyIncome">Monthly Income (₹)</Label>
                    <Input
                      id="monthlyIncome"
                      type="number"
                      value={formData.monthlyIncome}
                      onChange={(e) => setFormData({ ...formData, monthlyIncome: e.target.value })}
                    />
                  </div>
                </div>

                <Button type="submit" className="mt-4">
                  Save Changes
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
