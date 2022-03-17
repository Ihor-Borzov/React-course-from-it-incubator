import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/login';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import ProfileContainer from './components/Profile/ProfileInfo/ProfileContainer';
import Settings from './components/Settings/Settings';

import UsersContainer from './components/users/UsersContainer';

const App = (props) => {

  return (
    <div className="app-wrapper">
    <BrowserRouter>                              {/* so this is the way routing work - you have to wrap everything in BrowserRouter */}
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
      <Routes> 
        
      <Route path="/profile/*" element={<ProfileContainer />}  />    // this is the way to invoke some function, when url will match with path attribute 
        
      <Route path="/dialogs/*" element={<DialogsContainer  />} /> 

        <Route path="/news" element={<News/>}/>

        <Route path="/music" element={<Music/>}/>

        <Route path="/settings" element={<Settings/>}/>

        <Route path="/users" element={<UsersContainer/>}/>



        <Route path="/users"  element={<UsersContainer/>}        />


        <Route path="/login"  element={<Login/>}        />
        
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}



export default App;


/* path="/profile/:userId?/*" */


//https://i.pinimg.com/originals/fb/79/82/fb79829be36f2c9a82035e26182558e3.jpg