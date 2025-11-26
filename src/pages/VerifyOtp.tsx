import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IndianRupee } from "lucide-react";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const phoneOrEmail = location.state?.phoneOrEmail || "9876543210";
  const [otp, setOtp] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length === 4) {
      navigate("/onboarding/profile");
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

          <div className="bg-primary/10 rounded-xl p-4 mb-6 text-center">
            <p className="text-xs text-muted-foreground mb-1">DEMO OTP</p>
            <p className="text-3xl font-bold text-primary tracking-wider">4225</p>
          </div>

          <p className="text-sm text-center text-muted-foreground mb-6">
            Code sent to <span className="font-medium text-foreground">{phoneOrEmail}</span>
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <Label htmlFor="otp" className="text-sm font-medium mb-2 block">
                Enter 4-digit Code <span className="text-destructive">*</span>
              </Label>
              <div className="relative">
                <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="otp"
                  type="text"
                  placeholder="0000"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.slice(0, 4))}
                  className="pl-10 text-center tracking-widest"
                  maxLength={4}
                  required
                />
              </div>
            </div>

            <Button type="submit" className="w-full" size="lg">
              Verify & Continue
            </Button>
          </form>

          <div className="text-center mt-6">
            <button
              onClick={() => navigate(-1)}
              className="text-muted-foreground text-sm hover:text-foreground"
            >
              Wrong number? Go back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
