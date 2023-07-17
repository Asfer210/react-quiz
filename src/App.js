import Quiz from "./components/Quiz";
import Result from "./components/Result";
import Start from "./components/Start";
import { useState,useEffect } from "react";

function App() {

  //Display Control
  const [showStart,setShowStart]=useState(true);
  const [showQuiz,setShowQuiz]=useState(false);
  const [showResult,setShowResult]=useState(false);

  //Quiz currentQue IndexOfQue
  const [quizs,setQuizs]=useState([])
  const [question,setQuestion]=useState({})
  const [questionIndex,setQuestionIndex]=useState(0)
  const [selectedAnswer,setSelectedAnswer]=useState('');
  const [correctAnswer,setCorrectedAnswer]=useState('');
  const [marks,setMarks]=useState(0);
  const [secondsRemaining,setSecondsRemaining] = useState(0);

  //Load JSON file
  useEffect(()=>{
    fetch('quiz.json')
      .then(res=>res.json())
      .then(data=>setQuizs(data))
  },[])

  //Set a Single Question
  useEffect(()=>{
    if(quizs.length>questionIndex){
      setQuestion(quizs[questionIndex])
    }
  },[quizs,questionIndex])

  //Timer setting
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsRemaining(prevSeconds => prevSeconds - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  //Timer next Question
  useEffect(() => {
    if (secondsRemaining === 0) {
      nextQuestion();
    }
  });


  //Start Quiz
  const startQuiz=()=>{
    setShowStart(false);
    setShowQuiz(true);
    setQuestionIndex(0);
    setSecondsRemaining(15);
  }

  //Check Answer
  const checkAnswer=(e,selected)=>{
    if(!selectedAnswer){
      setCorrectedAnswer(question.answer);
      setSelectedAnswer(selected);
    if(selected===question.answer){
      e.target.classList.add('bg-success');
      setMarks(marks+2);
    }
    else{
      e.target.classList.add('bg-danger');
    }
    }
  }

  //Next Question
  const nextQuestion=()=>{
    setCorrectedAnswer('');
    setSelectedAnswer('');
    const wrongBtn=document.querySelector('button.bg-danger')
    wrongBtn?.classList.remove('bg-danger');
    const rightBtn=document.querySelector('button.bg-success')
    rightBtn?.classList.remove('bg-success');
    setQuestionIndex(questionIndex+1)
    setSecondsRemaining(15);
  }

  //Show result
  const showTheResult=()=>{
    setShowResult(true);
    setShowQuiz(false);
    setShowStart(false);
  }

  //Quit 
  const quitQuiz=()=>{
    setShowStart(true);
    setShowQuiz(false);
  }

  //Start Over
  const startOver=()=>{
    setShowStart(false);
    setShowQuiz(true);
    setShowResult(false);
    setSecondsRemaining(15);
    setQuestionIndex(0);
    setMarks(0);
    setCorrectedAnswer('');
    setSelectedAnswer('');
    const wrongBtn=document.querySelector('button.bg-danger')
    wrongBtn?.classList.remove('bg-danger');
    const rightBtn=document.querySelector('button.bg-success')
    rightBtn?.classList.remove('bg-success');
  }

  return (
    <>
      <Start
        startQuiz={startQuiz}
        showStart={showStart}
      />
      <Quiz
        showQuiz={showQuiz}
        question={question}
        quizs={quizs}
        questionIndex={questionIndex}
        nextQuestion={nextQuestion}
        checkAnswer={checkAnswer}
        selectedAnswer={selectedAnswer}
        correctAnswer={correctAnswer}
        quitQuiz={quitQuiz}
        showTheResult={showTheResult}
        secondsRemaining={secondsRemaining}
      />
      <Result
        showResult={showResult}
        marks={marks}
        quizs={quizs}
        quitQuiz={quitQuiz}
        startOver={startOver}
      />
    </>
  );
}

export default App;
