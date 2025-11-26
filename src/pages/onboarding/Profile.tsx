import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Home, Briefcase, GraduationCap, Car, CreditCard, Plus } from "lucide-react";

const loanTypes = [
  { id: "home", label: "Home Loan", icon: Home },
  { id: "personal", label: "Personal Loan", icon: Briefcase },
  { id: "education", label: "Education Loan", icon: GraduationCap },
  { id: "vehicle", label: "Vehicle Loan", icon: Car },
  { id: "credit", label: "Credit Card EMI", icon: CreditCard },
  { id: "other", label: "Other", icon: Plus },
];

const Profile = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string[]>(["home", "other"]);

  const toggleSelection = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleContinue = () => {
    if (selected.length > 0) {
      navigate("/onboarding/liability");
    }
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
          <div className="h-1 flex-1 bg-border rounded-full" />
          <div className="h-1 flex-1 bg-border rounded-full" />
        </div>

        <div className="bg-card rounded-2xl shadow-lg p-8">
          <h1 className="text-2xl font-bold mb-2">Financial Profile</h1>
          <p className="text-muted-foreground mb-6">
            Select all active loans or liabilities you currently have.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            {loanTypes.map((loan) => {
              const Icon = loan.icon;
              const isSelected = selected.includes(loan.id);
              return (
                <button
                  key={loan.id}
                  onClick={() => toggleSelection(loan.id)}
                  className={`p-6 rounded-xl border-2 transition-all ${
                    isSelected
                      ? "border-primary bg-primary/5"
                      : "border-border bg-background hover:border-primary/50"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 mx-auto ${
                      isSelected ? "bg-primary/10" : "bg-muted"
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 ${isSelected ? "text-primary" : "text-muted-foreground"}`}
                    />
                  </div>
                  <p className="text-sm font-medium text-center">{loan.label}</p>
                </button>
              );
            })}
          </div>

          <Button onClick={handleContinue} className="w-full" size="lg" disabled={selected.length === 0}>
            Continue ({selected.length} Selected)
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
