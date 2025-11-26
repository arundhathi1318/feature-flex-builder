import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Target, Plus, Shield, Home, Edit } from "lucide-react";

const goals = [
  {
    id: 1,
    name: "Emergency Fund",
    type: "Safety Net Goal",
    priority: "HIGH",
    icon: Shield,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    saved: 25000,
    target: 100000,
    percentage: 25,
    remaining: 75000,
    buttonColor: "bg-primary hover:bg-primary/90",
  },
  {
    id: 2,
    name: "House Down Payment",
    type: "Long-term Goal",
    priority: "HIGH",
    icon: Home,
    iconBg: "bg-success/10",
    iconColor: "text-success",
    saved: 300000,
    target: 2000000,
    percentage: 15,
    remaining: 1700000,
    buttonColor: "bg-success hover:bg-success/90",
  },
];

const Goals = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    target: "",
    current: "",
    type: "",
  });

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <p className="text-sm text-muted-foreground mb-2">Plan ahead</p>
            <h1 className="text-3xl font-bold mb-2">Visualize your financial future and track progress.</h1>
          </div>

          {/* Create Goal Button */}
          <Button
            onClick={() => setShowForm(!showForm)}
            variant="ghost"
            className="text-primary mb-6 hover:bg-primary/10"
          >
            <Plus className="w-5 h-5 mr-2" />
            Create a New Goal
          </Button>

          {/* Create Goal Form */}
          {showForm && (
            <div className="bg-card rounded-xl shadow-sm p-6 mb-8">
              <div className="grid grid-cols-4 gap-4 mb-4">
                <div>
                  <Label htmlFor="goalName">
                    Goal Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="goalName"
                    placeholder="e.g., New Bike Fund"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="targetAmount">
                    Target Amount (₹) <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="targetAmount"
                    placeholder="e.g., 80000"
                    value={formData.target}
                    onChange={(e) => setFormData({ ...formData, target: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="currentSaved">Current Saved (₹)</Label>
                  <Input
                    id="currentSaved"
                    placeholder="0"
                    value={formData.current}
                    onChange={(e) => setFormData({ ...formData, current: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="goalType">
                    Goal Type <span className="text-destructive">*</span>
                  </Label>
                  <Select value={formData.type} onValueChange={(val) => setFormData({ ...formData, type: val })}>
                    <SelectTrigger id="goalType">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="emergency">Emergency Fund</SelectItem>
                      <SelectItem value="vacation">Vacation</SelectItem>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button className="w-full">Set Goal</Button>
            </div>
          )}

          {/* Existing Goals */}
          <div className="grid grid-cols-2 gap-6">
            {goals.map((goal) => {
              const Icon = goal.icon;
              return (
                <div key={goal.id} className="bg-card rounded-xl shadow-sm p-6">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-full ${goal.iconBg} flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 ${goal.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{goal.name}</h3>
                        <p className="text-sm text-muted-foreground">{goal.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-muted text-xs font-semibold rounded-full">
                        {goal.priority}
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-baseline mb-2">
                      <div>
                        <p className="text-3xl font-bold">₹{goal.saved.toLocaleString()}</p>
                        <p className="text-sm text-muted-foreground">
                          Target: ₹{goal.target.toLocaleString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold">{goal.percentage}%</p>
                        <Button variant="ghost" size="sm" className="h-auto p-0 text-muted-foreground">
                          <Edit className="w-4 h-4 mr-1" />
                          Edit
                        </Button>
                      </div>
                    </div>

                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={goal.buttonColor.split(" ")[0]}
                        style={{ width: `${goal.percentage}%` }}
                      />
                    </div>

                    <p className="text-sm text-muted-foreground mt-2">
                      {goal.percentage}% Completed
                    </p>
                  </div>

                  <div className="flex justify-between text-sm text-muted-foreground mb-4">
                    <span>₹{goal.saved.toLocaleString()} saved of ₹{goal.target.toLocaleString()}</span>
                    <span>₹{goal.remaining.toLocaleString()} remaining</span>
                  </div>

                  <Button className={`w-full ${goal.buttonColor}`}>
                    Add Contribution
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Goals;
