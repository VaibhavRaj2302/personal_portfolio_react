import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Chrome, Lock, Mail } from "lucide-react";
import useAuthStore from "../../store/authStore";
import { loginWithGoogle } from "../../services/AuthService";

export default function AdminLogin() {
  const navigate = useNavigate();
  const { login, isLoading, setLoading } = useAuthStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const submitLogin = async (event: FormEvent) => {
    event.preventDefault();
    setError("");
    setSubmitting(true);
    setLoading(true);

    try {
      await login(email, password);
      navigate("/admin");
    } catch (caughtError) {
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : "Login failed. Please try again.",
      );
    } finally {
      setSubmitting(false);
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    setSubmitting(true);
    setLoading(true);

    try {
      await loginWithGoogle();
      navigate("/admin");
    } catch (caughtError) {
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : "Google sign-in failed.",
      );
    } finally {
      setSubmitting(false);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-ide-bg text-ide-text flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-xl border border-ide-border bg-ide-surface shadow-sm">
        <div className="border-b border-ide-border px-6 py-4">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-sm font-medium text-ide-text-variant hover:text-ide-primary transition-colors"
          >
            <ArrowLeft size={16} />
            Back to portfolio
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <div className="mb-8 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-ide-surface-high text-ide-primary">
              <Lock size={22} />
            </div>
            <h1 className="mt-4 text-2xl font-bold">Admin access</h1>
            <p className="mt-2 text-sm text-ide-text-variant">
              Sign in to manage portfolio content.
            </p>
          </div>

          {error && (
            <div className="mb-4 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
              {error}
            </div>
          )}

          <form onSubmit={submitLogin} className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-ide-text-variant">
                Email
              </label>
              <div className="relative">
                <Mail
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ide-text-variant"
                  size={16}
                />
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="admin@example.com"
                  className="w-full rounded-md border border-ide-border bg-ide-surface-low px-10 py-2.5 text-sm outline-none transition focus:border-ide-primary focus:ring-2 focus:ring-ide-primary/20"
                  disabled={submitting || isLoading}
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-ide-text-variant">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="••••••••"
                className="w-full rounded-md border border-ide-border bg-ide-surface-low px-3 py-2.5 text-sm outline-none transition focus:border-ide-primary focus:ring-2 focus:ring-ide-primary/20"
                disabled={submitting || isLoading}
              />
            </div>

            <button
              type="submit"
              disabled={submitting || isLoading || !email || !password}
              className="w-full rounded-md bg-ide-primary px-4 py-2.5 text-sm font-medium text-white transition hover:bg-ide-primary-btn disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-ide-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase tracking-[0.2em] text-ide-text-variant">
              <span className="bg-ide-surface px-2">Or continue with</span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={submitting || isLoading}
            className="flex w-full items-center justify-center gap-2 rounded-md border border-ide-border bg-ide-surface-low px-4 py-2.5 text-sm font-medium text-ide-text transition hover:border-ide-primary hover:text-ide-primary disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Chrome size={16} />
            Google
          </button>
        </div>
      </div>
    </div>
  );
}
