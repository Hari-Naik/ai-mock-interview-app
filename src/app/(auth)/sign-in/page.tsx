import AuthHeading from "@/components/auth/auth-heading";
import AuthFooter from "@/components/auth/auth-footer";
import SignInForm from "@/components/auth/signin-form";

const SignIn = () => {
  return (
    <>
      <AuthHeading
        heading="Sign in to AI Mock Interview"
        subHeading="Welcome back! Please sign in to continue."
      />

      <SignInForm />

      <AuthFooter isSigninPage />
    </>
  );
};

export default SignIn;
