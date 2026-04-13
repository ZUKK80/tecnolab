import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useSound } from "@/hooks/use-sound";

export const Route = createFileRoute("/tests-kirchhoff")({
  component: TestsPage,
  head: () => {
    return {
      meta: [
        { title: "Tests — ElectroLab" },
      ],
    };
  },
});

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "¿Qué establece la Primera Ley de Kirchhoff (LKC)?",
    options: ["La suma de voltajes es cero", "La suma de corrientes en un nodo es cero", "La resistencia es constante", "La potencia se conserva"],
    correctAnswer: 1,
    explanation: "La Primera Ley de Kirchhoff (LKC) establece que la suma algebraica de todas las corrientes que entran y salen de un nodo es cero."
  },
  {
    id: 2,
    question: "¿Qué establece la Segunda Ley de Kirchhoff (LKV)?",
    options: ["La suma de corrientes es cero", "La suma de voltajes en una malla es cero", "La corriente es constante", "La potencia se conserva"],
    correctAnswer: 1,
    explanation: "La Segunda Ley de Kirchhoff (LKV) establece que la suma algebraica de todos los voltajes en una malla cerrada es cero."
  },
  {
    id: 3,
    question: "¿Qué es un nodo en un circuito?",
    options: ["Una fuente de voltaje", "Un punto donde se unen dos o más componentes", "Una resistencia", "Una malla cerrada"],
    correctAnswer: 1,
    explanation: "Un nodo es un punto de conexión donde se unen dos o más componentes del circuito."
  },
  {
    id: 4,
    question: "¿Qué es una malla en un circuito?",
    options: ["Un punto de conexión", "Una trayectoria cerrada que no se cruza a sí misma", "Una fuente de corriente", "Una resistencia"],
    correctAnswer: 1,
    explanation: "Una malla es cualquier trayectoria cerrada en un circuito que no se cruza a sí misma."
  },
  {
    id: 5,
    question: "Si a un nodo entran 5A y 3A, y sale I₁, ¿cuál es el valor de I₁?",
    options: ["2A", "8A", "5A", "3A"],
    correctAnswer: 1,
    explanation: "Según LKC: 5A + 3A = I₁, por lo tanto I₁ = 8A."
  },
  {
    id: 6,
    question: "Si a un nodo entran 10A y salen 4A y 3A, ¿cuánto sale por la tercera rama?",
    options: ["1A", "3A", "7A", "10A"],
    correctAnswer: 1,
    explanation: "Según LKC: 10A = 4A + 3A + I₃, por lo tanto I₃ = 3A."
  },
  {
    id: 7,
    question: "En una malla con una batería de 24V y dos resistencias en serie de 6Ω y 2Ω, ¿cuál es la corriente?",
    options: ["2A", "3A", "4A", "6A"],
    correctAnswer: 1,
    explanation: "R_total = 6Ω + 2Ω = 8Ω, I = V/R = 24V/8Ω = 3A."
  },
  {
    id: 8,
    question: "¿En qué año Gustav Kirchhoff formuló sus leyes?",
    options: ["1825", "1845", "1865", "1885"],
    correctAnswer: 1,
    explanation: "Gustav Kirchhoff formuló sus leyes en 1845."
  },
  {
    id: 9,
    question: "¿Cuál es la fórmula de la Primera Ley de Kirchhoff?",
    options: ["Σ V = 0", "Σ I = 0", "Σ P = 0", "Σ R = 0"],
    correctAnswer: 1,
    explanation: "La fórmula de la Primera Ley de Kirchhoff es Σ I = 0 (suma de corrientes igual a cero)."
  },
  {
    id: 10,
    question: "¿Cuál es la fórmula de la Segunda Ley de Kirchhoff?",
    options: ["Σ I = 0", "Σ V = 0", "Σ P = 0", "Σ R = 0"],
    correctAnswer: 1,
    explanation: "La fórmula de la Segunda Ley de Kirchhoff es Σ V = 0 (suma de voltajes igual a cero)."
  },
  {
    id: 11,
    question: "Si en una malla hay tres fuentes de 10V, 5V y -3V, ¿cuál es el voltaje total?",
    options: ["12V", "8V", "18V", "2V"],
    correctAnswer: 0,
    explanation: "V_total = 10V + 5V + (-3V) = 12V."
  },
  {
    id: 12,
    question: "¿Qué significa LKC?",
    options: ["Ley de Kirchhoff de Corrientes", "Ley de Kirchhoff de Circuitos", "Ley de Kirchhoff de Capacitancia", "Ley de Kirchhoff de Conexiones"],
    correctAnswer: 0,
    explanation: "LKC significa Ley de Kirchhoff de Corrientes (Kirchhoff's Current Law)."
  },
  {
    id: 13,
    question: "¿Qué significa LKV?",
    options: ["Ley de Kirchhoff de Corrientes", "Ley de Kirchhoff de Voltajes", "Ley de Kirchhoff de Circuitos", "Ley de Kirchhoff de Componentes"],
    correctAnswer: 1,
    explanation: "LKV significa Ley de Kirchhoff de Voltajes (Kirchhoff's Voltage Law)."
  },
  {
    id: 14,
    question: "Si un nodo tiene 4 corrientes entrando y 3 saliendo, ¿qué pasa con la cuarta corriente?",
    options: ["Debe salir", "Debe entrar", "Es cero", "No puede existir"],
    correctAnswer: 1,
    explanation: "Para que se cumpla LKC, si hay 4 entrando y 3 saliendo, la cuarta debe entrar para equilibrar las corrientes."
  },
  {
    id: 15,
    question: "¿Cuántas ecuaciones de nodos se pueden escribir para un circuito con N nodos?",
    options: ["N", "N-1", "N+1", "2N"],
    correctAnswer: 1,
    explanation: "Para un circuito con N nodos, se pueden escribir N-1 ecuaciones independientes de nodos (la última sería redundante)."
  },
  {
    id: 16,
    question: "¿Qué es un supernodo?",
    options: ["Un nodo con muchas corrientes", "Un nodo que contiene una fuente de voltaje", "Un nodo muy grande", "Un nodo ficticio"],
    correctAnswer: 1,
    explanation: "Un supernodo es un nodo que contiene una fuente de voltaje entre dos nodos principales."
  },
  {
    id: 17,
    question: "Si recorremos una malla en sentido horario, ¿cómo se considera una fuente de voltaje si entramos por el positivo?",
    options: ["Negativo", "Positivo", "Cero", "Indeterminado"],
    correctAnswer: 1,
    explanation: "Si recorremos una malla en sentido horario y entramos por el terminal positivo de una fuente, se considera positivo (+)."
  },
  {
    id: 18,
    question: "¿Qué es el análisis nodal?",
    options: ["Un método para calcular resistencias", "Un método para analizar circuitos usando LKC", "Un método para diseñar PCB", "Un método para medir voltaje"],
    correctAnswer: 1,
    explanation: "El análisis nodal es un método para analizar circuitos aplicando la Ley de Kirchhoff de Corrientes en los nodos."
  },
  {
    id: 19,
    question: "¿Qué es el análisis de mallas?",
    options: ["Un método para calcular resistencias", "Un método para analizar circuitos usando LKV", "Un método para diseñar PCB", "Un método para medir corriente"],
    correctAnswer: 1,
    explanation: "El análisis de mallas es un método para analizar circuitos aplicando la Ley de Kirchhoff de Voltajes en las mallas."
  },
  {
    id: 20,
    question: "Si en una malla la suma de fuentes es 15V y la suma de caídas es 15V, ¿se cumple LKV?",
    options: ["Sí", "No", "Depende", "Necesito más información"],
    correctAnswer: 0,
    explanation: "Sí, se cumple LKV porque la suma de fuentes (15V) es igual a la suma de caídas (15V), por lo tanto Σ V = 0."
  },
  {
    id: 21,
    question: "¿Cuál es la relación entre LKC y la conservación de carga?",
    options: ["No tienen relación", "LKC se basa en la conservación de carga", "LKC contradice la conservación de carga", "LKC es independiente de la conservación de carga"],
    correctAnswer: 1,
    explanation: "LKC se basa en el principio de conservación de la carga eléctrica: la carga no puede acumularse en un nodo."
  },
  {
    id: 22,
    question: "¿Cuál es la relación entre LKV y la conservación de energía?",
    options: ["No tienen relación", "LKV se basa en la conservación de energía", "LKV contradice la conservación de energía", "LKV es independiente de la conservación de energía"],
    correctAnswer: 1,
    explanation: "LKV se basa en el principio de conservación de la energía: la energía ganada en una malla debe ser igual a la energía perdida."
  },
  {
    id: 23,
    question: "Si tres resistencias de 10Ω están en paralelo, ¿cuál es la resistencia equivalente?",
    options: ["30Ω", "3.33Ω", "10Ω", "0.33Ω"],
    correctAnswer: 1,
    explanation: "1/R_eq = 1/10 + 1/10 + 1/10 = 3/10, por lo tanto R_eq = 10/3 ≈ 3.33Ω."
  },
  {
    id: 24,
    question: "¿Qué es una corriente ficticia en análisis de mallas?",
    options: ["Una corriente que no existe", "Una corriente que fluye en una rama compartida entre mallas", "Una corriente muy pequeña", "Una corriente imaginaria"],
    correctAnswer: 1,
    explanation: "Una corriente ficticia es la corriente que fluye en una rama compartida entre dos mallas adyacentes."
  },
  {
    id: 25,
    question: "¿Cuántas ecuaciones de mallas se pueden escribir para un circuito con M mallas?",
    options: ["M", "M-1", "M+1", "2M"],
    correctAnswer: 0,
    explanation: "Para un circuito con M mallas independientes, se pueden escribir M ecuaciones de mallas."
  },
  {
    id: 26,
    question: "Si una corriente entra a un nodo con valor negativo, ¿qué significa?",
    options: ["La corriente es cero", "La dirección real es opuesta a la asignada", "Hay un error", "La corriente es muy pequeña"],
    correctAnswer: 1,
    explanation: "Si una corriente tiene valor negativo, significa que la dirección real es opuesta a la dirección que asignamos inicialmente."
  },
  {
    id: 27,
    question: "¿Qué es el teorema de Millman?",
    options: ["Una variación de LKC", "Una variación de LKV", "Un método para simplificar circuitos", "Un teorema independiente"],
    correctAnswer: 2,
    explanation: "El teorema de Millman es un método para simplificar circuitos con múltiples fuentes de voltaje en paralelo."
  },
  {
    id: 28,
    question: "Si en un nodo entran corrientes de 2A, -3A y 4A, ¿cuál es la corriente que sale?",
    options: ["9A", "3A", "-3A", "1A"],
    correctAnswer: 1,
    explanation: "Según LKC: 2A + (-3A) + 4A = I_saliente, por lo tanto I_saliente = 3A."
  },
  {
    id: 29,
    question: "¿Cuál es la ventaja del análisis nodal sobre el de mallas?",
    options: ["Es más simple siempre", "Funciona mejor con fuentes de corriente", "Funciona mejor con fuentes de voltaje", "No tiene ventajas"],
    correctAnswer: 1,
    explanation: "El análisis nodal funciona mejor cuando hay fuentes de corriente, mientras que el de mallas funciona mejor con fuentes de voltaje."
  },
  {
    id: 30,
    question: "¿Qué sucede si violamos las leyes de Kirchhoff en un circuito?",
    options: ["El circuito funciona mejor", "El circuito no puede existir físicamente", "El circuito funciona igual", "Solo afecta la eficiencia"],
    correctAnswer: 1,
    explanation: "Si se violan las leyes de Kirchhoff, el circuito no puede existir físicamente porque contradice principios fundamentales de conservación."
  }
];

