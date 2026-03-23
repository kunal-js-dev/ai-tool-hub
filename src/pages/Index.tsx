import { categories, tools } from "@/data/tools";
import CategoryCard from "@/components/CategoryCard";
import ToolCard from "@/components/ToolCard";
import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Zap } from "lucide-react";

export default function Index() {
  const featuredTools = tools.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 opacity-20" style={{ background: "var(--gradient-hero)" }} />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-6">
              <Sparkles className="w-4 h-4" /> 99+ AI Tools Curated
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              Discover the <span className="gradient-text">Best AI Tools</span> in 2025
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Your ultimate directory of AI-powered tools across writing, coding, marketing, design, and more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="container -mt-8 mb-16">
        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {[
            { icon: Zap, label: "AI Tools", value: tools.length.toString() },
            { icon: TrendingUp, label: "Categories", value: categories.length.toString() },
            { icon: Sparkles, label: "Free Tools", value: tools.filter(t => t.pricing === "free").length.toString() },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="glass-card rounded-xl p-4 text-center"
            >
              <stat.icon className="w-5 h-5 text-primary mx-auto mb-1" />
              <div className="text-2xl font-display font-bold">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container mb-16">
        <h2 className="text-2xl font-display font-bold mb-6">Browse Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.id} category={cat} index={i} />
          ))}
        </div>
      </section>

      {/* Featured Tools */}
      <section className="container mb-16">
        <h2 className="text-2xl font-display font-bold mb-6">Featured Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredTools.map((tool, i) => (
            <ToolCard key={tool.id} tool={tool} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
