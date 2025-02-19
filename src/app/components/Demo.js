import { useEffect, useState } from 'react';
import sdk from '@farcaster/frame-sdk';
import Head from 'next/head';

export default function Demo() {
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);
  
  useEffect(() => {
    const load = async () => {
      sdk.actions.ready();
    };
    if (sdk && !isSDKLoaded) {
      setIsSDKLoaded(true);
      load();
    }
  }, [isSDKLoaded]);
  
  const [quizData, setQuizData] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]); // store selected answers
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  

  useEffect(() => {
    // Fetch quiz data from public folder (or you could embed it directly)
    fetch('/quiz.json')
      .then((res) => res.json())
      .then((data) => {
        setQuizData(data);
        // Initialize userAnswers to match number of questions
        setUserAnswers(Array(data.questions.length).fill(null));
      })
      .catch((err) => {
        console.error('Failed to load quiz:', err);
      });
  }, []);

  if (!quizData) {
    return <p style={styles.loading}>Loading quiz...</p>;
  }

  const handleAnswerClick = (answerIndex) => {
    // Store the user's choice for this question
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = answerIndex;
    setUserAnswers(updatedAnswers);

    // Move to the next question or complete the quiz
    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizComplete(true);
    }
  };

  // If the quiz is complete, calculate the score
  if (isQuizComplete) {
    const totalQuestions = quizData.questions.length;
    const correctCount = quizData.questions.reduce((count, q, idx) => {
      const userAnswer = userAnswers[idx];
      return userAnswer === q.correctAnswerIndex ? count + 1 : count;
    }, 0);

    // Calculate the percentage of correct answers
    const scorePercentage = Math.round((correctCount / totalQuestions) * 100);

    return (
      <div style={styles.container}>
        <Head>
        <meta name="fc:frame" content='{
        "version": "1",
        "imageUrl: "",
        "button": { 
        "title": "Take the Quiz",
        "action": {
        "type": "launch_frame",
        "name": "Romance vs Crypto",
        "url": "https://romancequiz-github-io-hqoj.vercel.app/",
        "splashImageUrl": "./love_or_crypto.png",
        "splashBackgroundColor": "#131313"
    },
  },
  }'/>
      </Head>
        <h1 style={styles.title}>Romance vs HODL Quiz</h1>
        <p style={styles.finalText}>
          You are {scorePercentage}% unworthy to be in a relationship.
        </p>
      </div>
    );
  }

  // Otherwise, show the current question
  const questionObj = quizData.questions[currentQuestionIndex];

  return (
    <div style={styles.container}>
      <Head>
        <meta name="fc:frame" content='{
        "version": "1",
        "imageUrl: "",
        "button": { 
        "title": "Take the Quiz",
        "action": {
        "type": "launch_frame",
        "name": "Romance vs Crypto",
        "url": "https://romancequiz-github-io-hqoj.vercel.app/",
        "splashImageUrl": "./love_or_crypto.png",
        "splashBackgroundColor": "#131313"
    },
  },
  }'/>
      </Head>
      <h1 style={styles.title}>Romance vs HODL Quiz</h1>
      <p style={styles.description}>{quizData.shortDescription}</p>
      <div style={styles.questionCard}>
        <h3 style={styles.questionTitle}>
          Question {currentQuestionIndex + 1} of {quizData.questions.length}
        </h3>
        <p style={styles.questionText}>{questionObj.question}</p>
        <div style={styles.answersContainer}>
          {questionObj.answers.map((answer, index) => (
            <button
              key={index}
              style={styles.answerButton}
              onClick={() => handleAnswerClick(index)}
            >
              {answer}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'sans-serif',
    maxWidth: '600px',
    margin: '50px auto',
    padding: '1rem',
  },
  title: {
    textAlign: 'center',
  },
  description: {
    marginBottom: '2rem',
    textAlign: 'center',
  },
  loading: {
    textAlign: 'center',
    marginTop: '50px',
  },
  questionCard: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '1rem',
    marginBottom: '1rem',
  },
  questionTitle: {
    margin: 0,
    marginBottom: '0.75rem',
  },
  questionText: {
    margin: 0,
    marginBottom: '1rem',
  },
  answersContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  answerButton: {
    padding: '0.75rem 1rem',
    fontSize: '1rem',
    cursor: 'pointer',
    borderRadius: '4px',
    border: '1px solid #444',
    backgroundColor: 'blue',
    textAlign: 'left',
  },
  finalText: {
    textAlign: 'center',
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
};