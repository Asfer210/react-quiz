import React from 'react'

const Result = ({showResult,marks,quizs,startOver,quitQuiz}) => {
  return (
    <section className="bg-dark text-white" style={{display:`${showResult?'block':'none'}`}}>
        <div className="container">
            <div className="row vh-100 align-items-center justify-content-center">
                <div className="col-log-6">
                    <div className={`text-light text-center p-5 rounded ${marks>(quizs.length*2/2)?'bg-success':'bg-danger'}`}>
                        <h3 className="mb-2 fw-bold">{marks>(quizs.length*2/2)?'Awesome':'Oops'}</h3>
                        <h3 className="mb-3 fw-bold">Your score is {marks} out of {quizs.length*2}</h3>
                        <button className="btn bg-primary text-light py-2 px-4 btn-light fw-bold d-inline" onClick={startOver}>Start Over</button>
                        <button className="btn bg-primary text-light py-2 ms-2 px-4 btn-light fw-bold d-inline"  onClick={quitQuiz}>Quit</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Result;
