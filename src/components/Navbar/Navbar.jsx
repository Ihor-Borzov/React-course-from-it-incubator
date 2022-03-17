import React from 'react';
import { Link } from 'react-router-dom';
import s from "./Navbar.module.css";  // classes is an object, (you may call it whatever you want in our case we will cal it "s") what contains names (what you gave in your component) of the classes as a key and real names of the classes (what react edit) as a value...





const Navbar = ()=>{
return(
  <nav className={s.nav} > {/*  // this is the way to get real className (created by react to be uniq) from your class(created by you in css component) */}
  <div className={s.item}><Link to="/profile" className= { navData => navData.isActive ? s.activeLink : s.notActiveLink } >Profile</Link></div>       {/* this is the way we add class active to our link */}
  <div className={`${s.item} ${s.another}`}><Link to="/dialogs" className= { navData => navData.isActive ? s.activeLink : s.notActiveLink } >Messages</Link></div>  {/* // this is the way to use two classNames */}
  <div className={s.item}><Link to="/news" className= { navData => navData.isActive ? s.activeLink : s.notActiveLink } >News</Link></div>
  <div className={s.item}><Link to="/music" className= { navData => navData.isActive ? s.activeLink : s.notActiveLink } >Music</Link></div>
  <div className={s.item}><Link to="/settings" className= { navData => navData.isActive ? s.activeLink : s.notActiveLink } >Settings</Link></div>
  <div className={s.item}><Link to="/users" className= { navData => navData.isActive ? s.activeLink : s.notActiveLink } >Users</Link></div>
  <div className={s.item}><Link to="/login" className= { navData => navData.isActive ? s.activeLink : s.notActiveLink } >LOGIN</Link></div>
</nav>
)    
}

export default Navbar;