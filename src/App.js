import React, { useState } from 'react';

export default function App() {
  const questions = [
    {
      questionText: 'りんご',
      answerOptions: [
        { answerText: 'Orange', isCorrect: false },
        { answerText: 'Banana', isCorrect: false },
        { answerText: 'Apple', isCorrect: true },
        { answerText: 'Pineapple', isCorrect: false },
      ],
    },
    {
      questionText: '売り上げ',
      answerOptions: [
        { answerText: 'Sales', isCorrect: true },
        { answerText: 'Expense', isCorrect: false },
        { answerText: 'Profit', isCorrect: false },
        { answerText: 'Benefit', isCorrect: false },
      ],
    },
    {
      questionText: '増加する',
      answerOptions: [
        { answerText: 'Increase', isCorrect: true },
        { answerText: 'Absorb', isCorrect: false },
        { answerText: 'Inform', isCorrect: false },
        { answerText: 'Decrease', isCorrect: false },
      ],
    },
    {
      questionText: '人工知能',
      answerOptions: [
        { answerText: 'Artificial Intelligence', isCorrect: true },
        { answerText: 'Computer Science', isCorrect: false },
        { answerText: 'Environmental Variable', isCorrect: false },
        { answerText: 'Programming Language', isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [correct, setIsCorrect] = useState({
    hidden: true,
    correct: false
  })

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setIsCorrect(prevState => ({
        ...prevState,
        hidden: false,
        correct: true
      }))
      setScore(score + 1);
    } else {
      setIsCorrect(prevState => ({
        ...prevState,
        hidden: false,
        correct: false
      }))
    }
    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      setIsCorrect(prevState => ({
        ...prevState,
        hidden: true
      }))
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    }, 500);
  };
  return (
    <div className='app'>
      {showScore ? (
        <div className='score-section'>
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button key={index} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
            ))}
          </div>
            {!correct.hidden && 
              (
                <div className='overlay'>
                  <div className="iconWrapper">
                    {correct.correct ?(
                      <div className='correct'></div>
                    ) : (
                      <div className='incorrect'></div>
                    )}
                  </div>
                </div>
              )
            }
        </>
      )}
    </div>
  );
}
