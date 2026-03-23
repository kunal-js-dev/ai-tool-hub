import { useApp } from "@/contexts/AppContext";
import { tools } from "@/data/tools";
import ToolCard from "@/components/ToolCard";
import { User, Bookmark, Clock, Mail } from "lucide-react";
import { Navigate } from "react-router-dom";

export default function ProfilePage() {
  const { isLoggedIn, user, bookmarks, recentlyViewed } = useApp();

  if (!isLoggedIn) return <Navigate to="/login" replace />;

  const bookmarkedTools = tools.filter(t => bookmarks.includes(t.id));
  const recentTools = tools.filter(t => recentlyViewed.includes(t.id));

  return (
    <div className="container py-8">
      {/* Profile header */}
      <div className="glass-card rounded-2xl p-6 mb-8 flex flex-col sm:flex-row items-center gap-6">
        <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
          <User className="w-10 h-10 text-primary" />
        </div>
        <div className="text-center sm:text-left">
          <h1 className="text-2xl font-display font-bold">{user?.name}</h1>
          <p className="text-muted-foreground flex items-center gap-1.5 justify-center sm:justify-start">
            <Mail className="w-4 h-4" /> {user?.email}
          </p>
        </div>
      </div>

      {/* Bookmarked */}
      <section className="mb-10">
        <h2 className="text-xl font-display font-bold flex items-center gap-2 mb-4">
          <Bookmark className="w-5 h-5 text-accent" /> Bookmarked Tools
        </h2>
        {bookmarkedTools.length === 0 ? (
          <p className="text-muted-foreground text-sm">No bookmarks yet. Browse tools and save your favorites!</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {bookmarkedTools.map((tool, i) => (
              <ToolCard key={tool.id} tool={tool} index={i} />
            ))}
          </div>
        )}
      </section>

      {/* Recently Viewed */}
      <section>
        <h2 className="text-xl font-display font-bold flex items-center gap-2 mb-4">
          <Clock className="w-5 h-5 text-primary" /> Recently Viewed
        </h2>
        {recentTools.length === 0 ? (
          <p className="text-muted-foreground text-sm">No recently viewed tools yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentTools.map((tool, i) => (
              <ToolCard key={tool.id} tool={tool} index={i} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
