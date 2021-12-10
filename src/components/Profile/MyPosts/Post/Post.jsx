import React from 'react';
import s from "./Post.module.css";


const Post = (props) => {    /* A component receivs props as an object "props" and all the values with  keys */
  return (
          <div className={s.item}>
            <img src="https://mcswhispers.files.wordpress.com/2013/08/frank_mib.jpg"/>
            {props.message}                  {/*  // this is the way you use javascript in JSX scope or language */}
            <div>
            <span>Likes  {"...... "+   props.likeCounter}</span>
            </div>
            
            
            </div>


  )
}

export default Post;