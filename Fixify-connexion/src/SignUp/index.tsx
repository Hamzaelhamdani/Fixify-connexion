import { SignupPage } from "../components/SignupPage"; // ← composant UI
import { Toaster } from "../components/ui/sonner";
import { useNavigate } from "react-router-dom";
import { handleSignup } from "./action";

// ✅ Ce composant "SignUp" est le seul export par défaut
export default function SignUp() {
  const navigate = useNavigate();

  const onSignupClick = () => {
    handleSignup(navigate); // ← fonction action
  };

  return (
    <>
      <SignupPage onSignupClick={onSignupClick} />
      <Toaster position="top-right" />
    </>
  );
}
