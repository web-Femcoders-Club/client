import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, CircleCheck, CircleX, RotateCcw } from "lucide-react";
import "./Quiz.css";

// Tipos de datos para el quiz
export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: string;
  level: "basico" | "intermedio" | "avanzado";
  question: string;
  options: QuizOption[];
  correct: string[];
  explanation: string;
}

export interface QuizProps {
  title: string;
  questions: QuizQuestion[];
  showLevelIndicator?: boolean;
  shuffleQuestions?: boolean;
  passPercentage?: number;
  onComplete?: (results: QuizResults) => void;
  /** Lo que el post añade a la pantalla de resultados: el logro, la guía de estudio… */
  extraResultados?: React.ReactNode;
}

export interface QuizResults {
  score: number;
  totalQuestions: number;
  percentage: number;
  correctAnswers: number;
  incorrectAnswers: number;
  levelBreakdown: {
    basico: { correct: number; total: number };
    intermedio: { correct: number; total: number };
    avanzado: { correct: number; total: number };
  };
  passed: boolean;
}

const Quiz: React.FC<QuizProps> = ({
  title,
  questions,
  showLevelIndicator = true,
  shuffleQuestions = false,
  passPercentage = 70,
  onComplete,
  extraResultados,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [userAnswers, setUserAnswers] = useState<Record<string, string[]>>({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [finalResults, setFinalResults] = useState<QuizResults | null>(null);
  const [processedQuestions, setProcessedQuestions] = useState(questions);
  // Foco: al comprobar, a la explicación; al pasar de pregunta, a la pregunta; al terminar, a los resultados.
  const preguntaRef = useRef<HTMLLegendElement>(null);
  const respuestaRef = useRef<HTMLDivElement>(null);
  const resultadosRef = useRef<HTMLDivElement>(null);
  const moverFoco = useRef<"pregunta" | "respuesta" | null>(null);

  useEffect(() => {
    if (moverFoco.current === "respuesta") respuestaRef.current?.focus();
    if (moverFoco.current === "pregunta") preguntaRef.current?.focus();
    moverFoco.current = null;
  });

  useEffect(() => {
    if (quizCompleted) resultadosRef.current?.focus();
  }, [quizCompleted]);

  // Mezclar preguntas si está habilitado
  useEffect(() => {
    if (shuffleQuestions) {
      const shuffled = [...questions].sort(() => Math.random() - 0.5);
      setProcessedQuestions(shuffled);
    }
  }, [questions, shuffleQuestions]);

  const currentQuestion = processedQuestions[currentQuestionIndex];

  // Manejar selección de respuestas
  const handleAnswerSelect = (optionId: string) => {
    if (isAnswerChecked) return;

    const currentCorrectAnswers = currentQuestion.correct;
    
    if (currentCorrectAnswers.length === 1) {
      // Una sola respuesta correcta
      setSelectedAnswers([optionId]);
    } else {
      // Múltiples respuestas correctas
      setSelectedAnswers(prev => 
        prev.includes(optionId)
          ? prev.filter(id => id !== optionId)
          : [...prev, optionId]
      );
    }
  };

  // Verificar respuesta
  const checkAnswer = () => {
    if (selectedAnswers.length === 0) return;

    setIsAnswerChecked(true);
    moverFoco.current = "respuesta";

    // Guardar la respuesta del usuario
    setUserAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: selectedAnswers
    }));
  };

  // Ir a la siguiente pregunta
  const nextQuestion = () => {
    if (currentQuestionIndex < processedQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswers([]);
      setIsAnswerChecked(false);
      moverFoco.current = "pregunta";
    } else {
      finishQuiz();
    }
  };

  // Finalizar quiz y calcular resultados
  const finishQuiz = () => {
    const finalUserAnswers = {
      ...userAnswers,
      [currentQuestion.id]: selectedAnswers
    };

    let correctCount = 0;
    const levelStats = {
      basico: { correct: 0, total: 0 },
      intermedio: { correct: 0, total: 0 },
      avanzado: { correct: 0, total: 0 }
    };

    processedQuestions.forEach(question => {
      const userAnswer = finalUserAnswers[question.id] || [];
      const isCorrect = 
        userAnswer.length === question.correct.length &&
        userAnswer.every(answer => question.correct.includes(answer));

      levelStats[question.level].total++;
      if (isCorrect) {
        correctCount++;
        levelStats[question.level].correct++;
      }
    });

    const percentage = Math.round((correctCount / processedQuestions.length) * 100);
    const results: QuizResults = {
      score: correctCount,
      totalQuestions: processedQuestions.length,
      percentage,
      correctAnswers: correctCount,
      incorrectAnswers: processedQuestions.length - correctCount,
      levelBreakdown: levelStats,
      passed: percentage >= passPercentage
    };

    setFinalResults(results);
    setQuizCompleted(true);
    onComplete?.(results);
  };

  // Verificar si la respuesta es correcta
  const isAnswerCorrect = () => {
    return selectedAnswers.length === currentQuestion.correct.length &&
           selectedAnswers.every(answer => currentQuestion.correct.includes(answer));
  };

  // Reiniciar quiz
  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setIsAnswerChecked(false);
    setUserAnswers({});
    setQuizCompleted(false);
    setFinalResults(null);
    
    if (shuffleQuestions) {
      const shuffled = [...questions].sort(() => Math.random() - 0.5);
      setProcessedQuestions(shuffled);
    }
  };

  // Obtener recomendación basada en el resultado
  const getRecommendation = (results: QuizResults) => {
    if (results.percentage >= 90) {
      return "¡Excelente! Dominas muy bien el tema: ya puedes pasar al siguiente nivel.";
    } else if (results.percentage >= 70) {
      return "¡Bien hecho! Tienes una buena base. Repasa las preguntas en las que fallaste.";
    } else if (results.percentage >= 50) {
      return "Vas por buen camino: repasa algunos conceptos básicos antes de seguir.";
    } else {
      return "Te recomendamos repasar el material antes de continuar. ¡Cada intento cuenta!";
    }
  };

  // Etiqueta de cada nivel, con los colores del rediseño (todos por encima de 7:1).
  const NIVELES: Record<QuizQuestion["level"], { nombre: string; clase: string }> = {
    basico: { nombre: "Básico", clase: "fc-chip" },
    intermedio: { nombre: "Intermedio", clase: "fc-chip fc-chip--naranja" },
    avanzado: { nombre: "Avanzado", clase: "fc-chip fc-chip--lila" },
  };

  /** Las etiquetas y atributos del texto, en letra de código: «<article>», «target='_blank'». */
  const conCodigo = (texto: string) =>
    texto
      .split(/(<[^>]+>|\b\w+='[^']*')/g)
      .map((trozo, i) => (i % 2 === 1 ? <code key={i}>{trozo}</code> : trozo));

  if (quizCompleted && finalResults) {
    const porNivel = (Object.keys(finalResults.levelBreakdown) as QuizQuestion["level"][]).filter(
      (nivel) => finalResults.levelBreakdown[nivel].total > 0
    );
    return (
      <section className="quiz" aria-labelledby="quiz-resultados-titulo">
        <div className="quiz__resultados" tabIndex={-1} ref={resultadosRef}>
          <h3 className="quiz__titulo" id="quiz-resultados-titulo">
            {title} · Resultados
          </h3>
          <div className="quiz__resumen">
            <div
              className="quiz__anillo"
              style={{ "--porcentaje": finalResults.percentage } as React.CSSProperties}
              role="img"
              aria-label={`${finalResults.score} de ${finalResults.totalQuestions} respuestas correctas, ${finalResults.percentage} %`}
            >
              <p className="quiz__anillo-cifra">
                {finalResults.score}/{finalResults.totalQuestions}
                <small>{finalResults.percentage} %</small>
              </p>
            </div>
            <div className="quiz__resumen-texto">
              <p>
                <span className={finalResults.passed ? "fc-chip" : "fc-chip fc-chip--naranja"}>
                  {finalResults.passed ? "Aprobado" : "Sigue practicando"}
                </span>
              </p>
              <p className="quiz__resumen-titulo">
                {finalResults.score} de {finalResults.totalQuestions} respuestas correctas
              </p>
              <p>{getRecommendation(finalResults)}</p>
            </div>
          </div>

          <ul className="quiz__niveles" aria-label="Aciertos por nivel">
            {porNivel.map((nivel) => {
              const { correct, total } = finalResults.levelBreakdown[nivel];
              return (
                <li key={nivel} className="quiz__nivel">
                  <span className="quiz__nivel-nombre">{NIVELES[nivel].nombre}</span>
                  <span className="quiz__nivel-barra" aria-hidden="true">
                    <span style={{ width: `${(correct / total) * 100}%` }} />
                  </span>
                  <span className="quiz__nivel-cifra">
                    {correct}/{total}
                  </span>
                </li>
              );
            })}
          </ul>

          {extraResultados}

          <div className="quiz__acciones">
            <button type="button" className="fc-boton" onClick={resetQuiz}>
              <RotateCcw aria-hidden="true" />
              Repetir el quiz
            </button>
          </div>
        </div>
      </section>
    );
  }

  const multiple = currentQuestion.correct.length > 1;
  const acertada = isAnswerChecked && isAnswerCorrect();
  const nivel = NIVELES[currentQuestion.level];

  return (
    <section className="quiz" aria-labelledby="quiz-titulo">
      <div className="quiz__cabecera">
        <h3 className="quiz__titulo" id="quiz-titulo">
          {title}
        </h3>
        <p className="quiz__contador">
          Pregunta {currentQuestionIndex + 1} de {processedQuestions.length}
        </p>
      </div>
      <div
        className="quiz__barra"
        role="progressbar"
        aria-label="Progreso del quiz"
        aria-valuemin={1}
        aria-valuemax={processedQuestions.length}
        aria-valuenow={currentQuestionIndex + 1}
      >
        <span style={{ width: `${((currentQuestionIndex + 1) / processedQuestions.length) * 100}%` }} />
      </div>

      <fieldset className="quiz__grupo">
        <legend className="quiz__pregunta" tabIndex={-1} ref={preguntaRef}>
          {conCodigo(currentQuestion.question)}
        </legend>
        <div className="quiz__meta">
          {showLevelIndicator && <span className={nivel.clase}>{nivel.nombre}</span>}
          {multiple && <span className="quiz__pista">Puede haber más de una respuesta correcta</span>}
        </div>
        <div className="quiz__opciones">
          {currentQuestion.options.map((option) => {
            const elegida = selectedAnswers.includes(option.id);
            const correcta = currentQuestion.correct.includes(option.id);
            let estado = "";
            if (isAnswerChecked) estado = correcta ? "correcta" : elegida ? "fallada" : "bloqueada";
            else if (elegida) estado = "elegida";
            return (
              <label
                key={option.id}
                className={`quiz__opcion${multiple ? " quiz__opcion--multiple" : ""}${estado ? ` quiz__opcion--${estado}` : ""}`}
              >
                <input
                  type={multiple ? "checkbox" : "radio"}
                  name={`question-${currentQuestion.id}`}
                  value={option.id}
                  checked={elegida}
                  onChange={() => handleAnswerSelect(option.id)}
                  disabled={isAnswerChecked}
                />
                <span className="quiz__marca" aria-hidden="true">
                  <Check />
                </span>
                <span className="quiz__opcion-texto">{conCodigo(option.text)}</span>
                {estado === "correcta" && (
                  <span className="quiz__opcion-estado">
                    <CircleCheck aria-hidden="true" />
                    Correcta
                  </span>
                )}
                {estado === "fallada" && (
                  <span className="quiz__opcion-estado">
                    <CircleX aria-hidden="true" />
                    Tu respuesta
                  </span>
                )}
              </label>
            );
          })}
        </div>
      </fieldset>

      {!isAnswerChecked ? (
        <div className="quiz__acciones">
          <button
            type="button"
            className="fc-boton fc-boton--noche"
            onClick={checkAnswer}
            disabled={selectedAnswers.length === 0}
          >
            Comprobar respuesta
          </button>
        </div>
      ) : (
        <>
          <div
            className={`quiz__respuesta ${acertada ? "quiz__respuesta--bien" : "quiz__respuesta--mal"}`}
            tabIndex={-1}
            ref={respuestaRef}
          >
            <p className="quiz__respuesta-titulo">
              {acertada ? <CircleCheck aria-hidden="true" /> : <CircleX aria-hidden="true" />}
              {acertada ? "¡Correcto!" : "No es la respuesta correcta"}
            </p>
            {!acertada && (
              <p>
                <strong>Respuesta correcta:</strong>{" "}
                {currentQuestion.options
                  .filter((opt) => currentQuestion.correct.includes(opt.id))
                  .map((opt) => opt.text)
                  .join(", ")}
              </p>
            )}
            <p>{conCodigo(currentQuestion.explanation)}</p>
          </div>
          <div className="quiz__acciones">
            <button type="button" className="fc-boton fc-boton--noche" onClick={nextQuestion}>
              {currentQuestionIndex < processedQuestions.length - 1 ? "Siguiente pregunta" : "Ver resultados"}
              <ArrowRight aria-hidden="true" />
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default Quiz;