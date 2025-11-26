import { Sidebar } from "@/components/Sidebar";
import { Zap, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const Bills = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Zap className="w-7 h-7 text-primary" />
            <h1 className="text-3xl font-bold">Bills & Recharge</h1>
          </div>
          <p className="text-muted-foreground mb-8">
            See your recurring payments like rent, electricity, and mobile.
          </p>

          <div className="grid grid-cols-2 gap-8 mb-8">
            {/* Total Bills */}
            <div className="bg-card rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-primary" />
                <p className="text-sm text-muted-foreground">TOTAL MONTHLY BILLS</p>
              </div>
              <p className="text-4xl font-bold mb-1">₹18999</p>
              <p className="text-sm text-muted-foreground">Total to pay this month</p>
            </div>

            {/* Bill Health */}
            <div className="bg-card rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-5 h-5 text-success" />
                <p className="text-sm text-muted-foreground">BILL HEALTH</p>
              </div>
              <p className="text-4xl font-bold mb-1 text-success">₹Good</p>
              <p className="text-sm text-muted-foreground">3 ways to save found</p>
            </div>
          </div>

          {/* Spending Breakdown */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div className="bg-card rounded-xl p-6 shadow-sm">
              <h2 className="font-semibold mb-6">Total Bills</h2>
              <div className="relative w-64 h-64 mx-auto mb-6">
                {/* This would be a proper donut chart in production */}
                <div className="w-full h-full rounded-full border-[40px] border-primary" style={{ 
                  background: `conic-gradient(
                    hsl(var(--primary)) 0% 79%, 
                    hsl(var(--success)) 79% 94%, 
                    hsl(var(--warning)) 94% 100%
                  )`
                }}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className="text-sm text-muted-foreground">TOTAL</p>
                    <p className="text-3xl font-bold">₹18,999</p>
                    <p className="text-sm text-muted-foreground">100%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <Zap className="w-5 h-5 text-primary" />
                <h2 className="font-semibold">Spending Breakdown</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Click on the chart or the items below to see details.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <span className="text-sm">Housing</span>
                  </div>
                  <span className="font-semibold">₹15,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-success" />
                    <span className="text-sm">Utilities</span>
                  </div>
                  <span className="font-semibold">₹2,799</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-warning" />
                    <span className="text-sm">Insurance</span>
                  </div>
                  <span className="font-semibold">₹1,200</span>
                </div>
              </div>
            </div>
          </div>

          {/* Ways to Save Money */}
          <div className="bg-card rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold text-primary">Ways to Save Money</h2>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-4 bg-primary/5 rounded-lg">
                <div className="flex items-center gap-3">
                  <Lightbulb className="w-5 h-5 text-primary" />
                  <p className="text-sm">
                    Check internet plan: You can switch to a lower speed plan to save ₹200/month.
                  </p>
                </div>
                <Button variant="link" className="text-primary">
                  Check Plan
                </Button>
              </div>
              <div className="flex justify-between items-center p-4 bg-primary/5 rounded-lg">
                <div className="flex items-center gap-3">
                  <Lightbulb className="w-5 h-5 text-primary" />
                  <p className="text-sm">
                    Unused subscription: You are paying for an app you rarely use. Cancel it?
                  </p>
                </div>
                <Button variant="link" className="text-primary">
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Bills;
