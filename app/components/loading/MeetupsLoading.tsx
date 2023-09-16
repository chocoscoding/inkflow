import React from 'react'
import OneMeetup from './OneMeetup';

const MeetupsLoading = ({amount}: {amount?: number}) => {
  return (
    <>
    {
        Array(amount|| 3).fill(0).map((e,i)=> <OneMeetup key={'loadingMeetup'+i}/>)
    }
    </>
  )
}

export default MeetupsLoading