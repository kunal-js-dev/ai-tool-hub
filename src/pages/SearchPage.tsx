import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { searchTools, PricingType } from "@/data/tools";
import ToolCard from "@/components/ToolCard";
import PricingFilter from "@/components/PricingFilter";
import { Search } from "lucide-react";

export default function SearchPage() {
  const [params] = useSearchParams();
  const q = params.get("q") || "";
  const [query, setQuery] = useState(q);
  const [filter, setFilter] = useState<PricingType | "all">("all");

  useEffect(() => { setQuery(q); }, [q]);

  const results = searchTools(query);
  const filtered = filter === "all" ? results : results.filter(t => t.pricing === filter);

  return (
    <div className="container py-8">
      <div className="flex items-center gap-3 mb-6">
        <Search className="w-6 h-6 text-primary" />
        <h1 className="text-2xl font-display font-bold">
          {query ? `Results for "${query}"` : "Search Tools"}
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search tools..."
          className="flex-1 bg-secondary rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-muted-foreground"
        />
        <PricingFilter value={filter} onChange={setFilter} />
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground">
          {query ? "No tools found. Try a different search." : "Start typing to search tools."}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((tool, i) => (
            <ToolCard key={tool.id} tool={tool} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
