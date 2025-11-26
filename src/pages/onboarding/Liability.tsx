import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Briefcase } from "lucide-react";

const Liability = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "fridge",
    monthlyEmi: "4546",
    totalAmount: "44444444",
    interestRate: "",
    totalTenure: "",
    monthsPaid: "",
    nextEmiDate: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/onboarding/statement");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <Logo className="justify-center mb-4" />
        </div>

        {/* Progress bar */}
        <div className="flex gap-2 mb-8">
          <div className="h-1 flex-1 bg-primary rounded-full" />
          <div className="h-1 flex-1 bg-primary rounded-full" />
          <div className="h-1 flex-1 bg-primary rounded-full" />
          <div className="h-1 flex-1 bg-border rounded-full" />
        </div>

        <div className="bg-card rounded-2xl shadow-lg p-8">
          <div className="mb-6">
            <p className="text-xs text-primary font-semibold mb-1">DETAILING 2 OF 2</p>
            <div className="h-1 w-32 bg-primary rounded-full mb-4" />
            <p className="text-sm text-muted-foreground text-right">50% Complete</p>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-6 h-6 text-primary" />
            <h1 className="text-2xl font-bold">Other Liability</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">
                Name of Liability <span className="text-destructive">*</span>
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="monthlyEmi">
                Monthly EMI (₹) <span className="text-destructive">*</span>
              </Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">₹</span>
                <Input
                  id="monthlyEmi"
                  type="number"
                  value={formData.monthlyEmi}
                  onChange={(e) => setFormData({ ...formData, monthlyEmi: e.target.value })}
                  className="pl-8"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="totalAmount">Total Amount (₹)</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">₹</span>
                  <Input
                    id="totalAmount"
                    type="number"
                    value={formData.totalAmount}
                    onChange={(e) => setFormData({ ...formData, totalAmount: e.target.value })}
                    className="pl-8"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="interestRate">Interest Rate (%)</Label>
                <Input
                  id="interestRate"
                  type="number"
                  step="0.1"
                  placeholder="e.g. 8.5"
                  value={formData.interestRate}
                  onChange={(e) => setFormData({ ...formData, interestRate: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="totalTenure">Total Tenure (Mo)</Label>
                <Input
                  id="totalTenure"
                  type="number"
                  placeholder="e.g. 60"
                  value={formData.totalTenure}
                  onChange={(e) => setFormData({ ...formData, totalTenure: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="monthsPaid">Months Paid</Label>
                <Input
                  id="monthsPaid"
                  type="number"
                  placeholder="e.g. 12"
                  value={formData.monthsPaid}
                  onChange={(e) => setFormData({ ...formData, monthsPaid: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="remTenure">
                  Rem. Tenure <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="remTenure"
                  value="Calc automatically"
                  disabled
                  className="bg-muted"
                />
              </div>
              <div>
                <Label htmlFor="nextEmiDate">
                  Next EMI Date <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="nextEmiDate"
                  type="date"
                  value={formData.nextEmiDate}
                  onChange={(e) => setFormData({ ...formData, nextEmiDate: e.target.value })}
                  required
                />
              </div>
            </div>

            <Button type="submit" className="w-full" size="lg">
              Next: Upload Statement
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Liability;
