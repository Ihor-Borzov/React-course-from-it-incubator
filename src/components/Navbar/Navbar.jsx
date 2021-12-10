import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Navbar.module.css";  // classes is an object, (you may call it whatever you want in our case we will cal it "s") what contains names (what you gave in your component) of the classes as a key and real names of the classes (what react edit) as a value...





const Navbar = ()=>{
return(
  <nav className={s.nav} > {/*  // this is the way to get real className (created by react to be uniq) from your class(created by you in css component) */}
  <div className={s.item}><NavLink to="/profile" className= { navData => navData.isActive ? s.active : s.item } >Profile</NavLink></div>       {/* this is the way we add class active to our link */}
  <div className={`${s.item} ${s.another}`}><NavLink to="/dialogs" className= { navData => navData.isActive ? s.active : s.item } >Messages</NavLink></div>  {/* // this is the way to use two classNames */}
  <div className={s.item}><NavLink to="/news" className= { navData => navData.isActive ? s.active : s.item } >News</NavLink></div>
  <div className={s.item}><NavLink to="/music" className= { navData => navData.isActive ? s.active : s.item } >Music</NavLink></div>
  <div className={s.item}><NavLink to="/settings" className= { navData => navData.isActive ? s.active : s.item } >Settings</NavLink></div>
</nav>
)    
}

export default Navbar;