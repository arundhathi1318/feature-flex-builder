import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User } from "lucide-react";

const Signup = () => {
  const navigate = useNavigate();
  const [phoneOrEmail, setPhoneOrEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneOrEmail) {
      navigate("/verify-otp", { state: { phoneOrEmail } });
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Logo className="justify-center mb-4" />
          <p className="text-muted-foreground">Your Secure AI Financial Companion</p>
        </div>

        <div className="bg-card rounded-2xl shadow-lg p-8">
          <h1 className="text-2xl font-bold text-center mb-6">Create Account</h1>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <Label htmlFor="phoneOrEmail" className="text-sm font-medium mb-2 block">
                Phone Number or Email <span className="text-destructive">*</span>
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="phoneOrEmail"
                  type="text"
                  placeholder="9876543212"
                  value={phoneOrEmail}
                  onChange={(e) => setPhoneOrEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <Button type="submit" className="w-full" size="lg">
              Verify & Continue
            </Button>
          </form>

          <div className="text-center mt-6">
            <a href="/login" className="text-primary text-sm hover:underline">
              Already have an account? Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
