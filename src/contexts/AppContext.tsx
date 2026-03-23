import { createContext, useContext, useState, ReactNode, useCallback } from "react";

interface AppState {
  bookmarks: string[];
  recentlyViewed: string[];
  isLoggedIn: boolean;
  user: { name: string; email: string } | null;
}

interface AppContextType extends AppState {
  toggleBookmark: (toolId: string) => void;
  addRecentlyViewed: (toolId: string) => void;
  login: (name: string, email: string) => void;
  logout: () => void;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>({
    bookmarks: [],
    recentlyViewed: [],
    isLoggedIn: false,
    user: null,
  });

  const toggleBookmark = useCallback((toolId: string) => {
    setState(prev => ({
      ...prev,
      bookmarks: prev.bookmarks.includes(toolId)
        ? prev.bookmarks.filter(id => id !== toolId)
        : [...prev.bookmarks, toolId],
    }));
  }, []);

  const addRecentlyViewed = useCallback((toolId: string) => {
    setState(prev => ({
      ...prev,
      recentlyViewed: [toolId, ...prev.recentlyViewed.filter(id => id !== toolId)].slice(0, 10),
    }));
  }, []);

  const login = useCallback((name: string, email: string) => {
    setState(prev => ({ ...prev, isLoggedIn: true, user: { name, email } }));
  }, []);

  const logout = useCallback(() => {
    setState(prev => ({ ...prev, isLoggedIn: false, user: null }));
  }, []);

  return (
    <AppContext.Provider value={{ ...state, toggleBookmark, addRecentlyViewed, login, logout }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
