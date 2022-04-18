import React from "react"
import { Field } from "redux-form"
import { reduxForm } from "redux-form"
import { required } from "../../utilities/validators"
import { Input } from "../common/FormsControls/FormsControls"


let Login = (props)=>{
    const onSubmit = (formData)=>{console.log(formData);}/* we create this method to send it to  LoginReduxForm, then this HOC (assign this method to handleSubmit) and pass this method to LoginForm. and there we use it as a listener onSubmit. usually this method receives data from the form  after button submit pressed */
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

<div><Field placeholder={"Login"} component={Input} validate={[required]} name={"login"}></Field></div>  {/* you have to specify what kind of component you are creating input you create */}
<div><Field placeholder={"Password"}  component={Input} validate={[required]} name={"password"}></Field></div>

<div>
    <label>
    <Field type={"checkbox"} component={'input'} name={"rememberMe"}></Field>
    remember me
    </label>
    </div>

<div><button > Submit </button></div> 



</form>
    )
}





const LoginReduxForm = reduxForm({form:'login'})(LoginForm)



export default Login;

