export interface Course {
  id: string;
  title: string;
  description: string;
  level: "basic" | "intermediate" | "advanced";
  lessons: number;
  icon: string;
}

export interface Category {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  courses: Course[];
}

export const categories: Category[] = [
  {
    id: "fundamentals",
    title: "Fundamentos Eléctricos",
    slug: "fundamentos",
    description: "Ley de Ohm, Kirchhoff, conceptos de voltaje, corriente y resistencia",
    icon: "⚡",
    courses: [
      { id: "ohm", title: "Ley de Ohm", description: "Relación entre voltaje, corriente y resistencia", level: "basic", lessons: 8, icon: "Ω" },
      { id: "kirchhoff", title: "Leyes de Kirchhoff", description: "KVL y KCL aplicadas a circuitos", level: "basic", lessons: 10, icon: "∮" },
      { id: "potencia", title: "Potencia Eléctrica", description: "Cálculo y distribución de potencia", level: "basic", lessons: 6, icon: "W" },
      { id: "thevenin", title: "Teorema de Thévenin y Norton", description: "Simplificación de circuitos complejos", level: "intermediate", lessons: 12, icon: "≡" },
      { id: "superposicion", title: "Superposición y Millman", description: "Métodos avanzados de análisis", level: "advanced", lessons: 10, icon: "Σ" },
    ],
  },
  {
    id: "digital",
    title: "Electrónica Digital",
    slug: "digital",
    description: "Compuertas lógicas, flip-flops, contadores, microprocesadores",
    icon: "🔲",
    courses: [
      { id: "binario", title: "Sistema Binario", description: "Numeración binaria, octal y hexadecimal", level: "basic", lessons: 6, icon: "01" },
      { id: "compuertas", title: "Compuertas Lógicas", description: "AND, OR, NOT, NAND, NOR, XOR", level: "basic", lessons: 10, icon: "∧" },
      { id: "flipflops", title: "Flip-Flops y Registros", description: "Elementos de memoria secuencial", level: "intermediate", lessons: 12, icon: "FF" },
      { id: "contadores", title: "Contadores y Temporizadores", description: "Circuitos de conteo y temporización", level: "intermediate", lessons: 8, icon: "⏱" },
      { id: "micro", title: "Microprocesadores", description: "Arquitectura y programación básica", level: "advanced", lessons: 15, icon: "μP" },
    ],
  },
  {
    id: "analog",
    title: "Electrónica Analógica",
    slug: "analogica",
    description: "Transistores, amplificadores operacionales, filtros",
    icon: "📈",
    courses: [
      { id: "diodos", title: "Diodos y Rectificadores", description: "Funcionamiento y aplicaciones del diodo", level: "basic", lessons: 8, icon: "▷|" },
      { id: "transistores", title: "Transistores BJT", description: "Amplificación y conmutación con BJT", level: "intermediate", lessons: 14, icon: "BJT" },
      { id: "mosfet", title: "Transistores MOSFET", description: "FET de efecto de campo", level: "intermediate", lessons: 10, icon: "FET" },
      { id: "opamp", title: "Amplificadores Operacionales", description: "Configuraciones y aplicaciones del OpAmp", level: "advanced", lessons: 16, icon: "△" },
      { id: "filtros", title: "Filtros Analógicos", description: "Pasabajos, pasaaltos, pasabanda", level: "advanced", lessons: 12, icon: "∿" },
    ],
  },
  {
    id: "circuits",
    title: "Modelos Circuitales",
    slug: "modelos",
    description: "Análisis de mallas, nodos, transformadas y simulación",
    icon: "🔧",
    courses: [
      { id: "mallas", title: "Análisis de Mallas", description: "Método de mallas para circuitos", level: "basic", lessons: 8, icon: "⊞" },
      { id: "nodos", title: "Análisis Nodal", description: "Método de nodos y supernodos", level: "intermediate", lessons: 10, icon: "◉" },
      { id: "laplace", title: "Transformada de Laplace", description: "Análisis en el dominio de la frecuencia", level: "advanced", lessons: 14, icon: "ℒ" },
      { id: "bode", title: "Diagramas de Bode", description: "Respuesta en frecuencia de sistemas", level: "advanced", lessons: 10, icon: "📊" },
    ],
  },
  {
    id: "language",
    title: "Lenguaje Electrónico",
    slug: "lenguaje",
    description: "Simbología, lectura de datasheets, normas y estándares",
    icon: "📋",
    courses: [
      { id: "simbologia", title: "Simbología Electrónica", description: "Símbolos IEC y ANSI de componentes", level: "basic", lessons: 6, icon: "⏚" },
      { id: "datasheets", title: "Lectura de Datasheets", description: "Interpretación de hojas de datos", level: "intermediate", lessons: 8, icon: "📄" },
      { id: "pcb-design", title: "Diseño de PCB", description: "Creación de placas de circuito impreso", level: "advanced", lessons: 12, icon: "🖨" },
    ],
  },
  {
    id: "programming",
    title: "Programación Embebida",
    slug: "programacion",
    description: "Arduino, ESP32, PIC, lenguaje C para microcontroladores",
    icon: "💻",
    courses: [
      { id: "arduino-basico", title: "Arduino Básico", description: "Introducción a Arduino y sus componentes", level: "basic", lessons: 10, icon: "🔌" },
      { id: "arduino-avanzado", title: "Arduino Avanzado", description: "Interrupciones, comunicación serial, I2C", level: "intermediate", lessons: 12, icon: "⚙" },
      { id: "esp32", title: "ESP32 e IoT", description: "WiFi, Bluetooth y proyectos IoT", level: "advanced", lessons: 14, icon: "📡" },
    ],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getCourseById(categorySlug: string, courseId: string) {
  const cat = getCategoryBySlug(categorySlug);
  if (!cat) return undefined;
  const course = cat.courses.find((c) => c.id === courseId);
  return course ? { ...course, category: cat } : undefined;
}

export function getLevelColor(level: Course["level"]) {
  switch (level) {
    case "basic": return "level-basic";
    case "intermediate": return "level-intermediate";
    case "advanced": return "level-advanced";
  }
}

export function getLevelLabel(level: Course["level"]) {
  switch (level) {
    case "basic": return "Básico";
    case "intermediate": return "Intermedio";
    case "advanced": return "Avanzado";
  }
}
