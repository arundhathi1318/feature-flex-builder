import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";
import VerifyOtp from "./pages/VerifyOtp";
import Profile from "./pages/onboarding/Profile";
import Liability from "./pages/onboarding/Liability";
import Statement from "./pages/onboarding/Statement";
import Success from "./pages/onboarding/Success";
import Dashboard from "./pages/Dashboard";
import Loans from "./pages/Loans";
import Savings from "./pages/Savings";
import Bills from "./pages/Bills";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verify-otp" element={<VerifyOtp />} />
          <Route path="/onboarding/profile" element={<Profile />} />
          <Route path="/onboarding/liability" element={<Liability />} />
          <Route path="/onboarding/statement" element={<Statement />} />
          <Route path="/onboarding/success" element={<Success />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/savings" element={<Savings />} />
          <Route path="/bills" element={<Bills />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
