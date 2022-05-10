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
import {initializeApp} from "./Redux/app-reducer"

import UsersContainer from './components/users/UsersContainer';
import { connect } from 'react-redux';
import Preloader from './components/common/preloader/Preloader';

class App extends React.Component {

  componentDidMount=()=>{
    //this.props.getAuthUserData()
    this.props.initializeApp()
  }

  render=()=>{

    if(!this.props.initialized){   /* show preloader if we are not  */
      return <Preloader/>
    }



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
}


const mapStateToProps = (state)=>{
  return({
    initialized: state.app.initialized
  })
}



export default connect (mapStateToProps,{initializeApp})(App) 

/* exporting this will be the same as exporting app.js straight
, because it is export default: does not matter how they will call your component when they will receive it - matters what you export.
and i our case we export connect, what will render App.js. and connect will just provide some component wrapper for us */
//export default App;

