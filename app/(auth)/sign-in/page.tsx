"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChefHat, Mail, Lock, LogIn, Loader2 } from "lucide-react";

export default function SignIn() {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);
    setError(null);

    const { data, error } = await authClient.signIn.email(
      {
        email: formData.email,
        password: formData.password,
      },
      {
        onSuccess: () => {
          router.push("/");
        },
        onError: (ctx) => {
          setError(ctx.error.message || "Invalid email or password.");
          setIsPending(false);
        },
      }
    );
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-pink-100">
      <div className="flex justify-center mb-6">
        <div className="h-12 w-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-500">
          <ChefHat className="h-6 w-6" />
        </div>
      </div>
      
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Welcome back</h1>
        <p className="text-sm text-gray-500 mt-2">Sign in to your BakingTales account</p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm text-center">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className="pl-10 rounded-xl border-gray-200 focus:border-pink-400 focus:ring-pink-400 transition-colors h-11"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              name="password"
              type="password"
              required
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              className="pl-10 rounded-xl border-gray-200 focus:border-pink-400 focus:ring-pink-400 transition-colors h-11"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember_me"
              name="remember_me"
              type="checkbox"
              className="h-4 w-4 text-pink-500 focus:ring-pink-400 border-gray-300 rounded"
            />
            <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-700">
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <a href="#" className="font-semibold text-pink-500 hover:text-pink-600">
              Forgot password?
            </a>
          </div>
        </div>

        <Button
          type="submit"
          disabled={isPending}
          className="w-full bg-pink-500 hover:bg-pink-600 text-white rounded-xl h-11 font-medium transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:pointer-events-none"
        >
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Signing in...
            </>
          ) : (
            <>
              Sign In
              <LogIn className="ml-2 h-5 w-5" />
            </>
          )}
        </Button>
      </form>

      <div className="mt-8 text-center text-sm text-gray-600">
        Don&apos;t have an account?{" "}
        <Link href="/sign-up" className="font-semibold text-pink-500 hover:text-pink-600 hover:underline">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
