/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, LogOut, ShieldCheck, ArrowLeft } from "lucide-react";
import useAuthStore from "../store/authStore";
import { getAllQueries, type QueryEntry } from "../services/QueryServices";
import { log } from "console";

export default function AdminPanelPage() {
  const { user, isAuthorized, isLoading, login, logout } = useAuthStore();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");
  const [queries, setQueries] = useState<QueryEntry[]>([]);
  const [loadingQueries, setLoadingQueries] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const fetchQueries = async () => {
    setLoadingQueries(true);

    try {
      const allQueries = await getAllQueries();
      setQueries(allQueries);
    } catch (error) {
      setFormError(
        error instanceof Error ? error.message : "Failed to load queries.",
      );
    } finally {
      setLoadingQueries(false);
    }
  };

  useEffect(() => {
    if (isAuthorized) {
      fetchQueries();
    } else {
      console.log("fuck");
    }
  }, [isAuthorized]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");
    setSubmitting(true);

    try {
      await login(email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      setFormError(
        error instanceof Error
          ? error.message
          : "Login failed. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleLogout = () => {
    logout();
  };

  if (!isAuthorized && isLoading) {
    return (
      <div className="min-h-screen bg-ide-bg text-ide-text flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-ide-primary"></div>
          <p className="mt-4">Initializing...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ide-bg text-ide-text">
      {/* Navigation Header */}
      <header className="border-b border-ide-border sticky top-0 z-40 bg-ide-bg/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-ide-text-secondary hover:text-ide-text transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </button>
          <h1 className="text-xl font-semibold flex items-center gap-2">
            <ShieldCheck size={24} className="text-ide-primary" />
            Admin Panel
          </h1>
          {isAuthorized && (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-ide-error/20 text-ide-error hover:bg-ide-error/30 rounded transition-colors"
            >
              <LogOut size={18} />
              Logout
            </button>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {!isAuthorized ? (
          // Login Form
          <div className="max-w-md mx-auto">
            <div className="bg-ide-elevated rounded-lg border border-ide-border p-8">
              <div className="flex items-center justify-center gap-2 mb-8">
                <Lock className="text-ide-primary" size={28} />
                <h2 className="text-2xl font-bold">Admin Login</h2>
              </div>

              {formError && (
                <div className="mb-4 p-3 bg-ide-error/20 border border-ide-error text-ide-error rounded">
                  {formError}
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 bg-ide-bg border border-ide-border rounded focus:outline-none focus:border-ide-primary transition-colors"
                    placeholder="admin@example.com"
                    disabled={submitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 bg-ide-bg border border-ide-border rounded focus:outline-none focus:border-ide-primary transition-colors"
                    placeholder="••••••••"
                    disabled={submitting}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting || !email || !password}
                  className="w-full py-2 bg-ide-primary text-ide-bg rounded font-medium hover:opacity-90 disabled:opacity-50 transition-opacity"
                >
                  {submitting ? "Logging in..." : "Login"}
                </button>
              </form>
            </div>
          </div>
        ) : (
          // Queries Display
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Contact Queries</h2>
              <p className="text-ide-text-secondary">
                Manage and review all contact form submissions
              </p>
            </div>

            {formError && (
              <div className="mb-6 p-4 bg-ide-error/20 border border-ide-error text-ide-error rounded">
                {formError}
              </div>
            )}

            {loadingQueries ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-ide-primary"></div>
                <p className="mt-4 text-ide-text-secondary">
                  Loading queries...
                </p>
              </div>
            ) : queries.length === 0 ? (
              <div className="text-center py-12 text-ide-text-secondary">
                <p>No queries found</p>
              </div>
            ) : (
              <div className="grid gap-4">
                {queries.map((query) => (
                  <article
                    key={query.id}
                    className="border border-ide-border bg-ide-elevated rounded-lg p-6"
                  >
                    <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                      <p className="font-semibold text-lg text-ide-text">
                        {query.name}
                      </p>
                      <p className="font-mono text-xs uppercase tracking-wider text-ide-text-secondary">
                        {query.createdAt
                          ? new Date(query.createdAt).toLocaleString()
                          : "New"}
                      </p>
                    </div>

                    <p className="mb-3 text-sm text-ide-text-secondary">
                      {query.email}
                    </p>
                    <p className="text-sm leading-6 text-ide-text whitespace-pre-wrap">
                      {query.message}
                    </p>
                  </article>
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
