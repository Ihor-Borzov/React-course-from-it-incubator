import React from "react"
import { Field } from "redux-form"
import { reduxForm } from "redux-form"
import { required } from "../../utilities/validators"
import { Input, TestComponent } from "../common/FormsControls/FormsControls"
import {login} from "../../Redux/auth-reducer"
import { connect } from "react-redux"
import { Navigate } from "react-router-dom"
import style from '../common/FormsControls/FormsControls.module.css'

let Login = (props)=>{
    const onSubmit = (formData)=>{
        console.log(formData.email, formData.password, formData.rememberMe);
        props.login(formData.email, formData.password, formData.rememberMe)
    
    }/* we create this method to send it to  LoginReduxForm, then this HOC (assign this method to handleSubmit) and pass this method to LoginForm. and there we use it as a listener onSubmit. usually this method receives data from the form  after button submit pressed */
    
    
    if(props.isAuth){
        return(<Navigate to='/profile'/>)
    }
    
    
    return(
        <div>
 <h1>Login</h1>
<LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}


////////////////////////////////////////////////////////////////////


let LoginForm = (props)=>{

    return(
<form onSubmit={props.handleSubmit}>      {/* very important to process everything in form, also important to specify onSubmit event listener*/}

<div><Field placeholder={"Login"} component={Input} validate={[required]} name={"email"}></Field></div>  {/* you have to specify what kind of component you are creating input you create */}
<div><Field placeholder={"Password"}  component={Input} validate={[required]} name={"password"} /* type="password" */></Field></div>

<div>
    <label>
    <Field type={"checkbox"} component={'input'} name={"rememberMe"}></Field>
    remember me
    </label>
    </div>

{props.error && <div className = {style.form_summary_error}> Coorva mach ego: {props.error}</div>}

<div><button > Submit </button></div> 



</form>
    )
}





const LoginReduxForm = reduxForm({form:'login'})(LoginForm)

let mapStateToProps = (state)=>{
    return{
        isAuth:state.auth.isAuth,
    }
}

export default connect(mapStateToProps,{login})( Login);  /* does not matter of the name you export - what matters is what you actually  export - in this case : login */

