import { useNavigate } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

const Statement = () => {
  const navigate = useNavigate();

  const handleFileSelect = () => {
    // In a real app, this would handle file upload
    navigate("/onboarding/success");
  };

  const handleSkip = () => {
    navigate("/onboarding/success");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <Logo className="justify-center mb-4" />
        </div>

        {/* Progress bar */}
        <div className="flex gap-2 mb-8">
          <div className="h-1 flex-1 bg-primary rounded-full" />
          <div className="h-1 flex-1 bg-primary rounded-full" />
          <div className="h-1 flex-1 bg-primary rounded-full" />
          <div className="h-1 flex-1 bg-primary rounded-full" />
        </div>

        <div className="bg-card rounded-2xl shadow-lg p-8">
          <h1 className="text-2xl font-bold text-center mb-2">Bank Statement</h1>
          <p className="text-center text-muted-foreground mb-8">
            Upload your statement to get smart insights.
          </p>

          <div className="border-2 border-dashed border-primary/30 rounded-xl p-12 mb-6 text-center bg-primary/5">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Upload className="w-8 h-8 text-primary" />
            </div>
            <p className="font-medium mb-1">Click to Upload PDF</p>
            <p className="text-sm text-muted-foreground">Max size: 5MB</p>
          </div>

          <Button onClick={handleFileSelect} className="w-full mb-3" size="lg">
            Select File
          </Button>

          <button
            onClick={handleSkip}
            className="w-full text-center text-muted-foreground hover:text-foreground transition-colors"
          >
            Skip for now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Statement;
