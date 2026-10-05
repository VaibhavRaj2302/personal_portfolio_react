/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { ArrowLeft, Backpack, Home, LogOut, ShieldCheck } from "lucide-react";
import useAuthStore from "../store/authStore";
import { subscribeToQueries } from "../services/QueryServices";
import { Queries } from "../models/QueryModel";
import { DataSnapshot, Unsubscribe } from "firebase/database";
import { useNavigate } from "react-router-dom";

const formatTimestamp = (value?: Queries["createdAt"]) => {
  if (!value) {
    return "No timestamp provided";
  }

  if (typeof value === "number") {
    return new Date(value).toLocaleString();
  }

  if (typeof value === "string") {
    const parsedDate = new Date(value);
    if (!Number.isNaN(parsedDate.getTime())) {
      return parsedDate.toLocaleString();
    }

    return value;
  }

  if (typeof value === "object" && "seconds" in value && value.seconds) {
    return new Date(value.seconds * 1000).toLocaleString();
  }

  return "Unknown timestamp";
};

const normalizeQueries = (value: Record<string, unknown> | null): Queries[] => {
  if (!value || typeof value !== "object") {
    return [];
  }

  return Object.entries(value).map(([id, item]) => {
    const query =
      item && typeof item === "object" ? (item as Record<string, unknown>) : {};

    return {
      id,
      ...(query as Record<string, unknown>),
      name: typeof query["name"] === "string" ? query["name"] : "Anonymous",
      email:
        typeof query["email"] === "string"
          ? query["email"]
          : "No email provided",
      message:
        typeof query["message"] === "string"
          ? query["message"]
          : "No message provided",
      createdAt: query["createdAt"],
    } as Queries;
  });
};

export default function AdminPanelPage() {
  const { user, isAuthorized, isLoading, logout } = useAuthStore();

  const [formError, setFormError] = useState("");
  const [queries, setQueries] = useState<Queries[]>([]);
  const [loadingQueries, setLoadingQueries] = useState(false);
  const [selectedQuery, setSelectedQuery] = useState<Queries | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    let unsubscribe: Unsubscribe | undefined;

    if (isAuthorized) {
      setLoadingQueries(true);
      setFormError("");

      unsubscribe = subscribeToQueries({
        callback(value) {
          const snapshotValue =
            value && typeof value === "object" && "val" in value
              ? (value as DataSnapshot).val()
              : value;

          setQueries(
            normalizeQueries(snapshotValue as Record<string, unknown> | null),
          );
          setLoadingQueries(false);
        },
        onError(error) {
          setFormError(
            error instanceof Error ? error.message : "Failed to load queries.",
          );
          setQueries([]);
          setLoadingQueries(false);
        },
      });
    } else {
      setQueries([]);
      setSelectedQuery(null);
    }

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [isAuthorized]);

  const handleLogout = async () => {
    setSelectedQuery(null);
    await logout();
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
      <header className="sticky top-0 z-20 border-b border-ide-border bg-ide-surface/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ide-primary/10 text-ide-primary">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-ide-text-variant">
                Admin
              </p>
              <h1 className="text-lg font-semibold text-ide-text">Portfolio</h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden rounded-full border border-ide-border bg-ide-surface-low px-3 py-1.5 text-sm text-ide-text-variant md:inline-flex">
              {user?.email ?? "No email available"}
            </span>
            <button
              type="button"
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-2 text-sm font-medium text-ide-text-variant hover:text-ide-primary transition-colors"
            >
              <Home size={16} />
            </button>
            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-2 rounded-xl border border-ide-border bg-ide-surface px-3 py-2 text-sm font-medium text-ide-text transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        {loadingQueries && (
          <div className="mb-4 flex items-center gap-2 rounded-xl border border-ide-border bg-ide-surface px-4 py-3 text-sm text-ide-text-variant">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-ide-primary border-t-transparent" />
            Loading queries...
          </div>
        )}

        {formError && (
          <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {formError}
          </div>
        )}

        {selectedQuery ? (
          <section className="space-y-5">
            <button
              type="button"
              onClick={() => setSelectedQuery(null)}
              className="inline-flex items-center gap-2 rounded-xl border border-ide-border bg-ide-surface px-4 py-2 text-sm font-medium text-ide-text transition hover:bg-ide-surface-low"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Queries
            </button>

            <div className="grid gap-6 lg:grid-cols-[320px,1fr]">
              <aside className="rounded-2xl border border-ide-border bg-ide-surface p-5 shadow-sm">
                <h2 className="text-lg font-semibold text-ide-text">
                  User Details
                </h2>

                <dl className="mt-4 space-y-4 text-sm text-ide-text-variant">
                  <div>
                    <dt className="font-medium text-ide-text">Email</dt>
                    <dd className="mt-1 break-all">
                      {selectedQuery.email || "No email provided"}
                    </dd>
                  </div>

                  <div>
                    <dt className="font-medium text-ide-text">User ID</dt>
                    <dd className="mt-1 break-all">
                      {selectedQuery.uid || selectedQuery.id || "Not available"}
                    </dd>
                  </div>

                  <div>
                    <dt className="font-medium text-ide-text">Submitted</dt>
                    <dd className="mt-1">
                      {formatTimestamp(selectedQuery.createdAt)}
                    </dd>
                  </div>
                  {selectedQuery.title && (
                    <div className="mt-4 whitespace-pre-wrap wrap-break-word rounded-xl border border-ide-border bg-ide-surface-low p-4 text-sm leading-7 text-ide-text">
                      {selectedQuery.title}
                    </div>
                  )}
                </dl>
              </aside>

              <div className="rounded-2xl border border-ide-border bg-ide-surface p-5 shadow-sm">
                <h2 className="text-lg font-semibold text-ide-text">
                  Full Message
                </h2>
                <div className="mt-4 whitespace-pre-wrap wrap-break-word rounded-xl border border-ide-border bg-ide-surface-low p-4 text-sm leading-7 text-ide-text">
                  {selectedQuery.message || "No message provided."}
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className="space-y-4">
            {queries.length === 0 && !loadingQueries ? (
              <div className="rounded-2xl border border-dashed border-ide-border bg-ide-surface px-6 py-12 text-center">
                <p className="text-lg font-medium text-ide-text">
                  No messages yet
                </p>
                <p className="mt-2 text-sm text-ide-text-variant">
                  New submissions will appear here as soon as they are received.
                </p>
              </div>
            ) : (
              queries.map((query) => (
                <button
                  key={
                    query.id ??
                    `${query.email ?? "unknown"}-${query.createdAt ?? Math.random()}`
                  }
                  type="button"
                  onClick={() => setSelectedQuery(query)}
                  className="w-full rounded-2xl border border-ide-border bg-ide-surface p-5 text-left shadow-sm transition hover:border-ide-primary/40 hover:bg-ide-surface-low"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
                        <p className="truncate text-base font-semibold text-ide-text">
                          {query.name || "Anonymous"}
                        </p>
                        <span className="truncate text-sm text-ide-text-variant">
                          {query.email || "No email provided"}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-ide-text-variant">
                        {formatTimestamp(query.createdAt)}
                      </p>
                    </div>

                    <span className="inline-flex shrink-0 items-center rounded-lg bg-ide-primary/10 px-3 py-1.5 text-xs font-medium text-ide-primary">
                      View Full Message
                    </span>
                  </div>

                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-ide-text-variant">
                    {query.title || "No title provided."}
                  </p>
                </button>
              ))
            )}
          </section>
        )}
      </main>
    </div>
  );
}
