import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useSound } from "@/hooks/use-sound";

export const Route = createFileRoute("/tests-ohm")({
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
    question: "¿Qué representa la letra V en la Ley de Ohm?",
    options: ["Voltaje", "Corriente", "Resistencia", "Potencia"],
    correctAnswer: 0,
    explanation: "V representa el Voltaje, que es la 'presión eléctrica' que empuja los electrones a través de un circuito."
  },
  {
    id: 2,
    question: "¿En qué unidad se mide la corriente eléctrica?",
    options: ["Voltios", "Amperios", "Ohmios", "Watts"],
    correctAnswer: 1,
    explanation: "La corriente eléctrica se mide en Amperios (A)."
  },
  {
    id: 3,
    question: "¿Cuál es la fórmula correcta de la Ley de Ohm?",
    options: ["V = I × R", "I = V × R", "R = I × V", "V = I / R"],
    correctAnswer: 0,
    explanation: "La fórmula fundamental de la Ley de Ohm es V = I × R (Voltaje = Corriente × Resistencia)."
  },
  {
    id: 4,
    question: "Si tienes una resistencia de 10Ω y una corriente de 2A, ¿cuál es el voltaje?",
    options: ["5V", "12V", "20V", "8V"],
    correctAnswer: 2,
    explanation: "V = I × R = 2A × 10Ω = 20V"
  },
  {
    id: 5,
    question: "¿Qué sucede con la corriente si aumenta el voltaje?",
    options: ["Disminuye", "Aumenta", "Se mantiene igual", "Se vuelve cero"],
    correctAnswer: 1,
    explanation: "Según la Ley de Ohm, si aumenta el voltaje, la corriente también aumenta (son directamente proporcionales)."
  },
  {
    id: 6,
    question: "¿Qué sucede con la corriente si aumenta la resistencia?",
    options: ["Aumenta", "Disminuye", "Se mantiene igual", "Se duplica"],
    correctAnswer: 1,
    explanation: "Según la Ley de Ohm, si aumenta la resistencia, la corriente disminuye (son inversamente proporcionales)."
  },
  {
    id: 7,
    question: "¿Cuál es la fórmula para calcular la corriente?",
    options: ["I = V × R", "I = V / R", "I = R / V", "I = V + R"],
    correctAnswer: 1,
    explanation: "Para calcular la corriente, usamos I = V / R (Corriente = Voltaje / Resistencia)."
  },
  {
    id: 8,
    question: "Si tienes 12V y una resistencia de 6Ω, ¿cuál es la corriente?",
    options: ["1A", "2A", "3A", "0.5A"],
    correctAnswer: 1,
    explanation: "I = V / R = 12V / 6Ω = 2A"
  },
  {
    id: 9,
    question: "¿Cuál es la fórmula para calcular la resistencia?",
    options: ["R = V × I", "R = V / I", "R = I / V", "R = V + I"],
    correctAnswer: 1,
    explanation: "Para calcular la resistencia, usamos R = V / I (Resistencia = Voltaje / Corriente)."
  },
  {
    id: 10,
    question: "Si tienes 9V y una corriente de 0.5A, ¿cuál es la resistencia?",
    options: ["4.5Ω", "9Ω", "18Ω", "4.5Ω"],
    correctAnswer: 2,
    explanation: "R = V / I = 9V / 0.5A = 18Ω"
  },
  {
    id: 11,
    question: "¿En qué año Georg Simon Ohm descubrió la Ley de Ohm?",
    options: ["1800", "1827", "1850", "1900"],
    correctAnswer: 1,
    explanation: "Georg Simon Ohm descubrió la Ley de Ohm en 1827."
  },
  {
    id: 12,
    question: "¿Qué es la analogía de la manguera para entender la Ley de Ohm?",
    options: ["Voltaje = diámetro, Corriente = presión, Resistencia = flujo", "Voltaje = presión, Corriente = flujo, Resistencia = diámetro", "Voltaje = flujo, Corriente = presión, Resistencia = diámetro", "Ninguna de las anteriores"],
    correctAnswer: 1,
    explanation: "Voltaje es como la presión del agua, Corriente es el flujo de agua, y Resistencia es el diámetro de la manguera."
  },
  {
    id: 13,
    question: "¿Qué unidad se usa para medir la resistencia?",
    options: ["Voltios", "Amperios", "Ohmios", "Watts"],
    correctAnswer: 2,
    explanation: "La resistencia se mide en Ohmios (Ω)."
  },
  {
    id: 14,
    question: "Si duplicas el voltaje y mantienes la resistencia constante, ¿qué pasa con la corriente?",
    options: ["Se reduce a la mitad", "Se mantiene igual", "Se duplica", "Se vuelve cero"],
    correctAnswer: 2,
    explanation: "Si duplicas el voltaje con la misma resistencia, la corriente también se duplica (proporcionalidad directa)."
  },
  {
    id: 15,
    question: "Si duplicas la resistencia y mantienes el voltaje constante, ¿qué pasa con la corriente?",
    options: ["Se duplica", "Se mantiene igual", "Se reduce a la mitad", "Se vuelve cero"],
    correctAnswer: 2,
    explanation: "Si duplicas la resistencia con el mismo voltaje, la corriente se reduce a la mitad (proporcionalidad inversa)."
  },
  {
    id: 16,
    question: "¿Qué es un resistor?",
    options: ["Un componente que aumenta el voltaje", "Un componente que se opone al flujo de corriente", "Un componente que genera electricidad", "Un componente que almacena energía"],
    correctAnswer: 1,
    explanation: "Un resistor es un componente eléctrico que se opone al flujo de corriente eléctrica."
  },
  {
    id: 17,
    question: "¿Cuántos voltios tiene aproximadamente una pila AA?",
    options: ["1.5V", "3V", "9V", "12V"],
    correctAnswer: 0,
    explanation: "Una pila AA estándar tiene aproximadamente 1.5 voltios."
  },
  {
    id: 18,
    question: "¿Qué es el triángulo de Ohm?",
    options: ["Una forma geométrica", "Una herramienta visual para recordar las fórmulas", "Un tipo de circuito", "Un componente eléctrico"],
    correctAnswer: 1,
    explanation: "El triángulo de Ohm es una herramienta visual que ayuda a recordar las tres variaciones de la fórmula."
  },
  {
    id: 19,
    question: "¿Cuánto consume aproximadamente un LED?",
    options: ["20mA", "2A", "200mA", "0.2A"],
    correctAnswer: 0,
    explanation: "Un LED típico consume aproximadamente 20mA (0.02A)."
  },
  {
    id: 20,
    question: "Si tienes una resistencia de 1kΩ y una corriente de 10mA, ¿cuál es el voltaje?",
    options: ["10V", "1V", "100V", "0.1V"],
    correctAnswer: 0,
    explanation: "V = I × R = 0.01A × 1000Ω = 10V"
  },
  {
    id: 21,
    question: "¿Qué significa Ω?",
    options: ["Símbolo de voltaje", "Símbolo de ohmio", "Símbolo de amperio", "Símbolo de potencia"],
    correctAnswer: 1,
    explanation: "Ω es el símbolo de ohmio, la unidad de resistencia."
  },
  {
    id: 22,
    question: "¿Cuál es la aplicación principal de la Ley de Ohm en el diseño de circuitos?",
    options: ["Calcular el tamaño de los componentes", "Determinar colores", "Elegir el tipo de material", "Calcular el peso"],
    correctAnswer: 0,
    explanation: "La Ley de Ohm se usa para calcular los valores de componentes y asegurar que reciban el voltaje y corriente correctos."
  },
  {
    id: 23,
    question: "Si tienes 5V y quieres 0.5A, ¿qué resistencia necesitas?",
    options: ["2.5Ω", "10Ω", "25Ω", "0.1Ω"],
    correctAnswer: 1,
    explanation: "R = V / I = 5V / 0.5A = 10Ω"
  },
  {
    id: 24,
    question: "¿Qué pasa si la resistencia es muy baja?",
    options: ["La corriente será muy alta", "La corriente será muy baja", "El voltaje aumentará", "No pasa nada"],
    correctAnswer: 0,
    explanation: "Si la resistencia es muy baja, la corriente será muy alta (puede causar cortocircuito)."
  },
  {
    id: 25,
    question: "¿Qué es un cortocircuito?",
    options: ["Cuando la resistencia es infinita", "Cuando la resistencia es casi cero", "Cuando el voltaje es cero", "Cuando la corriente es cero"],
    correctAnswer: 1,
    explanation: "Un cortocircuito ocurre cuando la resistencia es casi cero, causando una corriente muy alta."
  },
  {
    id: 26,
    question: "¿Por qué es importante calcular la resistencia para un LED?",
    options: ["Para que brille más", "Para que no se queme por exceso de corriente", "Para cambiar su color", "Para hacerlo más pequeño"],
    correctAnswer: 1,
    explanation: "Es importante calcular la resistencia para limitar la corriente y evitar que el LED se queme."
  },
  {
    id: 27,
    question: "¿Cuál es la relación entre voltaje y corriente según la Ley de Ohm?",
    options: ["Inversamente proporcionales", "Directamente proporcionales", "No tienen relación", "Son iguales"],
    correctAnswer: 1,
    explanation: "Voltaje y corriente son directamente proporcionales: si uno aumenta, el otro también aumenta."
  },
  {
    id: 28,
    question: "Si tienes 24V y una resistencia de 8Ω, ¿cuál es la corriente?",
    options: ["2A", "3A", "4A", "6A"],
    correctAnswer: 1,
    explanation: "I = V / R = 24V / 8Ω = 3A"
  },
  {
    id: 29,
    question: "¿Qué es la 'presión eléctrica'?",
    options: ["Corriente", "Voltaje", "Resistencia", "Potencia"],
    correctAnswer: 1,
    explanation: "El voltaje se describe como la 'presión eléctrica' que empuja los electrones a través del circuito."
  },
  {
    id: 30,
    question: "¿Cuál es el símbolo de la corriente en la Ley de Ohm?",
    options: ["V", "R", "I", "P"],
    correctAnswer: 2,
    explanation: "I es el símbolo de la corriente (intensidad) en la Ley de Ohm."
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

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
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
                to="/teoria-ohm"
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
              navigate({ to: "/curso/$slug/$courseId", params: { slug: "fundamentos", courseId: "ohm" } });
            }}
            onMouseEnter={playHoverSound}
            className="mb-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Volver al curso
          </button>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl font-black tracking-wider text-foreground">
              Test de Ley de Ohm
            </h1>
            <p className="mt-2 text-muted-foreground">Evalúa tu conocimiento sobre la Ley de Ohm</p>
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
