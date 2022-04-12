import React from 'react';
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profile-reducer';
import s from "./MyPosts.module.css";
import Post from './Post/Post';








const MyPosts = (props) => {


  /* I added +1 to key just to make it somehow different */
  let propspostsElements = props.posts.map(postObject => <Post message={postObject.message} key={postObject.id+"1"} likeCounter={postObject.likesCount}/> )


let onSubmit=(data)=>{
  console.log(data.postText)
  props.addPost(data.postText);
}

  return (

      <div className={s.postBlock}> <h3>my posts</h3>
        <div>
<MyPostsReduxForm onSubmit={onSubmit}/>
        </div>
        <div className={s.posts}>
     {propspostsElements}                            
        </div>
      </div>


  )
}




const MyPostsForm = (props)=>{
return(
  <form onSubmit={props.handleSubmit}>
  <div> 
           <Field  component="input" type="textarea" name="postText" />
        </div>  
       <div> <button>Add post</button> </div>
        
  </form>
)

}


let MyPostsReduxForm = reduxForm({form:"MyPostsForm"})(MyPostsForm)










export default MyPosts;