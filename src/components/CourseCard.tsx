import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import type { Course } from "@/lib/course-data";
import { getLevelColor, getLevelLabel } from "@/lib/course-data";

interface CourseCardProps {
  course: Course;
  categorySlug: string;
  index: number;
}

export function CourseCard({ course, categorySlug, index }: CourseCardProps) {
  const levelColor = getLevelColor(course.level);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <Link
        to="/curso/$slug/$courseId"
        params={{ slug: categorySlug, courseId: course.id }}
        className="group block"
      >
        <div className="relative overflow-hidden rounded-lg border border-border bg-card p-5 transition-all duration-300 hover:border-primary/40 hover:bg-secondary/50">
          {/* Level indicator bar */}
          <div className={`absolute left-0 top-0 bottom-0 w-1 bg-${levelColor}`} />

          <div className="pl-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="font-mono text-lg font-bold text-muted-foreground">
                  {course.icon}
                </span>
                <h4 className="font-display text-base font-semibold tracking-wide text-foreground group-hover:text-primary transition-colors">
                  {course.title}
                </h4>
              </div>
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold bg-${levelColor}/15 text-${levelColor}`}>
                {getLevelLabel(course.level)}
              </span>
            </div>
            <p className="mt-1.5 text-sm text-muted-foreground">
              {course.description}
            </p>
            <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground">
              <span>{course.lessons} lecciones</span>
              <span className="mx-2">•</span>
              <span className="text-primary/70 group-hover:text-primary transition-colors">
                Comenzar →
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
