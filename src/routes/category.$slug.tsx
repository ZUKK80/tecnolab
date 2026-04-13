import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { CourseCard } from "@/components/CourseCard";
import { PCBBackground } from "@/components/PCBBackground";
import { getCategoryBySlug } from "@/lib/course-data";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/category/$slug")({
  component: CategoryPage,
  head: ({ params }) => {
    const cat = getCategoryBySlug(params.slug);
    return {
      meta: [
        { title: cat ? `${cat.title} — ElectroLab` : "Categoría — ElectroLab" },
        { name: "description", content: cat?.description ?? "" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="font-display text-4xl font-bold text-foreground">Categoría no encontrada</h1>
        <Link to="/" className="mt-4 inline-block text-primary hover:underline">Volver al inicio</Link>
      </div>
    </div>
  ),
});

function CategoryPage() {
  const { slug } = Route.useParams();
  const category = getCategoryBySlug(slug);

  if (!category) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold text-foreground">Categoría no encontrada</h1>
          <Link to="/" className="mt-4 inline-block text-primary hover:underline">Volver al inicio</Link>
        </div>
      </div>
    );
  }

  const levels = ["basic", "intermediate", "advanced"] as const;
  const levelLabels = { basic: "BÁSICO", intermediate: "INTERMEDIO", advanced: "AVANZADO" };
  const levelColors = { basic: "text-level-basic", intermediate: "text-level-intermediate", advanced: "text-level-advanced" };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Category Hero */}
      <section className="relative overflow-hidden border-b border-border/30">
        <PCBBackground density={14} />
        <div className="relative z-10 mx-auto max-w-5xl px-4 py-14">
          <Link to="/" className="mb-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-3.5 w-3.5" /> Volver al inicio
          </Link>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-4">
              <span className="text-4xl">{category.icon}</span>
              <div>
                <h1 className="font-display text-3xl font-black tracking-wider text-foreground">
                  {category.title}
                </h1>
                <p className="mt-1 text-muted-foreground">{category.description}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses by Level */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        {levels.map((level) => {
          const courses = category.courses.filter((c) => c.level === level);
          if (courses.length === 0) return null;

          return (
            <div key={level} className="mb-10">
              <h2 className={`font-display text-lg font-bold tracking-widest mb-4 ${levelColors[level]}`}>
                ▸ {levelLabels[level]}
              </h2>
              <div className="grid gap-3 md:grid-cols-2">
                {courses.map((course, i) => (
                  <CourseCard key={course.id} course={course} categorySlug={slug} index={i} />
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
