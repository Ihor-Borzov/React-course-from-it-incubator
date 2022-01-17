import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profile-reducer';
import s from "./MyPosts.module.css";
import Post from './Post/Post';








const MyPosts = (props) => {


  /* I added +1 to key just to make it somehow different */
  let propspostsElements = props.posts.map(postObject => <Post message={postObject.message} key={postObject.id+"1"} likeCounter={postObject.likesCount}/> )

let newPostElement = React.createRef();   /* this is the way to create a link */


/* event listeners we will call onSubjectHapend */
let onAddPost =() =>{
 props.addPost();
}


let onPostChange =()=>{
  let text = newPostElement.current.value;
  props.updateNewPostText(text); 
}


  return (

      <div className={s.postBlock}> <h3>my posts</h3>
        <div>
        <div> 
           <textarea ref = {newPostElement} value={props.postsText} onChange={onPostChange}/>
        </div>   {/* and this is the way to attach the link to an element with the help of an attribute "ref" */}
       <div> <button onClick={onAddPost}>Add post</button> </div>
        </div>
        <div className={s.posts}>
     {propspostsElements}                            
        </div>
      </div>


  )
}

export default MyPosts;