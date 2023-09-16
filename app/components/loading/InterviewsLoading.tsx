import React from 'react'
import OneInterview from './OneInterview';


const InterviewsLoading = ({amount}: {amount?: number}) => {
  return (
    <>
    {
        Array(amount|| 3).fill(0).map((e,i)=> <OneInterview key={'loadingPost'+i}/>)
    }
    </>
  )
}

export default InterviewsLoading