import { NavLink } from "react-router-dom";
import { Logo } from "./Logo";
import {
  LayoutDashboard,
  CreditCard,
  PiggyBank,
  Zap,
  Target,
  Lightbulb,
  BarChart3,
  User,
} from "lucide-react";

const navItems = [
  { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/loans", icon: CreditCard, label: "Loans & EMI" },
  { to: "/savings", icon: PiggyBank, label: "My Savings" },
  { to: "/bills", icon: Zap, label: "Bills" },
  { to: "/goals", icon: Target, label: "Goals" },
  { to: "/tips", icon: Lightbulb, label: "Tips" },
  { to: "/expenses", icon: BarChart3, label: "Expenses" },
  { to: "/profile", icon: User, label: "Profile" },
];

export const Sidebar = () => {
  return (
    <aside className="w-56 bg-card border-r border-border h-screen sticky top-0 flex flex-col">
      <div className="p-6">
        <Logo />
      </div>
      <nav className="flex-1 px-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`
              }
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};
