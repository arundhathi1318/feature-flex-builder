import { useNavigate } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center max-w-2xl px-4">
        <Logo className="justify-center mb-8 scale-150" />
        <h1 className="mb-4 text-5xl font-bold">Your Secure AI Financial Companion</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Take control of your finances with smart insights, automated tracking, and personalized recommendations.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" onClick={() => navigate("/signup")}>
            Get Started
          </Button>
          <Button variant="outline" size="lg" onClick={() => navigate("/dashboard")}>
            View Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