function TestsPage() {
  const navigate = useNavigate();
  const { playHoverSound, playClickSound } = useSound();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set());
  const [completed, setCompleted] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    if (answeredQuestions.has(currentQuestion)) return;
    
    playClickSound();
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    setAnsweredQuestions(new Set([...answeredQuestions, currentQuestion]));
    
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    playClickSound();
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setCompleted(true);
    }
  };

  const handleRestart = () => {
    playClickSound();
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnsweredQuestions(new Set());
    setCompleted(false);
  };

  const handleQuestionNav = (index: number) => {
    playClickSound();
    setCurrentQuestion(index);
  };

  if (completed) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="min-h-screen bg-background">
        <Header />

        <section className="relative overflow-hidden border-b border-border/30">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
          <div className="relative z-10 mx-auto max-w-4xl px-4 py-12">
            <Link
              to="/"
              className="mb-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Inicio
            </Link>
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="font-display text-4xl font-black tracking-wider text-foreground">
                Resultados del Test
              </h1>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-2xl border border-border bg-card p-8 text-center"
          >
            <div className="mb-6">
              <div className="text-8xl font-bold text-primary mb-2">{percentage}%</div>
              <p className="text-muted-foreground">Puntuación Final</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="rounded-xl bg-primary/10 p-4">
                <div className="text-3xl font-bold text-primary">{score}</div>
                <div className="text-sm text-muted-foreground">Correctas</div>
              </div>
              <div className="rounded-xl bg-destructive/10 p-4">
                <div className="text-3xl font-bold text-destructive">{questions.length - score}</div>
                <div className="text-sm text-muted-foreground">Incorrectas</div>
              </div>
            </div>

            <div className="mb-8">
              {percentage >= 80 && (
                <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2 text-green-500">
                  <span className="text-2xl">🎉</span>
                  <span className="font-medium">¡Excelente!</span>
                </div>
              )}
              {percentage >= 60 && percentage < 80 && (
                <div className="inline-flex items-center gap-2 rounded-full bg-yellow-500/10 px-4 py-2 text-yellow-500">
                  <span className="text-2xl">👍</span>
                  <span className="font-medium">¡Buen trabajo!</span>
                </div>
              )}
              {percentage < 60 && (
                <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-4 py-2 text-orange-500">
                  <span className="text-2xl">📚</span>
                  <span className="font-medium">Sigue practicando</span>
                </div>
              )}
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={handleRestart}
                onMouseEnter={playHoverSound}
                className="rounded-lg bg-primary px-6 py-3 text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Intentar de nuevo
              </button>
              <Link
                to="/teoria-kirchhoff"
                className="rounded-lg border border-border bg-secondary px-6 py-3 text-foreground font-medium hover:bg-secondary/80 transition-colors"
                onMouseEnter={playHoverSound}
              >
                Repasar teoría
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative overflow-hidden border-b border-border/30">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-12">
          <button
            onClick={() => {
              playClickSound();
              navigate({ to: "/curso/$slug/$courseId", params: { slug: "fundamentos", courseId: "kirchhoff" } });
            }}
            onMouseEnter={playHoverSound}
            className="mb-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Volver al curso
          </button>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl font-black tracking-wider text-foreground">
              Test de Leyes de Kirchhoff
            </h1>
            <p className="mt-2 text-muted-foreground">Evalúa tu conocimiento sobre las Leyes de Kirchhoff</p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">
              Pregunta {currentQuestion + 1} de {questions.length}
            </span>
            <span className="text-sm font-medium text-primary">
              Score: {score} / {answeredQuestions.size}
            </span>
          </div>
          <div className="h-2 rounded-full bg-secondary overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              className="h-full bg-primary"
            />
          </div>
        </div>

        {/* Question Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-border bg-card p-8 mb-6"
        >
          <h2 className="font-display text-xl font-bold text-foreground mb-6">
            {questions[currentQuestion].question}
          </h2>

          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => {
              let buttonClass = "w-full text-left p-4 rounded-xl border border-border hover:border-primary/30 transition-colors";
              
              if (showExplanation) {
                if (index === questions[currentQuestion].correctAnswer) {
                  buttonClass = "w-full text-left p-4 rounded-xl border-2 border-green-500 bg-green-500/10";
                } else if (selectedAnswer === index && index !== questions[currentQuestion].correctAnswer) {
                  buttonClass = "w-full text-left p-4 rounded-xl border-2 border-red-500 bg-red-500/10";
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  onMouseEnter={playHoverSound}
                  disabled={answeredQuestions.has(currentQuestion)}
                  className={buttonClass}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-xs font-bold">
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="text-foreground">{option}</span>
                    {showExplanation && index === questions[currentQuestion].correctAnswer && (
                      <span className="ml-auto text-green-500">✓</span>
                    )}
                    {showExplanation && selectedAnswer === index && index !== questions[currentQuestion].correctAnswer && (
                      <span className="ml-auto text-red-500">✗</span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {showExplanation && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 rounded-xl bg-secondary/50 p-4"
            >
              <p className="text-sm font-medium text-foreground mb-2">💡 Explicación:</p>
              <p className="text-sm text-muted-foreground">{questions[currentQuestion].explanation}</p>
            </motion.div>
          )}
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex justify-end">
          {showExplanation ? (
            <button
              onClick={handleNext}
              onMouseEnter={playHoverSound}
              className="rounded-lg bg-primary px-6 py-3 text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              {currentQuestion === questions.length - 1 ? "Ver resultados" : "Siguiente →"}
            </button>
          ) : (
            <button
              onClick={handleNext}
              onMouseEnter={playHoverSound}
              disabled={selectedAnswer === null}
              className="rounded-lg bg-primary px-6 py-3 text-primary-foreground font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Confirmar respuesta
            </button>
          )}
        </div>

        {/* Question Navigation */}
        <div className="mt-8">
          <p className="text-sm text-muted-foreground mb-4">Ir a pregunta:</p>
          <div className="flex flex-wrap gap-2">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => handleQuestionNav(index)}
                onMouseEnter={playHoverSound}
                className={`h-8 w-8 rounded-lg text-sm font-medium transition-colors ${
                  index === currentQuestion
                    ? "bg-primary text-primary-foreground"
                    : answeredQuestions.has(index)
                    ? "bg-green-500/20 text-green-500"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
