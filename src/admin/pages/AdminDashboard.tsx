import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  CreditCard,
  LayoutDashboard,
  LogOut,
  PencilLine,
  ShieldCheck,
} from "lucide-react";
import useAuthStore from "../../store/authStore";
import usePortfolioStore from "../../store/usePortfolioStore";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();
  const {
    portfolioData,
    isFetching,
    error,
    fetchPortfolioData,
    setPortfolioData,
  } = usePortfolioStore();
  const [activeTab, setActiveTab] = useState("overview");
  const [draft, setDraft] = useState<string>(
    JSON.stringify(portfolioData ?? {}, null, 2),
  );

  useEffect(() => {
    fetchPortfolioData();
  }, [fetchPortfolioData]);

  useEffect(() => {
    setDraft(JSON.stringify(portfolioData ?? {}, null, 2));
  }, [portfolioData]);

  const statusText = useMemo(() => {
    if (isFetching) return "Refreshing content...";
    if (error) return error;
    return "Content synced";
  }, [error, isFetching]);

  const handleLogout = async () => {
    await logout();
    navigate("/admin/login");
  };

  const handleSave = () => {
    try {
      const parsed = JSON.parse(draft);
      setPortfolioData(parsed);
    } catch (caughtError) {
      console.error(caughtError);
    }
  };

  return (
    <div className="min-h-screen bg-ide-bg text-ide-text">
      <header className="border-b border-ide-border bg-ide-bg/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-sm text-ide-text-variant hover:text-ide-primary"
          >
            <ArrowLeft size={16} />
            Portfolio
          </button>

          <div className="flex items-center gap-2">
            <ShieldCheck className="text-ide-primary" size={18} />
            <span className="text-sm font-medium">Admin dashboard</span>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex items-center gap-2 rounded-md border border-ide-border bg-ide-surface px-3 py-2 text-sm hover:border-ide-primary hover:text-ide-primary"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 lg:grid-cols-[220px_minmax(0,1fr)]">
        <aside className="rounded-xl border border-ide-border bg-ide-surface p-4">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ide-primary/10 text-ide-primary">
              <LayoutDashboard size={18} />
            </div>
            <div>
              <p className="text-sm text-ide-text-variant">Signed in</p>
              <p className="font-medium">{user?.email ?? "Admin"}</p>
            </div>
          </div>

          <nav className="space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-sm transition ${
                  activeTab === tab.id
                    ? "bg-ide-primary text-white"
                    : "text-ide-text-variant hover:bg-ide-surface-low hover:text-ide-primary"
                }`}
              >
                <span>{tab.label}</span>
                <PencilLine size={14} />
              </button>
            ))}
          </nav>
        </aside>

        <main className="space-y-6">
          <section className="rounded-xl border border-ide-border bg-ide-surface p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-ide-text-variant">Current section</p>
                <h2 className="text-2xl font-bold capitalize">{activeTab}</h2>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-ide-border bg-ide-surface-low px-3 py-1.5 text-xs font-medium text-ide-text-variant">
                <CreditCard size={14} />
                {statusText}
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-ide-border bg-ide-surface p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Portfolio JSON</h3>
              <button
                type="button"
                onClick={handleSave}
                className="rounded-md bg-ide-primary px-3 py-2 text-sm font-medium text-white hover:bg-ide-primary-btn"
              >
                Save changes
              </button>
            </div>

            <textarea
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              className="min-h-[260px] w-full rounded-lg border border-ide-border bg-ide-surface-low px-3 py-3 font-mono text-sm text-ide-text outline-none focus:border-ide-primary focus:ring-2 focus:ring-ide-primary/20"
            />
          </section>
        </main>
      </div>
    </div>
  );
}
