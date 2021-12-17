import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';


const MyPosts = (props) => {
  let propspostsElements = props.state.postsData.map(postObject => <Post message={postObject.message} likeCounter={postObject.likesCount}/> )

let newPostElement = React.createRef();   /* this is the way to create a link */



let addPost =() =>{

 let text = newPostElement.current.value;
 props.addPost(text);
 newPostElement.current.value="";
}



  return (

      <div className={s.postBlock}> <h3>my posts</h3>
        <div>
        <div>  <textarea ref = {newPostElement}></textarea> </div>   {/* and this is the way to attach the link to an element with the help of an attribute "ref" */}
       <div> <button onClick={addPost}>Add post</button> </div>
        </div>
        <div className={s.posts}>
     {propspostsElements}                            
        </div>
      </div>


  )
}

export default MyPosts;