import Link from "next/link";

interface AuthFooterProps {
  isSigninPage?: boolean;
}

const AuthFooter = ({ isSigninPage }: AuthFooterProps) => {
  return (
    <div className="w-full flex items-center justify-center gap-1">
      <span className="text-[12px] text-[#747686]">
        {isSigninPage ? "Don't have an account?" : "Already have an account?"}
      </span>
      <Link
        href={isSigninPage ? "/sign-up" : "/sign-in"}
        className="text-[13px] font-semibold hover:underline">
        {isSigninPage ? "Sign up" : "Sign in"}
      </Link>
    </div>
  );
};

export default AuthFooter;
