import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Lightbulb, AlertCircle, TrendingUp, Shield, Info } from "lucide-react";

const urgentTips = [
  {
    id: 1,
    icon: AlertCircle,
    iconBg: "bg-destructive/10",
    iconColor: "text-destructive",
    text: "Your next EMI of ₹15,000 is due in 4 days. Paying late means fines.",
    action: "Pay Now",
    actionColor: "text-destructive",
  },
  {
    id: 2,
    icon: AlertCircle,
    iconBg: "bg-destructive/10",
    iconColor: "text-destructive",
    text: "You have two bills due same week. Check if you have enough balance.",
    action: "Check Bank",
    actionColor: "text-destructive",
  },
  {
    id: 3,
    icon: AlertCircle,
    iconBg: "bg-warning/10",
    iconColor: "text-warning",
    text: "You spent 20% more on Eating Out. Set a limit of ₹2000 for next month.",
    action: "Set Limit",
    actionColor: "text-warning",
  },
];

const savingIdeas = [
  {
    id: 1,
    icon: TrendingUp,
    iconBg: "bg-success/10",
    iconColor: "text-success",
    text: "You have ₹5,000 extra cash. Put ₹3,000 in your Emergency Fund.",
    action: "Save Now",
    actionColor: "text-success",
  },
  {
    id: 2,
    icon: Shield,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    text: "Start a small SIP (Systematic Investment Plan) of ₹2,000. It's safe and grows money.",
    action: "Start SIP",
    actionColor: "text-primary",
  },
];

const smartChecks = [
  {
    id: 1,
    icon: Info,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    text: "Car insurance renewal is coming. Compare prices online to save ₹1,000.",
    action: "Compare",
    actionColor: "text-primary",
  },
  {
    id: 2,
    icon: Info,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    text: "You spent money on 'Other Shopping'. Check what you bought.",
    action: "Check List",
    actionColor: "text-primary",
  },
];

const Tips = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Lightbulb className="w-7 h-7 text-warning" />
            <h1 className="text-3xl font-bold">Money Tips</h1>
          </div>
          <p className="text-muted-foreground mb-8">Simple actions to save money.</p>

          {/* Urgent (Pay Attention) */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Urgent (Pay Attention)</h2>
            <div className="space-y-3">
              {urgentTips.map((tip) => {
                const Icon = tip.icon;
                return (
                  <div
                    key={tip.id}
                    className="bg-card rounded-xl p-4 flex items-center justify-between shadow-sm"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <div className={`w-10 h-10 rounded-full ${tip.iconBg} flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-5 h-5 ${tip.iconColor}`} />
                      </div>
                      <p className="text-sm">{tip.text}</p>
                    </div>
                    <Button variant="link" className={`${tip.actionColor} flex-shrink-0`}>
                      {tip.action}
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Savings Ideas */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Savings Ideas</h2>
            <div className="space-y-3">
              {savingIdeas.map((tip) => {
                const Icon = tip.icon;
                return (
                  <div
                    key={tip.id}
                    className="bg-card rounded-xl p-4 flex items-center justify-between shadow-sm"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <div className={`w-10 h-10 rounded-full ${tip.iconBg} flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-5 h-5 ${tip.iconColor}`} />
                      </div>
                      <p className="text-sm">{tip.text}</p>
                    </div>
                    <Button variant="link" className={`${tip.actionColor} flex-shrink-0`}>
                      {tip.action}
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Smart Checks */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Smart Checks</h2>
            <div className="space-y-3">
              {smartChecks.map((tip) => {
                const Icon = tip.icon;
                return (
                  <div
                    key={tip.id}
                    className="bg-card rounded-xl p-4 flex items-center justify-between shadow-sm"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <div className={`w-10 h-10 rounded-full ${tip.iconBg} flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-5 h-5 ${tip.iconColor}`} />
                      </div>
                      <p className="text-sm">{tip.text}</p>
                    </div>
                    <Button variant="link" className={`${tip.actionColor} flex-shrink-0`}>
                      {tip.action}
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Tips;
