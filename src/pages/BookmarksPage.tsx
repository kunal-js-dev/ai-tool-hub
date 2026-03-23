import { useApp } from "@/contexts/AppContext";
import { tools } from "@/data/tools";
import ToolCard from "@/components/ToolCard";
import { Bookmark } from "lucide-react";

export default function BookmarksPage() {
  const { bookmarks } = useApp();
  const bookmarkedTools = tools.filter(t => bookmarks.includes(t.id));

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-display font-bold flex items-center gap-3 mb-2">
        <Bookmark className="w-7 h-7 text-accent" /> Your Bookmarks
      </h1>
      <p className="text-muted-foreground mb-8">{bookmarkedTools.length} saved tools</p>

      {bookmarkedTools.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground">
          No bookmarks yet. Browse tools and save your favorites!
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {bookmarkedTools.map((tool, i) => <ToolCard key={tool.id} tool={tool} index={i} />)}
        </div>
      )}
    </div>
  );
}
