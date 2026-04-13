import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/teoria-kirchhoff")({
  component: TheoryPage,
  head: () => {
    return {
      meta: [
        { title: "Leyes de Kirchhoff — ElectroLab" },
      ],
    };
  },
});

function TheoryPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative overflow-hidden border-b border-border/30">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-12">
          <button
            onClick={() => navigate({ to: "/curso/$slug/$courseId", params: { slug: "fundamentos", courseId: "kirchhoff" } })}
            className="mb-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Volver al curso
          </button>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl font-black tracking-wider text-foreground">
              Leyes de Kirchhoff
            </h1>
            <p className="mt-2 text-muted-foreground">Las leyes fundamentales del análisis de circuitos</p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="font-display text-2xl font-bold tracking-wider text-foreground mb-6">
            ¿Qué son las Leyes de Kirchhoff?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Las Leyes de Kirchhoff, formuladas por el físico alemán Gustav Kirchhoff en 1845, son dos principios fundamentales que nos permiten analizar circuitos eléctricos complejos. Estas leyes son la base del análisis de circuitos y son esenciales para cualquier ingeniero o técnico en electrónica.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Las dos leyes son:
          </p>
          <div className="bg-primary/10 rounded-xl p-6 border-l-4 border-primary">
            <p className="text-foreground font-medium mb-2">⚡ Primera Ley de Kirchhoff (LKC - Ley de Kirchhoff de Corrientes):</p>
            <p className="text-muted-foreground">
              La suma algebraica de todas las corrientes que entran y salen de un nodo es cero. En otras palabras, la corriente que entra a un nodo es igual a la que sale.
            </p>
          </div>
          <div className="bg-accent/10 rounded-xl p-6 border-l-4 border-accent mt-4">
            <p className="text-foreground font-medium mb-2">⚡ Segunda Ley de Kirchhoff (LKV - Ley de Kirchhoff de Voltajes):</p>
            <p className="text-muted-foreground">
              La suma algebraica de todos los voltajes en una malla cerrada es cero. Esto significa que la suma de las caídas de voltaje es igual a la suma de las fuentes de voltaje.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mb-12"
        >
          <h2 className="font-display text-2xl font-bold tracking-wider text-foreground mb-6">
            Primera Ley de Kirchhoff (LKC) - Ley de Corrientes
          </h2>
          <div className="rounded-2xl border border-border bg-card p-8 mb-6">
            <h3 className="font-display text-lg font-bold text-foreground mb-4">Concepto de Nodo</h3>
            <p className="text-muted-foreground mb-4">
              Un <strong className="text-foreground">nodo</strong> es un punto de conexión donde se unen dos o más componentes del circuito. Es como una "intersección" donde las corrientes pueden dividirse o unirse.
            </p>
            <div className="bg-secondary/50 rounded-lg p-4 font-mono mb-4">
              <p className="text-muted-foreground mb-2">Fórmula:</p>
              <p className="text-foreground font-bold">Σ I_entrante = Σ I_saliente</p>
              <p className="text-muted-foreground mt-2">o</p>
              <p className="text-foreground font-bold">Σ I = 0</p>
            </div>
            <p className="text-sm text-muted-foreground">
              <strong>Interpretación:</strong> La suma de todas las corrientes que entran al nodo es igual a la suma de todas las corrientes que salen. Si consideramos las corrientes que entran como positivas y las que salen como negativas, la suma total es cero.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="font-display text-lg font-bold text-foreground mb-4">Ejemplo Práctico de LKC</h3>
            <p className="text-muted-foreground mb-4">
              <strong>Problema:</strong> En un nodo, entran 3A y 2A, y sale una corriente I₁. ¿Cuál es el valor de I₁?
            </p>
            <div className="bg-secondary/50 rounded-lg p-4 font-mono mb-4">
              <p className="text-muted-foreground mb-2">Aplicando LKC:</p>
              <p className="text-muted-foreground mb-2">Σ I_entrante = Σ I_saliente</p>
              <p className="text-muted-foreground mb-2">3A + 2A = I₁</p>
              <p className="text-foreground font-bold">I₁ = 5A</p>
            </div>
            <p className="text-sm text-muted-foreground">
              <strong>Interpretación:</strong> La corriente que sale del nodo es de 5 amperios, que es la suma de las corrientes que entran (3A + 2A).
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="font-display text-2xl font-bold tracking-wider text-foreground mb-6">
            Segunda Ley de Kirchhoff (LKV) - Ley de Voltajes
          </h2>
          <div className="rounded-2xl border border-border bg-card p-8 mb-6">
            <h3 className="font-display text-lg font-bold text-foreground mb-4">Concepto de Malla</h3>
            <p className="text-muted-foreground mb-4">
              Una <strong className="text-foreground">malla</strong> es cualquier trayectoria cerrada en un circuito que no se cruza a sí misma. Es como un "bucle" por el que puede circular la corriente.
            </p>
            <div className="bg-secondary/50 rounded-lg p-4 font-mono mb-4">
              <p className="text-muted-foreground mb-2">Fórmula:</p>
              <p className="text-foreground font-bold">Σ V_fuente = Σ V_caída</p>
              <p className="text-muted-foreground mt-2">o</p>
              <p className="text-foreground font-bold">Σ V = 0</p>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              <strong>Interpretación:</strong> La suma de todas las fuentes de voltaje en una malla es igual a la suma de todas las caídas de voltaje. Si recorremos la malla en una dirección, las fuentes de voltaje se consideran positivas y las caídas de voltaje negativas.
            </p>
            <div className="bg-primary/10 rounded-xl p-4 border-l-4 border-primary">
              <p className="text-foreground font-medium mb-2">💡 Regla de signos:</p>
              <p className="text-muted-foreground">
                Al recorrer una malla, si entramos por el terminal positivo de una fuente, es positivo (+). Si entramos por el terminal negativo, es negativo (-). Para las resistencias, si recorremos en la dirección de la corriente, la caída de voltaje es negativa (-).
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="font-display text-lg font-bold text-foreground mb-4">Ejemplo Práctico de LKV</h3>
            <p className="text-muted-foreground mb-4">
              <strong>Problema:</strong> En una malla con una batería de 12V y dos resistencias en serie de 4Ω y 2Ω, ¿cuál es la caída de voltaje en cada resistencia?
            </p>
            <div className="bg-secondary/50 rounded-lg p-4 font-mono mb-4">
              <p className="text-muted-foreground mb-2">Primero calculamos la corriente (Ley de Ohm):</p>
              <p className="text-muted-foreground mb-2">R_total = 4Ω + 2Ω = 6Ω</p>
              <p className="text-muted-foreground mb-2">I = V / R_total = 12V / 6Ω = 2A</p>
              <p className="text-muted-foreground mb-2 mt-4">Ahora las caídas de voltaje:</p>
              <p className="text-muted-foreground mb-2">V_R1 = I × R1 = 2A × 4Ω = 8V</p>
              <p className="text-muted-foreground mb-2">V_R2 = I × R2 = 2A × 2Ω = 4V</p>
              <p className="text-foreground font-bold mt-4">Verificación LKV: 12V = 8V + 4V ✓</p>
            </div>
            <p className="text-sm text-muted-foreground">
              <strong>Interpretación:</strong> La suma de las caídas de voltaje (8V + 4V = 12V) es igual al voltaje de la fuente (12V), cumpliendo la Ley de Kirchhoff de Voltajes.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mb-12"
        >
          <h2 className="font-display text-2xl font-bold tracking-wider text-foreground mb-6">
            Aplicación Conjunta de las Leyes de Kirchhoff
          </h2>
          <div className="rounded-2xl border border-border bg-card p-8 mb-6">
            <h3 className="font-display text-lg font-bold text-foreground mb-4">Análisis de Circuitos Complejos</h3>
            <p className="text-muted-foreground mb-4">
              Para analizar circuitos complejos con múltiples mallas y nodos, seguimos estos pasos:
            </p>
            <ol className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">1</span>
                <div>
                  <strong className="text-foreground">Identifica los nodos:</strong>
                  Marca todos los puntos donde se unen tres o más componentes.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">2</span>
                <div>
                  <strong className="text-foreground">Aplica la LKC en los nodos:</strong>
                  Escribe ecuaciones para cada nodo (excepto uno, ya que sería redundante).
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">3</span>
                <div>
                  <strong className="text-foreground">Identifica las mallas:</strong>
                  Marca todas las trayectorias cerradas independientes.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">4</span>
                <div>
                  <strong className="text-foreground">Aplica la LKV en las mallas:</strong>
                  Escribe ecuaciones para cada malla independiente.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">5</span>
                <div>
                  <strong className="text-foreground">Resuelve el sistema de ecuaciones:</strong>
                  Usa álgebra para encontrar todas las corrientes y voltajes desconocidos.
                </div>
              </li>
            </ol>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="font-display text-2xl font-bold tracking-wider text-foreground mb-6">
            Aplicaciones Prácticas de las Leyes de Kirchhoff
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-bold text-foreground mb-2">🔌 Diseño de Circuitos</h3>
              <p className="text-sm text-muted-foreground">
                Es fundamental para diseñar circuitos con múltiples ramas y componentes interconectados.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-bold text-foreground mb-2">🔍 Análisis de Fallas</h3>
              <p className="text-sm text-muted-foreground">
                Permite identificar problemas en circuitos complejos mediante el análisis de corrientes y voltajes.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-bold text-foreground mb-2">⚡ Sistemas de Potencia</h3>
              <p className="text-sm text-muted-foreground">
                Se usa en el análisis de redes eléctricas y sistemas de distribución de energía.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-bold text-foreground mb-2">📱 Electrónica Digital</h3>
              <p className="text-sm text-muted-foreground">
                Aplicable en el análisis de circuitos integrados y sistemas digitales complejos.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
        >
          <h2 className="font-display text-2xl font-bold tracking-wider text-foreground mb-6">
            Consejos para Aplicar las Leyes de Kirchhoff
          </h2>
          <div className="rounded-2xl border border-border bg-card p-8">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl">🎯</span>
                <div>
                  <strong className="text-foreground">Define direcciones de corriente:</strong>
                  <p className="text-sm text-muted-foreground">Antes de aplicar LKC, asigna direcciones arbitrarias a las corrientes. Si el resultado es negativo, la dirección real es opuesta.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl">🔄</span>
                <div>
                  <strong className="text-foreground">Sé consistente con las direcciones:</strong>
                  <p className="text-sm text-muted-foreground">Cuando apliques LKV, recorre todas las mallas en la misma dirección (usualmente horaria).</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-level-intermediate text-xl">📝</span>
                <div>
                  <strong className="text-foreground">Escribe todas las ecuaciones primero:</strong>
                  <p className="text-sm text-muted-foreground">Antes de resolver, escribe todas las ecuaciones de LKC y LKV para tener un sistema completo.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-foreground text-xl">✅</span>
                <div>
                  <strong className="text-foreground">Verifica tus resultados:</strong>
                  <p className="text-sm text-muted-foreground">Siempre verifica que los resultados cumplan ambas leyes de Kirchhoff.</p>
                </div>
              </li>
            </ul>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
