import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { User, Session } from "@supabase/supabase-js";

interface Profile {
  display_name: string | null;
  avatar_url: string | null;
}

interface AppContextType {
  user: User | null;
  session: Session | null;
  profile: Profile | null;
  isLoggedIn: boolean;
  bookmarks: string[];
  recentlyViewed: string[];
  loading: boolean;
  toggleBookmark: (toolId: string) => void;
  addRecentlyViewed: (toolId: string) => void;
  logout: () => Promise<void>;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [recentlyViewed, setRecentlyViewed] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  // Listen for auth changes
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (!session?.user) {
        setProfile(null);
        setBookmarks([]);
        setLoading(false);
      }
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (!session?.user) setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Fetch profile & bookmarks when user changes
  useEffect(() => {
    if (!user) return;

    const fetchData = async () => {
      const [profileRes, bookmarksRes] = await Promise.all([
        supabase.from("profiles").select("display_name, avatar_url").eq("user_id", user.id).single(),
        supabase.from("bookmarks").select("tool_id").eq("user_id", user.id),
      ]);

      if (profileRes.data) setProfile(profileRes.data);
      if (bookmarksRes.data) setBookmarks(bookmarksRes.data.map(b => b.tool_id));
      setLoading(false);
    };

    fetchData();
  }, [user]);

  const toggleBookmark = useCallback(async (toolId: string) => {
    if (!user) return;
    const isBookmarked = bookmarks.includes(toolId);

    if (isBookmarked) {
      setBookmarks(prev => prev.filter(id => id !== toolId));
      await supabase.from("bookmarks").delete().eq("user_id", user.id).eq("tool_id", toolId);
    } else {
      setBookmarks(prev => [...prev, toolId]);
      await supabase.from("bookmarks").insert({ user_id: user.id, tool_id: toolId });
    }
  }, [user, bookmarks]);

  const addRecentlyViewed = useCallback((toolId: string) => {
    setRecentlyViewed(prev => [toolId, ...prev.filter(id => id !== toolId)].slice(0, 10));
  }, []);

  const logout = useCallback(async () => {
    await supabase.auth.signOut();
  }, []);

  return (
    <AppContext.Provider value={{
      user, session, profile, isLoggedIn: !!user, bookmarks,
      recentlyViewed, loading, toggleBookmark, addRecentlyViewed, logout,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
