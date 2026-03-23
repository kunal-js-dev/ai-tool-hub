import { Link } from "react-router-dom";
import { Category, getToolsByCategory } from "@/data/tools";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CategoryCard({ category, index = 0 }: { category: Category; index?: number }) {
  const toolCount = getToolsByCategory(category.id).length;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
    >
      <Link
        to={`/category/${category.id}`}
        className={`group glass-card rounded-xl p-5 block border-l-4 ${category.borderClass} hover:glow-primary transition-all duration-300`}
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-3xl">{category.icon}</span>
          <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <h3 className={`font-display font-semibold ${category.colorClass} mb-1`}>{category.name}</h3>
        <p className="text-sm text-muted-foreground">{toolCount} tools</p>
      </Link>
    </motion.div>
  );
}
