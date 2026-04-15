import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Login or Sign Up to BakingTales",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex-1 flex items-center justify-center bg-pink-50/30 px-4 py-12">
      <div className="w-full max-w-md mx-auto">
        {children}
      </div>
    </div>
  );
}
