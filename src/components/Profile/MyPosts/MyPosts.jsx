import React from 'react';
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profile-reducer';
import { maxLengthCreator, required } from '../../../utilities/validators';
import { Input, TestComponent, Textarea } from '../../common/FormsControls/FormsControls';
import s from "./MyPosts.module.css";
import Post from './Post/Post';


let maxLength10 = maxLengthCreator(10)





const MyPosts = (props) => {


  /* I added +1 to key just to make it somehow different */
  let propspostsElements = props.posts.map(postObject => <Post message={postObject.message} key={postObject.id+"1"} likeCounter={postObject.likesCount}/> )


let onSubmit=(data)=>{
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
           <Field  component={Input} name="postText" validate={[required, maxLength10]}  placeholder="post message"/>
        </div>  
       <div> <button>Add post</button> </div>
        
  </form>
)

}


let MyPostsReduxForm = reduxForm({form:"MyPostsForm"})(MyPostsForm)



/* we called the function maxLength Creator right now when the page is rendering, and that function is closure, so we get back another function with needed us parameters */








export default MyPosts;