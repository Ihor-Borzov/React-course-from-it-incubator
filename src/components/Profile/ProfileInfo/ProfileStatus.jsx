import React from "react"
import s from "./ProfileInfo.module.css";


class ProfileStatus extends React.Component{
    /* this is the way we create LocalState */
state = {
    editMode:false,
    title:"yo"
}  


activateEditMode(){
    // this.state.editMode = true; /* this is the way to change the local state, but the page will not rerender after */
    // this.forceUpdate()   /*  this is the way to force update the change of local state */
    /* but to change the local state and rerender the page we have to use setState method. so setState will automatically will take the new 
    object and will combine new state object with an old one and override the changed properties. and then the component will rerender.
    remember that setState asynchronous method */
   
    this.setState({
editMode:true
    })
}


deactivateEditMode(){
    this.setState({
        editMode:false
    })
}



render=()=>{
    return(
        <div>
            {!this.state.editMode &&
<div>
<span onDoubleClick={this.activateEditMode.bind(this)} >{this.props.status}</span>
</div>
}

{this.state.editMode &&
<div>
<input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} defaultValue={this.props.status}></input>
</div>
}

</div>
    )
}


}



export default ProfileStatus

ProfileStatus.prototype.toString = function(){return("ProfileStatus object")}



//