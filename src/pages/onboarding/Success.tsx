import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Trophy } from "lucide-react";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md text-center">
        <div className="w-24 h-24 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
          <Trophy className="w-12 h-12 text-success" />
        </div>

        <h1 className="text-3xl font-bold mb-3">Success!</h1>
        <p className="text-muted-foreground mb-8">
          Your financial profile has been created successfully. Let's head to your dashboard.
        </p>

        <Button onClick={() => navigate("/dashboard")} size="lg" className="px-12">
          Go to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default Success;
