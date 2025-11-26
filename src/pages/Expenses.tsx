import { Sidebar } from "@/components/Sidebar";
import { BarChart3, ChevronRight } from "lucide-react";

const expenses = [
  { id: 1, category: "Housing", amount: 15000, color: "bg-primary" },
  { id: 2, category: "Food", amount: 4500, color: "bg-destructive" },
  { id: 3, category: "Shopping", amount: 3500, color: "bg-warning" },
  { id: 4, category: "Dining", amount: 3300, color: "bg-success" },
  { id: 5, category: "Transport", amount: 3200, color: "bg-blue-500" },
  { id: 6, category: "Utilities", amount: 2799, color: "bg-purple-500" },
  { id: 7, category: "Insurance", amount: 1200, color: "bg-pink-500" },
];

const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);

const Expenses = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <BarChart3 className="w-7 h-7 text-warning" />
            <h1 className="text-3xl font-bold">Monthly Expense Summary</h1>
          </div>
          <p className="text-muted-foreground mb-8">
            Money spent on shopping, food, etc. this month:{" "}
            <span className="text-warning font-semibold">₹{totalExpenses.toLocaleString()}</span>.
          </p>

          <div className="bg-card rounded-xl shadow-sm p-8">
            <div className="space-y-4">
              {expenses.map((expense) => (
                <button
                  key={expense.id}
                  className="w-full flex items-center justify-between p-4 rounded-lg hover:bg-muted transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${expense.color}`} />
                    <span className="font-medium">{expense.category}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-bold">₹{expense.amount.toLocaleString()}</span>
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Expenses;
