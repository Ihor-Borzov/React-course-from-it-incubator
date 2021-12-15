import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';


const MyPosts = () => {


  let postsData =[ 
    { id:1,  message:'Hi, how are you', likesCount:12},
      {id:2, message:'it is my first post', likesCount:11},
  ]

let postsElements = postsData.map(postObject => <Post message={postObject.message} likeCounter={postObject.likesCount}/> )


  return (

      <div className={s.postBlock}> <h3>my posts</h3>
        <div>
        <div>  <textarea></textarea> </div>
       <div> <button>Add post</button> </div>
        </div>
        <div className={s.posts}>
     {postsElements}                               // and here this is the way you expose your pots 
        </div>
      </div>


  )
}

export default MyPosts;