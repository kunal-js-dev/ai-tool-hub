import { Bookmark, BookmarkCheck, ExternalLink } from "lucide-react";
import { useApp } from "@/contexts/AppContext";
import { Tool } from "@/data/tools";
import { motion } from "framer-motion";

const pricingStyles: Record<string, string> = {
  free: "bg-cat-coding/20 text-cat-coding",
  paid: "bg-cat-youtube/20 text-cat-youtube",
  freemium: "bg-cat-productivity/20 text-cat-productivity",
};

export default function ToolCard({ tool, index = 0 }: { tool: Tool; index?: number }) {
  const { bookmarks, toggleBookmark, addRecentlyViewed, isLoggedIn } = useApp();
  const isBookmarked = bookmarks.includes(tool.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="group glass-card rounded-xl p-4 hover:border-primary/30 transition-all duration-300 hover:glow-primary"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-2xl">
          {tool.icon}
        </div>
        <div className="flex items-center gap-1.5">
          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${pricingStyles[tool.pricing]}`}>
            {tool.pricing}
          </span>
          {isLoggedIn && (
            <button
              onClick={() => toggleBookmark(tool.id)}
              className="p-1.5 rounded-lg hover:bg-secondary transition-colors"
            >
              {isBookmarked ? (
                <BookmarkCheck className="w-4 h-4 text-accent" />
              ) : (
                <Bookmark className="w-4 h-4 text-muted-foreground" />
              )}
            </button>
          )}
        </div>
      </div>
      <h3 className="font-display font-semibold text-foreground mb-1">{tool.name}</h3>
      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{tool.description}</p>
      <button
        onClick={() => addRecentlyViewed(tool.id)}
        className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline"
      >
        Visit Tool <ExternalLink className="w-3 h-3" />
      </button>
    </motion.div>
  );
}
