import React from 'react'

const Start=({showStart,startQuiz})=> {
  return (
    <section className='text-white text-center bg-dark' style={{display:`${showStart ? 'block' :'none'}`}}>
        <div className="container">
            <div className='row vh-100 align-item-center justify-content-center'>
                <div className='col-log-8'>
                    <h1 className='mb-3' style={{marginTop:'200px',fontFamily:'Courier New',letterSpacing:'1px',fontWeight:'400'}}><span style={{fontWeight:'600',fontSize:'44px'}}>W</span>orld <span style={{fontWeight:'600',fontSize:'44px'}}>F</span>ootball <span style={{fontWeight:'600',fontSize:'44px'}}>Q</span>uiz</h1>
                    <button className='btn px-4 py-2 bg-light text-dark fw-bold' onClick={startQuiz}>Start Quiz</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Start
