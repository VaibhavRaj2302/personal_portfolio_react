import { create } from "zustand";

export type PortfolioRecord = Record<string, unknown> | null;

type PortfolioState = {
  portfolioData: PortfolioRecord;
  isFetching: boolean;
  error: string | null;
  setPortfolioData: (data: PortfolioRecord) => void;
  fetchPortfolioData: () => Promise<PortfolioRecord>;
};

const defaultPortfolioData: PortfolioRecord = {
  profile: {
    name: "Aarav Sharma",
    title: "Product Designer & Frontend Engineer",
    location: "Bengaluru, India",
  },
  sections: [
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ],
  updatedAt: new Date().toISOString(),
};

const usePortfolioStore = create<PortfolioState>((set) => ({
  portfolioData: defaultPortfolioData,
  isFetching: false,
  error: null,
  setPortfolioData: (data) => set({ portfolioData: data, error: null }),
  fetchPortfolioData: async () => {
    set({ isFetching: true, error: null });

    try {
      await new Promise((resolve) => window.setTimeout(resolve, 250));
      const payload = defaultPortfolioData;
      set({ portfolioData: payload, isFetching: false, error: null });
      return payload;
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Unable to fetch portfolio data.";
      set({ isFetching: false, error: message });
      return null;
    }
  },
}));

export default usePortfolioStore;
