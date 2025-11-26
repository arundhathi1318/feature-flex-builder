import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { PiggyBank, TrendingUp, Shield, Home } from "lucide-react";

const Savings = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <PiggyBank className="w-7 h-7 text-success" />
            <h1 className="text-3xl font-bold">My Savings</h1>
          </div>
          <p className="text-muted-foreground mb-8">
            Simple ways to grow your money safely.
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-card rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-success" />
                <p className="text-sm text-muted-foreground">MONEY LEFT OVER</p>
              </div>
              <p className="text-3xl font-bold mb-1">₹11058057</p>
              <p className="text-sm text-muted-foreground">You save 99% of income</p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-primary" />
                <p className="text-sm text-muted-foreground">TOTAL SAVED SO FAR</p>
              </div>
              <p className="text-3xl font-bold mb-1">₹325000</p>
              <p className="text-sm text-muted-foreground">For your goals</p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-success" />
                <p className="text-sm text-muted-foreground">SUGGESTED SAVING</p>
              </div>
              <p className="text-3xl font-bold mb-1">₹5529029</p>
              <p className="text-sm text-muted-foreground">Put this in bank/fund monthly</p>
            </div>
          </div>

          {/* Saving Tip */}
          <div className="bg-gradient-to-r from-primary to-accent rounded-xl p-6 mb-8 text-primary-foreground">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-6 h-6" />
              <h2 className="text-xl font-bold">Easy Saving Tip</h2>
            </div>
            <h3 className="text-2xl font-bold mb-4">Start a Recurring Deposit (RD) or SIP.</h3>
            <p className="mb-6">
              You have extra money (₹11058057) left this month. We suggest you automatically save{" "}
              <span className="font-bold">₹5529029</span> every month. It grows over time!
            </p>
            <div className="flex gap-4">
              <Button variant="secondary" size="lg">
                Start Saving
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                Calculate Return
              </Button>
            </div>
          </div>

          {/* Goals */}
          <div className="bg-card rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-6">Your Goals</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-semibold">Emergency Fund</h3>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-bold text-primary">25%</span>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </div>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden mb-1">
                    <div className="h-full bg-primary" style={{ width: "25%" }} />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    ₹25000 saved of ₹100000
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                  <Home className="w-6 h-6 text-success" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-semibold">House Down Payment</h3>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-bold text-success">15%</span>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </div>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden mb-1">
                    <div className="h-full bg-success" style={{ width: "15%" }} />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    ₹300000 saved of ₹2000000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Savings;
