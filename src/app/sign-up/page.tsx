import AuthFooter from "@/components/auth/auth-footer";
import AuthHeading from "@/components/auth/auth-heading";
import AuthInput from "@/components/auth/auth-input";
import SubmitButton from "@/components/auth/submit-button";


const SignUp = () => {
  return (
    <main className="w-full h-[calc(100vh-80px)] flex items-center justify-center px-4">
      <div className="w-full h-fit max-w-sm bg-whiteshadow-[0px_0px_10px_rgba(0,0,0,0.1)] ring ring-[rgba(0,0,0,0.1)] p-10 rounded flex flex-col gap-8">
        <AuthHeading
          heading="Create your account"
          subHeading="Welcome! Please fill in the details to get started."
        />

        <form className="flex flex-col gap-6">
          <AuthInput
            type="email"
            label="Email address"
            placeholder="Enter your email address"
          />
          <AuthInput
            type="password"
            label="Password"
            placeholder="Enter your password"
          />

          <SubmitButton text="Signup" />
        </form>

        <AuthFooter />
      </div>
    </main>
  );
};

export default SignUp;
