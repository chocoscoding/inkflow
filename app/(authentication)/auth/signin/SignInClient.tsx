import React from 'react'
import WelcomeInfo from './WelcomeInfo';
import DataFields from './DataFields';

const SignInClient = () => {
  return (
<div className="flex w-[100vw] h-[100vh] overflow-hidden bg-red-default">
      <WelcomeInfo />
      <DataFields />
    </div>  )
}

export default SignInClient