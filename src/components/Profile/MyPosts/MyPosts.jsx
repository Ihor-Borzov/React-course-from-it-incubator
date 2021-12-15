import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';


const MyPosts = (props) => {


  let propspostsElements = props.posts.map(postObject => <Post message={postObject.message} likeCounter={postObject.likesCount}/> )

  return (

      <div className={s.postBlock}> <h3>my posts</h3>
        <div>
        <div>  <textarea></textarea> </div>
       <div> <button>Add post</button> </div>
        </div>
        <div className={s.posts}>
     {propspostsElements}                              {/* and this is the way to apply your props, sent from all the way index.js  */} 
        </div>
      </div>


  )
}

export default MyPosts;