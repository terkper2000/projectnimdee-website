import { useState } from "react";
import { Link } from "wouter";
import { supabase } from "@/lib/supabase";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const base = import.meta.env.BASE_URL.replace(/\/$/, "");
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}${base}/reset-password`,
    });
    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }
    setSent(true);
    setLoading(false);
  };

  return (
    <Layout>
      <div className="min-h-[calc(100dvh-5rem)] flex items-center justify-center bg-gradient-to-br from-teal-50 to-amber-50 px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-lg border border-[hsl(40,20%,90%)] overflow-hidden">
            <div className="p-8">
              {sent ? (
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-7 h-7 text-green-600" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
                    Check your email
                  </h2>
                  <p className="text-muted-foreground text-sm mb-6">
                    We sent a password reset link to <strong>{email}</strong>. Click it to set a new password.
                  </p>
                  <Button asChild className="rounded-xl font-semibold w-full">
                    <Link href="/sign-in">Back to Sign in</Link>
                  </Button>
                </div>
              ) : (
                <>
                  <h1 className="font-serif text-2xl font-bold text-foreground mb-1">
                    Reset your password
                  </h1>
                  <p className="text-sm text-muted-foreground mb-6">
                    Enter your email and we'll send you a reset link.
                  </p>

                  {error && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Email address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          placeholder="you@example.com"
                          className="w-full pl-9 pr-4 py-2.5 border border-[hsl(40,20%,85%)] rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full rounded-xl font-semibold h-10"
                    >
                      {loading ? "Sending…" : "Send reset link"}
                    </Button>
                  </form>
                </>
              )}
            </div>

            <div className="bg-[hsl(40,33%,96%)] border-t border-[hsl(40,20%,90%)] px-8 py-4 text-sm text-center text-muted-foreground">
              <Link href="/sign-in" className="text-primary font-semibold hover:underline">
                ← Back to Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
