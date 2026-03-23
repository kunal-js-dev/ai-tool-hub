import { categories } from "@/data/tools";
import CategoryCard from "@/components/CategoryCard";

export default function CategoriesPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-display font-bold mb-2">All Categories</h1>
      <p className="text-muted-foreground mb-8">Browse AI tools by category</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((cat, i) => (
          <CategoryCard key={cat.id} category={cat} index={i} />
        ))}
      </div>
    </div>
  );
}
