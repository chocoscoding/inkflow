import React from 'react'
import OneLodingPost from './OnePost';

const PostsLoading = ({amount}: {amount?: number}) => {
  return (
    <>
    {
        Array(amount|| 3).fill(0).map((e,i)=> <OneLodingPost key={'loadingPost'+i}/>)
    }
    </>
  )
}

export default PostsLoading