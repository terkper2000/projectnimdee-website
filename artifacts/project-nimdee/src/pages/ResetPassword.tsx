import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { supabase } from "@/lib/supabase";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Lock, Eye, EyeOff, CheckCircle } from "lucide-react";

export default function ResetPassword() {
  const [, setLocation] = useLocation();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Supabase fires onAuthStateChange with event PASSWORD_RECOVERY when the
    // reset link is followed — wait for that before showing the form.
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY") setReady(true);
    });
    // Also check if there's already an active session from the recovery link.
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) setReady(true);
    });
    return () => subscription.unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.updateUser({ password });
    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }
    setDone(true);
    setLoading(false);
    setTimeout(() => setLocation("/dashboard"), 2500);
  };

  return (
    <Layout>
      <div className="min-h-[calc(100dvh-5rem)] flex items-center justify-center bg-gradient-to-br from-teal-50 to-amber-50 px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-lg border border-[hsl(40,20%,90%)] overflow-hidden">
            <div className="p-8">
              {done ? (
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-7 h-7 text-green-600" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
                    Password updated
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    Your password has been changed. Redirecting you to your dashboard…
                  </p>
                </div>
              ) : !ready ? (
                <div className="text-center py-4">
                  <p className="text-muted-foreground text-sm">
                    Verifying reset link…
                  </p>
                  <p className="text-xs text-muted-foreground mt-3">
                    If this takes too long,{" "}
                    <Link href="/forgot-password" className="text-primary hover:underline">
                      request a new link
                    </Link>
                    .
                  </p>
                </div>
              ) : (
                <>
                  <h1 className="font-serif text-2xl font-bold text-foreground mb-1">
                    Set a new password
                  </h1>
                  <p className="text-sm text-muted-foreground mb-6">
                    Choose a strong password for your account.
                  </p>

                  {error && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        New password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                        <input
                          type={showPw ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          placeholder="Min. 6 characters"
                          className="w-full pl-9 pr-10 py-2.5 border border-[hsl(40,20%,85%)] rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPw((v) => !v)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                          tabIndex={-1}
                        >
                          {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Confirm new password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                        <input
                          type={showPw ? "text" : "password"}
                          value={confirm}
                          onChange={(e) => setConfirm(e.target.value)}
                          required
                          placeholder="Re-enter password"
                          className="w-full pl-9 pr-4 py-2.5 border border-[hsl(40,20%,85%)] rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full rounded-xl font-semibold h-10"
                    >
                      {loading ? "Updating…" : "Update password"}
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
