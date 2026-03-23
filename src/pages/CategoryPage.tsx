import { useParams } from "react-router-dom";
import { useState } from "react";
import { getCategoryById, getToolsByCategory, PricingType } from "@/data/tools";
import ToolCard from "@/components/ToolCard";
import PricingFilter from "@/components/PricingFilter";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function CategoryPage() {
  const { id } = useParams<{ id: string }>();
  const category = getCategoryById(id || "");
  const [filter, setFilter] = useState<PricingType | "all">("all");

  if (!category) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-display font-bold mb-4">Category not found</h1>
        <Link to="/" className="text-primary hover:underline">Go home</Link>
      </div>
    );
  }

  const allTools = getToolsByCategory(category.id);
  const filteredTools = filter === "all" ? allTools : allTools.filter(t => t.pricing === filter);

  return (
    <div className="container py-8">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <span className="text-4xl">{category.icon}</span>
          <div>
            <h1 className={`text-3xl font-display font-bold ${category.colorClass}`}>{category.name}</h1>
            <p className="text-sm text-muted-foreground">{allTools.length} tools available</p>
          </div>
        </div>
        <PricingFilter value={filter} onChange={setFilter} />
      </div>

      {filteredTools.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">No tools match this filter.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTools.map((tool, i) => (
            <ToolCard key={tool.id} tool={tool} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
