import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import type { Category } from "@/lib/course-data";

interface CategoryCardProps {
  category: Category;
  index: number;
}

export function CategoryCard({ category, index }: CategoryCardProps) {
  const totalLessons = category.courses.reduce((sum, c) => sum + c.lessons, 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to="/category/$slug"
        params={{ slug: category.slug }}
        className="group block"
      >
        <div className="relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_-5px] hover:shadow-primary/20">
          {/* Corner accent */}
          <div className="absolute top-0 right-0 h-16 w-16 overflow-hidden">
            <div className="absolute top-0 right-0 h-px w-full bg-gradient-to-l from-primary/40 to-transparent" />
            <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-primary/40 to-transparent" />
          </div>

          <div className="flex items-start gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-secondary text-2xl">
              {category.icon}
            </span>
            <div className="flex-1 min-w-0">
              <h3 className="font-display text-lg font-bold tracking-wide text-foreground group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                {category.description}
              </p>
              <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                  {category.courses.length} cursos
                </span>
                <span className="flex items-center gap-1">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                  {totalLessons} lecciones
                </span>
              </div>
            </div>
          </div>

          {/* Bottom trace line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </Link>
    </motion.div>
  );
}
