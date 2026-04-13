import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { PCBBackground } from "@/components/PCBBackground";
import { getCourseById, getLevelLabel } from "@/lib/course-data";
import { ArrowLeft, BookOpen, FlaskConical, Gamepad2, Video } from "lucide-react";

export const Route = createFileRoute("/curso/$slug/$courseId")({
  component: CoursePage,
  head: ({ params }) => {
    const course = getCourseById(params.slug, params.courseId);
    return {
      meta: [
        { title: course ? `${course.title} — ElectroLab` : "Curso — ElectroLab" },
      ],
    };
  },
});

function CoursePage() {
  const { slug, courseId } = Route.useParams();
  const result = getCourseById(slug, courseId);

  if (!result) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <h1 className="font-display text-2xl text-foreground">Curso no encontrado</h1>
        <Link to="/" className="ml-4 text-primary hover:underline">Inicio</Link>
      </div>
    );
  }

  const { category, ...course } = result;

  const sections = [
    { icon: BookOpen, title: "Teoría", desc: "Explicaciones detalladas con IA", color: "text-primary" },
    { icon: FlaskConical, title: "Tests", desc: "Evalúa tu conocimiento", color: "text-accent" },
    { icon: Gamepad2, title: "Práctica", desc: "Ejercicios interactivos y juegos", color: "text-level-intermediate" },
    { icon: Video, title: "Videos", desc: "Animaciones explicativas", color: "text-level-advanced" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative overflow-hidden border-b border-border/30">
        <PCBBackground density={16} />
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-12">
          <Link
            to="/category/$slug"
            params={{ slug }}
            className="mb-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> {category.title}
          </Link>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-3xl font-mono font-bold text-muted-foreground">{course.icon}</span>
            <h1 className="mt-2 font-display text-3xl font-black tracking-wider text-foreground">
              {course.title}
            </h1>
            <p className="mt-2 text-muted-foreground">{course.description}</p>
            <div className="mt-3 flex items-center gap-3 text-sm">
              <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-muted-foreground">
                {getLevelLabel(course.level)}
              </span>
              <span className="text-muted-foreground">{course.lessons} lecciones</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="font-display text-xl font-bold tracking-wider text-foreground mb-6">
          CONTENIDO DEL CURSO
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {sections.map((s, i) => {
            if (s.title === "Teoría") {
              const theoryRoute = courseId === "ohm" ? "/teoria-ohm" : courseId === "kirchhoff" ? "/teoria-kirchhoff" : null;
              if (theoryRoute) {
                return (
                  <Link
                    key={s.title}
                    to={theoryRoute}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="rounded-xl border border-border bg-card p-6 hover:border-primary/30 transition-colors cursor-pointer"
                    >
                      <s.icon className={`h-8 w-8 ${s.color} mb-3`} />
                      <h3 className="font-display text-lg font-bold text-foreground">{s.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                      <p className="mt-4 text-xs text-primary">Ver →</p>
                    </motion.div>
                  </Link>
                );
              }
            }
            if (s.title === "Tests") {
              const testsRoute = courseId === "ohm" ? "/tests-ohm" : courseId === "kirchhoff" ? "/tests-kirchhoff" : null;
              if (testsRoute) {
                return (
                  <Link
                    key={s.title}
                    to={testsRoute}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="rounded-xl border border-border bg-card p-6 hover:border-primary/30 transition-colors cursor-pointer"
                    >
                      <s.icon className={`h-8 w-8 ${s.color} mb-3`} />
                      <h3 className="font-display text-lg font-bold text-foreground">{s.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                      <p className="mt-4 text-xs text-primary">Ver →</p>
                    </motion.div>
                  </Link>
                );
              }
            }
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-border bg-card p-6 hover:border-primary/30 transition-colors cursor-pointer"
              >
                <s.icon className={`h-8 w-8 ${s.color} mb-3`} />
                <h3 className="font-display text-lg font-bold text-foreground">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                <p className="mt-4 text-xs text-primary">Próximamente →</p>
              </motion.div>
            );
          })}
        </div>

        {/* Lesson list placeholder */}
        <div className="mt-12">
          <h2 className="font-display text-xl font-bold tracking-wider text-foreground mb-6">
            LECCIONES
          </h2>
          <div className="space-y-2">
            {Array.from({ length: course.lessons }, (_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.05 }}
                className="flex items-center gap-4 rounded-lg border border-border bg-card px-5 py-3.5 hover:border-primary/30 transition-colors"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-secondary font-mono text-sm font-bold text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <span className="text-sm font-medium text-foreground">Lección {i + 1}</span>
                  <span className="ml-2 text-xs text-muted-foreground">— Contenido generado con IA</span>
                </div>
                <span className="text-xs text-muted-foreground">🔒</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
