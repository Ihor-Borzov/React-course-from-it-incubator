import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';


const MyPosts = () => {
  return (

      <div>my posts
        <div><textarea></textarea>
        <button>Add post</button>
        </div>
        <div className={s.posts}>
     <Post message="Hi, how are you?" likeCounter="15"/>  {/* this is the way we create props for our component, when we call the component we send him all those props via object */}
     <Post message="it's my first post ?" likeCounter="20" />  {/* so each time we call our component - we send her the arguments like this and our component receives those arguments like keys and values in an object props. */}
     <Post/>
        </div>
      </div>


  )
}

export default MyPosts;