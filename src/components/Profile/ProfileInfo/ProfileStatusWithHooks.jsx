import React, { useEffect, useState } from "react"
import s from "./ProfileInfo.module.css";


const ProfileStatusWithHooks = (props) => {


let [editMode, setEditMode] = useState(false);
let [status, setStatus] = useState(props.status);

useEffect(()=>{
    setStatus(props.status)
}, [props.status])




const onStatusChange = (e)=>{
    setStatus(e.currentTarget.value)
}


const activateEditMode = ()=>{
    setEditMode(true);
}

const deactivateEditMode = ()=>{
    setEditMode(false);
    props.updateStatus(status)
}



    return (
        <div>

            {!editMode &&
                <div>
                    <span  onDoubleClick={activateEditMode} >{props.status || "--------"}</span>
                </div>
            }

            {editMode &&
                <div>
                    <input autoFocus = {true} onBlur={deactivateEditMode} onChange={onStatusChange} value ={status}></input>
                </div>
            } 



        </div>
    )
}



export default ProfileStatusWithHooks



/* task:
click on span=> span changes to input field, we can change our status, when we click off that field input changes to span and
 renew status to current :
 
 to be able to perform this task  and apply eventListener onBlur we have to have  autoFocus = {true}*/

