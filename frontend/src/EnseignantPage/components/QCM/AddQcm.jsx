import React, { useState } from 'react';
import axios from 'axios';

const AddQcm = () => {
  const [question, setQuestion] = useState('');
  const [answerOptions, setAnswerOptions] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newQuiz = {
      question,
      answerOptions,
      correctAnswer,
    };

    axios.post('/api/quizzes', newQuiz)
      .then(response => {
        console.log(response);
        setQuestion('');
        setAnswerOptions(['', '', '', '']);
        setCorrectAnswer('');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Add New Quiz</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Question:
          <input type="text" value={question} onChange={e => setQuestion(e.target.value)} />
        </label>
        <label>
          Answer Options:
          {answerOptions.map((option, index) => (
            <input type="text" value={option} onChange={e => {
              const newAnswerOptions = [...answerOptions];
              newAnswerOptions[index] = e.target.value;
              setAnswerOptions(newAnswerOptions);
            }} />
          ))}
        </label>
        <label>
          Correct Answer:
          <input type="text" value={correctAnswer} onChange={e => setCorrectAnswer(e.target.value)} />
        </label>
        <button type="submit">Add Quiz</button>
      </form>
    </div>
  );
};

export default AddQcm;