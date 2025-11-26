import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CreditCard, Home, Car, Briefcase } from "lucide-react";

const loans = [
  {
    id: 1,
    name: "fridge",
    icon: Briefcase,
    iconBg: "bg-destructive/10",
    iconColor: "text-destructive",
    amount: 4546,
    status: "PAY SOON",
    statusColor: "text-destructive",
    progress: 0,
    progressColor: "bg-destructive",
    nextDate: "2025-11-20",
  },
  {
    id: 2,
    name: "Home Loan",
    icon: Home,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    amount: 5555,
    status: "months left",
    statusColor: "text-destructive",
    progress: 100,
    progressColor: "bg-success",
    nextDate: "2025-11-27",
  },
  {
    id: 3,
    name: "Primary Residence Mortgage",
    icon: Home,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    amount: 25000,
    status: "180 months left",
    statusColor: "text-destructive",
    progress: 50,
    progressColor: "bg-warning",
    nextDate: "2025-12-05",
  },
  {
    id: 4,
    name: "Car Loan",
    icon: Car,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    amount: 8500,
    status: "24 months left",
    statusColor: "text-destructive",
    progress: 33,
    progressColor: "bg-warning",
    nextDate: "2025-12-10",
  },
];

const Loans = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <CreditCard className="w-7 h-7 text-destructive" />
            <h1 className="text-3xl font-bold">My Loans & EMIs</h1>
          </div>
          <p className="text-muted-foreground mb-8">
            Track money you borrowed and your monthly payments.
          </p>

          {/* Loan Cards Grid */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            {loans.map((loan) => {
              const Icon = loan.icon;
              return (
                <div key={loan.id} className="bg-card rounded-xl p-6 shadow-sm">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-full ${loan.iconBg} flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 ${loan.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold">{loan.name}</h3>
                        <p className={`text-sm ${loan.statusColor}`}>{loan.status}</p>
                      </div>
                    </div>
                    <p className="text-2xl font-bold">₹{loan.amount.toLocaleString()}</p>
                  </div>

                  <div className="mb-3">
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${loan.progressColor}`} 
                        style={{ width: `${loan.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      {loan.progress}% Paid
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Next: {loan.nextDate}
                    </span>
                  </div>

                  <Button className="w-full mt-4">Pay Now</Button>
                </div>
              );
            })}
          </div>

          {/* Pay Loan Faster Calculator */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <CreditCard className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold text-primary">Pay Loan Faster</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              See what happens if you pay a little extra every month.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Select Loan</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    {loans.map((loan) => (
                      <SelectItem key={loan.id} value={loan.id.toString()}>
                        {loan.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Extra Amount (₹)</label>
                <Input placeholder="e.g. 500" />
              </div>
            </div>

            <Button className="w-full mb-4">Check Saving</Button>

            <div className="bg-primary/10 rounded-lg p-4">
              <p className="font-semibold mb-1">Result:</p>
              <p className="text-sm text-primary">
                By paying just ₹500 more, you save interest and finish your loan 6 months early!
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Loans;
