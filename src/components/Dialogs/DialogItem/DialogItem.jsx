import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css'





/* if the COMPONENT IS NOT GOING TO BE IN USE ANYWHERE ELSE WE CAN KEEP THAT COMPONENT IN THE SAME FILE WE ARE GOING TO USE IT */
const DialogItem = (props) => {
    let path = "/dialogs/" + props.id      /* so before return in jsx we can use regular javascript without curly brackets */
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>     {/* I can make it this way or the way above with creating a new variable <NavLink to={"/dialogs/"+ props.id}>{props.name}</NavLink> */}
        </div>
    )
}


export default DialogItem;