import React from 'react'
const Quiz=({showQuiz,question,quizs,questionIndex,nextQuestion,quitQuiz,checkAnswer,selectedAnswer,correctAnswer,showTheResult,secondsRemaining})=>{
  return (
    <section className='bg-dark text-white' style={{display:`${showQuiz ?'block':'none'}`}}>
        <div className="container">
            <div className="row vh-100 align-items-center justify-content-center">
                <div className="col-lg-8">
                    <div className="card p-4" style={{background:'#3d3d3d',borderColor:'#646464'}}>
                        <div>
                            <div style={{float:'left',width:'50%'}} className={`${selectedAnswer?'text-primary':'text-danger'}`}>
                                {
                                    selectedAnswer?(<p>moving to next question in {secondsRemaining} seconds</p>)
                                    :
                                    (<p>Time remaining: {secondsRemaining} seconds</p>)
                                }
                            </div>
                            <div style={{float:'left',width:'50%'}}>
                                <button className="btn py-2 mb-2 justify-content-end bg-primary text-light fw-bold" style={{marginLeft:'83%'}} onClick={quitQuiz}> Quit</button>
                            </div>
                            </div>
                        <div className="d-flex justify-content-between gap-md-3">
                            <h5 className="mb-2 fs-normal 1h-base ">{question?.question}</h5>
                            <h5 style={{color:'#60d600',width:'100px',textAlign:'right'}}>{quizs.indexOf(question)+1}/{quizs?.length}</h5>
                        </div>
                        <div>
                            {
                                question?.options?.map((item,index)=>
                                <button key={index} className={`option w-100 text-start btn text-white py-2 px-3 mt-3  rounded btn-dark ${correctAnswer===item && 'bg-success'}`}
                                    onClick={(e)=>checkAnswer(e,item)}
                                >
                                    {item}
                                </button>
                                )
                            }
                        </div>
                        {
                            (questionIndex+1)!==quizs.length ?
                            <button className="btn py-2 w-100 mt-3 bg-primary text-light fw-bold" onClick={nextQuestion} disabled={!selectedAnswer}>Next Question</button>
                            :
                            <button className="btn py-2 w-100 mt-3 bg-primary text-light fw-bold" onClick={showTheResult} disabled={!selectedAnswer}>Show Results</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Quiz
