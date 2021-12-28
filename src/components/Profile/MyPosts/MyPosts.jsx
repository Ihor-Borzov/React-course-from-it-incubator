import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/state';
import s from "./MyPosts.module.css";
import Post from './Post/Post';








const MyPosts = (props) => {
 
  let propspostsElements = props.state.postsData.map(postObject => <Post message={postObject.message} likeCounter={postObject.likesCount}/> )

let newPostElement = React.createRef();   /* this is the way to create a link */



let addPost =() =>{

 props.dispatch(addPostActionCreator());
}


let onPostChange =()=>{

  let text = newPostElement.current.value;
 
  props.dispatch(updateNewPostTextActionCreator(text)); 
  console.log(text);
}


  return (

      <div className={s.postBlock}> <h3>my posts</h3>
        <div>
        <div> 
           <textarea ref = {newPostElement} value={props.state.newPostText} onChange={onPostChange}/>
        </div>   {/* and this is the way to attach the link to an element with the help of an attribute "ref" */}
       <div> <button onClick={addPost}>Add post</button> </div>
        </div>
        <div className={s.posts}>
     {propspostsElements}                            
        </div>
      </div>


  )
}

export default MyPosts;