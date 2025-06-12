import AuthFooter from "@/components/auth/auth-footer";
import AuthHeading from "@/components/auth/auth-heading";
import SignUpForm from "@/components/auth/signup-form";

const SignUp = () => {
  return (
    <>
      <AuthHeading
        heading="Create your account"
        subHeading="Welcome! Please fill in the details to get started."
      />
      <SignUpForm />
      <AuthFooter />
    </>
  );
};

export default SignUp;
