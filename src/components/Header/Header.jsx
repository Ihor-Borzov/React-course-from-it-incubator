import React from 'react';  // we have to import react to be able to use JSX language
import { NavLink } from 'react-router-dom';
import s from "./Header.module.css";  // this is the way to spread css components and connect them to their JSX components, you have to add the word "modules" to css file names to be able to use the same class names in different modules, this way you will separate them!

const Header = (props)=>{    // this is the way you can  create a component. An arrow function, named from UperCase letter with return of JSX
return(
    <header className={s.header}>
  <img src='https://www.conagrabrands.com/sites/g/files/qyyrlu371/files/conagra-logo-tm.png'/>
  <div className={s.loginBlock}>
    {props.isAuth? props.login
    :<NavLink to={"/login"}>
      Login
    </NavLink>}
  </div>
</header>
)    
}

export default Header   // to be able to use this component around we have to share it, we can do this with export.