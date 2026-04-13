import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/teoria-ohm")({
  component: TheoryPage,
  head: () => {
    return {
      meta: [
        { title: "Ley de Ohm — ElectroLab" },
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
            onClick={() => navigate({ to: "/curso/$slug/$courseId", params: { slug: "circuitos", courseId: "ley-de-ohm" } })}
            className="mb-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Volver al curso
          </button>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl font-black tracking-wider text-foreground">
              Ley de Ohm
            </h1>
            <p className="mt-2 text-muted-foreground">La relación fundamental entre voltaje, corriente y resistencia</p>
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
            ¿Qué es la Ley de Ohm?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            La Ley de Ohm es uno de los principios fundamentales de la electricidad, descubierta por el físico alemán Georg Simon Ohm en 1827. Esta ley establece la relación matemática entre tres conceptos esenciales: voltaje, corriente y resistencia.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            En términos simples, la ley nos dice que <strong className="text-foreground">la corriente eléctrica que fluye a través de un conductor aumenta cuando aumenta el voltaje</strong> (la "presión" eléctrica) y <strong className="text-foreground">disminuye cuando aumenta la resistencia</strong> (la oposición al flujo).
          </p>
          <div className="bg-primary/10 rounded-xl p-6 border-l-4 border-primary">
            <p className="text-foreground font-medium mb-2">💡 Analogía fácil de entender:</p>
            <p className="text-muted-foreground">
              Imagina una manguera de jardín. El <strong className="text-primary">voltaje</strong> es como la presión del agua en la manguera, la <strong className="text-accent">corriente</strong> es la cantidad de agua que fluye, y la <strong className="text-level-intermediate">resistencia</strong> es como el diámetro de la manguera (mientras más angosta, más resistencia al flujo).
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
            Los Tres Componentes de la Ley de Ohm
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="text-4xl font-bold text-primary mb-3">V</div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">Voltaje</h3>
              <p className="text-sm text-muted-foreground mb-3">
                La "presión eléctrica" que empuja los electrones a través de un circuito. Se mide en <strong>voltios (V)</strong>.
              </p>
              <p className="text-xs text-muted-foreground">
                Ejemplo: Una pila AA tiene 1.5V, un tomacorriente doméstico tiene 120V o 220V.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="text-4xl font-bold text-accent mb-3">I</div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">Corriente</h3>
              <p className="text-sm text-muted-foreground mb-3">
                El flujo de electrones a través de un conductor. Se mide en <strong>amperios (A)</strong>.
              </p>
              <p className="text-xs text-muted-foreground">
                Ejemplo: Un LED consume aproximadamente 20mA (0.02A), una bombilla de 60W consume 0.5A.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="text-4xl font-bold text-level-intermediate mb-3">R</div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">Resistencia</h3>
              <p className="text-sm text-muted-foreground mb-3">
                La oposición al flujo de corriente eléctrica. Se mide en <strong>ohmios (Ω)</strong>.
              </p>
              <p className="text-xs text-muted-foreground">
                Ejemplo: Un resistor típico puede ser de 220Ω, 1kΩ (1000Ω), o 10kΩ (10000Ω).
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="font-display text-2xl font-bold tracking-wider text-foreground mb-6">
            La Fórmula Fundamental
          </h2>
          <div className="rounded-2xl border border-border bg-card p-8 mb-6">
            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary">V</div>
                <div className="text-sm text-muted-foreground mt-2">Voltaje (V)</div>
              </div>
              <div className="text-4xl font-bold text-muted-foreground">=</div>
              <div className="text-center">
                <div className="text-6xl font-bold text-accent">I</div>
                <div className="text-sm text-muted-foreground mt-2">Corriente (A)</div>
              </div>
              <div className="text-4xl font-bold text-muted-foreground">×</div>
              <div className="text-center">
                <div className="text-6xl font-bold text-level-intermediate">R</div>
                <div className="text-sm text-muted-foreground mt-2">Resistencia (Ω)</div>
              </div>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Esta fórmula nos dice que el voltaje es igual a la corriente multiplicada por la resistencia. Esto significa que si tienes más resistencia, necesitas más voltaje para mantener la misma corriente.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mb-12"
        >
          <h2 className="font-display text-2xl font-bold tracking-wider text-foreground mb-6">
            Triángulo de Ohm
          </h2>
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="flex items-center justify-center">
              <svg viewBox="0 0 200 180" className="w-64 h-56">
                <polygon points="100,20 180,160 20,160" fill="none" stroke="currentColor" strokeWidth="3" className="text-border" />
                <line x1="100" y1="60" x2="100" y2="140" stroke="currentColor" strokeWidth="2" className="text-border" />
                <text x="100" y="50" textAnchor="middle" className="text-2xl font-bold fill-primary">V</text>
                <text x="50" y="150" textAnchor="middle" className="text-2xl font-bold fill-accent">I</text>
                <text x="150" y="150" textAnchor="middle" className="text-2xl font-bold fill-level-intermediate">R</text>
                <text x="100" y="120" textAnchor="middle" className="text-lg fill-muted-foreground">I × R</text>
              </svg>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4 mb-4">
              Cubre la variable que quieres calcular
            </p>
            <div className="bg-secondary/50 rounded-lg p-4">
              <p className="text-sm text-foreground mb-2"><strong>Cómo usar el triángulo:</strong></p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Cubre V → V = I × R</li>
                <li>• Cubre I → I = V / R</li>
                <li>• Cubre R → R = V / I</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="font-display text-2xl font-bold tracking-wider text-foreground mb-6">
            Las Tres Variaciones de la Fórmula
          </h2>
          <div className="grid gap-4 sm:grid-cols-3 mb-6">
            <div className="rounded-xl border border-border bg-card p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">I = V / R</div>
              <div className="text-sm text-muted-foreground mb-3">Para calcular corriente</div>
              <p className="text-xs text-muted-foreground">
                Divide el voltaje entre la resistencia para obtener la corriente.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">V = I × R</div>
              <div className="text-sm text-muted-foreground mb-3">Para calcular voltaje</div>
              <p className="text-xs text-muted-foreground">
                Multiplica la corriente por la resistencia para obtener el voltaje.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 text-center">
              <div className="text-3xl font-bold text-level-intermediate mb-2">R = V / I</div>
              <div className="text-sm text-muted-foreground mb-3">Para calcular resistencia</div>
              <p className="text-xs text-muted-foreground">
                Divide el voltaje entre la corriente para obtener la resistencia.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mb-12"
        >
          <h2 className="font-display text-2xl font-bold tracking-wider text-foreground mb-6">
            Ejemplos Prácticos Paso a Paso
          </h2>
          
          <div className="rounded-2xl border border-border bg-card p-8 mb-6">
            <h3 className="font-display text-lg font-bold text-foreground mb-4">Ejemplo 1: Calcular Voltaje</h3>
            <p className="text-muted-foreground mb-4">
              <strong>Problema:</strong> Si tienes una resistencia de 10Ω y una corriente de 2A, ¿cuál es el voltaje?
            </p>
            <div className="bg-secondary/50 rounded-lg p-4 font-mono mb-4">
              <p className="text-muted-foreground mb-2">Fórmula: <span className="text-primary">V</span> = <span className="text-accent">I</span> × <span className="text-level-intermediate">R</span></p>
              <p className="text-muted-foreground mb-2">Sustitución: <span className="text-primary">V</span> = <span className="text-accent">2A</span> × <span className="text-level-intermediate">10Ω</span></p>
              <p className="text-foreground font-bold">Resultado: <span className="text-primary">V</span> = <span className="text-primary">20V</span></p>
            </div>
            <p className="text-sm text-muted-foreground">
              <strong>Interpretación:</strong> Necesitas 20 voltios para hacer que 2 amperios fluyan a través de una resistencia de 10 ohmios.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 mb-6">
            <h3 className="font-display text-lg font-bold text-foreground mb-4">Ejemplo 2: Calcular Corriente</h3>
            <p className="text-muted-foreground mb-4">
              <strong>Problema:</strong> Si tienes un voltaje de 12V y una resistencia de 6Ω, ¿cuál es la corriente?
            </p>
            <div className="bg-secondary/50 rounded-lg p-4 font-mono mb-4">
              <p className="text-muted-foreground mb-2">Fórmula: <span className="text-accent">I</span> = <span className="text-primary">V</span> / <span className="text-level-intermediate">R</span></p>
              <p className="text-muted-foreground mb-2">Sustitución: <span className="text-accent">I</span> = <span className="text-primary">12V</span> / <span className="text-level-intermediate">6Ω</span></p>
              <p className="text-foreground font-bold">Resultado: <span className="text-accent">I</span> = <span className="text-accent">2A</span></p>
            </div>
            <p className="text-sm text-muted-foreground">
              <strong>Interpretación:</strong> Con 12 voltios aplicados a una resistencia de 6 ohmios, fluirán 2 amperios de corriente.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="font-display text-lg font-bold text-foreground mb-4">Ejemplo 3: Calcular Resistencia</h3>
            <p className="text-muted-foreground mb-4">
              <strong>Problema:</strong> Si tienes un voltaje de 9V y una corriente de 0.5A, ¿cuál es la resistencia?
            </p>
            <div className="bg-secondary/50 rounded-lg p-4 font-mono mb-4">
              <p className="text-muted-foreground mb-2">Fórmula: <span className="text-level-intermediate">R</span> = <span className="text-primary">V</span> / <span className="text-accent">I</span></p>
              <p className="text-muted-foreground mb-2">Sustitución: <span className="text-level-intermediate">R</span> = <span className="text-primary">9V</span> / <span className="text-accent">0.5A</span></p>
              <p className="text-foreground font-bold">Resultado: <span className="text-level-intermediate">R</span> = <span className="text-level-intermediate">18Ω</span></p>
            </div>
            <p className="text-sm text-muted-foreground">
              <strong>Interpretación:</strong> Una resistencia de 18 ohmios limitará la corriente a 0.5 amperios cuando se aplican 9 voltios.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="font-display text-2xl font-bold tracking-wider text-foreground mb-6">
            Aplicaciones Prácticas de la Ley de Ohm
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-bold text-foreground mb-2">💡 Diseño de Circuitos</h3>
              <p className="text-sm text-muted-foreground">
                Los ingenieros usan la Ley de Ohm para diseñar circuitos electrónicos, asegurando que los componentes reciban el voltaje y corriente correctos.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-bold text-foreground mb-2">🔌 Cálculo de Resistencias</h3>
              <p className="text-sm text-muted-foreground">
                Para proteger componentes sensibles como LEDs, calculamos la resistencia necesaria usando esta ley.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-bold text-foreground mb-2">🔋 Baterías y Carga</h3>
              <p className="text-sm text-muted-foreground">
                Determina cuánto tiempo durará una batería alimentando un dispositivo específico.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-bold text-foreground mb-2">⚡ Seguridad Eléctrica</h3>
              <p className="text-sm text-muted-foreground">
                Ayuda a entender los límites seguros de corriente para evitar sobrecargas y cortocircuitos.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
        >
          <h2 className="font-display text-2xl font-bold tracking-wider text-foreground mb-6">
            Consejos para Recordar la Ley de Ohm
          </h2>
          <div className="rounded-2xl border border-border bg-card p-8">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl">🧠</span>
                <div>
                  <strong className="text-foreground">Usa el triángulo:</strong>
                  <p className="text-sm text-muted-foreground">El triángulo de Ohm es una herramienta visual muy útil para recordar las tres fórmulas.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl">📝</span>
                <div>
                  <strong className="text-foreground">Practica con ejemplos:</strong>
                  <p className="text-sm text-muted-foreground">Resuelve muchos problemas con diferentes valores para familiarizarte con los cálculos.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-level-intermediate text-xl">🎯</span>
                <div>
                  <strong className="text-foreground">Entiende las unidades:</strong>
                  <p className="text-sm text-muted-foreground">Recuerda: Voltios (V), Amperios (A), Ohmios (Ω). Las unidades deben ser consistentes.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-foreground text-xl">🔄</span>
                <div>
                  <strong className="text-foreground">Verifica tus respuestas:</strong>
                  <p className="text-sm text-muted-foreground">Siempre verifica si tu resultado tiene sentido. Por ejemplo, más resistencia debería dar menos corriente.</p>
                </div>
              </li>
            </ul>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
