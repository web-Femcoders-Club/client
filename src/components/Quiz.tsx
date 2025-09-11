import React, { useEffect, useState } from "react";
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
  onComplete
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [userAnswers, setUserAnswers] = useState<Record<string, string[]>>({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [finalResults, setFinalResults] = useState<QuizResults | null>(null);
  const [processedQuestions, setProcessedQuestions] = useState(questions);

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
      return "¡Excelente! Dominas muy bien el tema. Estás listo para el siguiente nivel.";
    } else if (results.percentage >= 70) {
      return "¡Bien hecho! Tienes un buen conocimiento. Repasa los temas donde fallaste.";
    } else if (results.percentage >= 50) {
      return "Vas por buen camino, pero necesitas estudiar más algunos conceptos básicos.";
    } else {
      return "Te recomendamos repasar el material antes de continuar. ¡No te desanimes!";
    }
  };

  // Obtener color del nivel
  const getLevelColor = (level: string) => {
    switch (level) {
      case "basico": return "#22c55e";
      case "intermedio": return "#f59e0b";
      case "avanzado": return "#ef4444";
      default: return "#4737bb";
    }
  };

  if (quizCompleted && finalResults) {
    return (
      <div className="quiz-modal">
        <div className="quiz-modal-content">
          <h2 className="quiz-modal-title">¡Quiz Completado!</h2>
          
          <div className="quiz-modal-stats">
            <p><strong>Puntuación:</strong> {finalResults.score}/{finalResults.totalQuestions}</p>
            <p><strong>Porcentaje:</strong> {finalResults.percentage}%</p>
            <p><strong>Estado:</strong> {finalResults.passed ? "¡Aprobado!" : "No aprobado"}</p>
          </div>

          <div className="quiz-level-breakdown">
            <h3>Desglose por nivel:</h3>
            {Object.entries(finalResults.levelBreakdown).map(([level, stats]) => (
              <div key={level} className="level-stat">
                <span 
                  className="level-name"
                  style={{ color: getLevelColor(level) }}
                >
                  {level.charAt(0).toUpperCase() + level.slice(1)}:
                </span>
                <span> {stats.correct}/{stats.total}</span>
              </div>
            ))}
          </div>

          <div className="quiz-modal-recommendation">
            <p>{getRecommendation(finalResults)}</p>
          </div>

          <div className="quiz-modal-actions">
            <button 
              className="quiz-close-button"
              onClick={resetQuiz}
            >
              Repetir Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h2 className="quiz-title">{title}</h2>
      
      <div className="quiz-progress">
        <div className="quiz-progress-bar">
          <div 
            className="quiz-progress-fill"
            style={{ 
              width: `${((currentQuestionIndex + 1) / processedQuestions.length) * 100}%` 
            }}
          />
        </div>
        <span className="quiz-progress-text">
          Pregunta {currentQuestionIndex + 1} de {processedQuestions.length}
        </span>
      </div>

      {showLevelIndicator && (
        <div 
          className="quiz-level"
          style={{ color: getLevelColor(currentQuestion.level) }}
        >
          Nivel: {currentQuestion.level.charAt(0).toUpperCase() + currentQuestion.level.slice(1)}
        </div>
      )}

      <div className="quiz-question">
        {currentQuestion.question}
      </div>

      <div className="quiz-options">
        {currentQuestion.options.map((option) => (
          <label
            key={option.id}
            className={`quiz-option ${
              isAnswerChecked
                ? currentQuestion.correct.includes(option.id)
                  ? 'correct'
                  : selectedAnswers.includes(option.id)
                  ? 'incorrect'
                  : ''
                : selectedAnswers.includes(option.id)
                ? 'selected'
                : ''
            }`}
          >
            <input
              type={currentQuestion.correct.length === 1 ? "radio" : "checkbox"}
              name={`question-${currentQuestion.id}`}
              value={option.id}
              checked={selectedAnswers.includes(option.id)}
              onChange={() => handleAnswerSelect(option.id)}
              disabled={isAnswerChecked}
            />
            <span className="quiz-option-text">{option.text}</span>
          </label>
        ))}
      </div>

      {!isAnswerChecked ? (
        <button
          className="quiz-check-button"
          onClick={checkAnswer}
          disabled={selectedAnswers.length === 0}
        >
          Verificar Respuesta
        </button>
      ) : (
        <div className={`quiz-explanation ${isAnswerCorrect() ? 'quiz-correct' : 'quiz-incorrect'}`}>
          {isAnswerCorrect() ? (
            <div className="quiz-explanation-text">
              ¡Correcto! {currentQuestion.explanation}
            </div>
          ) : (
            <>
              <div className="quiz-explanation-title">
                Respuesta incorrecta
              </div>
              <div className="quiz-correct-answer">
                Respuesta correcta: {currentQuestion.options
                  .filter(opt => currentQuestion.correct.includes(opt.id))
                  .map(opt => opt.text)
                  .join(", ")}
              </div>
              <div className="quiz-explanation-text">
                {currentQuestion.explanation}
              </div>
            </>
          )}
          
          <button
            className="quiz-next-button"
            onClick={nextQuestion}
          >
            {currentQuestionIndex < processedQuestions.length - 1 ? 'Siguiente Pregunta' : 'Finalizar Quiz'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;