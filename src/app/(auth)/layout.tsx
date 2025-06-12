import React from "react";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="w-full h-[calc(100vh-80px)] flex items-center justify-center px-4">
      <div className="w-full h-fit max-w-sm bg-whiteshadow-[0px_0px_10px_rgba(0,0,0,0.1)] ring ring-[rgba(0,0,0,0.1)] p-10 rounded flex flex-col gap-8">
        {children}
      </div>
    </main>
  );
};

export default AuthLayout;
