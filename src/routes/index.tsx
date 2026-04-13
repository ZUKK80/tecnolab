import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { CategoryCard } from "@/components/CategoryCard";
import { PCBBackground } from "@/components/PCBBackground";
import { categories } from "@/lib/course-data";
import { Zap, BookOpen, Cpu } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "ElectroLab — Aprende Electrónica desde Cero" },
      { name: "description", content: "Plataforma interactiva de aprendizaje de electrónica con IA. Desde ley de Ohm hasta microprocesadores." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/30">
        <PCBBackground density={10} />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 text-center md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h1 className="font-display text-4xl font-black tracking-wider text-foreground md:text-6xl">
              ELECTRO<span className="text-primary">LAB</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground leading-relaxed">
              Domina la electrónica desde los fundamentos hasta lo más avanzado.
              Aprende con <span className="text-primary font-semibold">inteligencia artificial</span>, tests interactivos y simulaciones.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex items-center justify-center gap-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-primary" />
              <span>{categories.reduce((s, c) => s + c.courses.length, 0)} cursos</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="h-4 w-4 text-accent" />
              <span>6 categorías</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-display text-2xl font-bold tracking-wider text-foreground mb-8"
        >
          CATEGORÍAS
        </motion.h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, i) => (
            <CategoryCard key={category.id} category={category} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
