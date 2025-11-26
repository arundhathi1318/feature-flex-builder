import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, CheckCircle2 } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold mb-1">Welcome back!</h1>
              <p className="text-muted-foreground">Your Financial Health Score is calculating...</p>
            </div>
            <div className="bg-success/10 text-success px-4 py-2 rounded-lg flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-medium">Statement Processed</span>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-card rounded-xl p-6 shadow-sm">
              <p className="text-sm text-muted-foreground mb-2">MONTHLY INCOME</p>
              <p className="text-3xl font-bold text-success">₹11,125,555</p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-sm">
              <p className="text-sm text-muted-foreground mb-2">TOTAL EXPENSES</p>
              <p className="text-3xl font-bold text-destructive">₹67,498</p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-sm">
              <p className="text-sm text-muted-foreground mb-2">SAVINGS RATE</p>
              <p className="text-3xl font-bold text-primary">99%</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {/* Chat Section */}
            <div className="col-span-2">
              <div className="bg-card rounded-xl shadow-sm p-6 h-[500px] flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">FinPilot Assistant</p>
                    <p className="text-xs text-muted-foreground">Always here to help.</p>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto mb-4">
                  <div className="bg-muted rounded-xl p-4 inline-block max-w-[80%]">
                    <p className="text-sm">
                      Hi! I'm FinPilot. I can help you save money. I've analyzed your ₹11125555 income.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <Input
                    placeholder="Ask me anything about your money..."
                    className="pr-12"
                  />
                  <Button
                    size="icon"
                    className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Expense Breakdown */}
            <div className="bg-card rounded-xl shadow-sm p-6">
              <h3 className="font-semibold mb-4">Your Monthly Expense Breakdown</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Bills & Utilities</span>
                    <span className="font-semibold">₹18,999</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500" style={{ width: "28%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>EMIs & Loans</span>
                    <span className="font-semibold">₹33,500</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-destructive" style={{ width: "50%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Transport</span>
                    <span className="font-semibold">₹3,200</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-warning" style={{ width: "5%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Other Expenses</span>
                    <span className="font-semibold">₹11,799</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-muted-foreground" style={{ width: "17%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-3 gap-6 mt-8">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
              <p className="font-semibold mb-1">Next Loan Payment</p>
              <p className="text-sm text-muted-foreground mb-2">₹4546 due soon</p>
              <Button variant="link" className="text-primary p-0 h-auto">
                View Details →
              </Button>
            </div>
            <div className="bg-warning/5 border border-warning/20 rounded-xl p-4">
              <p className="font-semibold mb-1">Upcoming Bill</p>
              <p className="text-sm text-muted-foreground mb-2">₹999 — due soon</p>
              <Button variant="link" className="text-warning p-0 h-auto">
                View Bills →
              </Button>
            </div>
            <div className="bg-success/5 border border-success/20 rounded-xl p-4">
              <p className="font-semibold mb-1">Savings Goals</p>
              <p className="text-sm text-muted-foreground mb-2">Emerg. Fund: 25%</p>
              <Button variant="link" className="text-success p-0 h-auto">
                View All Goals →
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
