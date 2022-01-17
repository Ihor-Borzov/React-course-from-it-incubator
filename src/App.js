import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';

const App = (props) => {

  return (
    <div className="app-wrapper">
    <BrowserRouter>                              {/* so this is the way routing work - you have to wrap everything in BrowserRouter */}
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
      <Routes> 
        
      <Route path="/profile" element={<Profile />}  />    // this is the way to invoke some function, when url will match with path attribute 
        
      <Route path="/dialogs/*" element={<DialogsContainer  />} /> 

        <Route path="/news" element={<News/>}/>

        <Route path="/music" element={<Music/>}/>

        <Route path="/settings" element={<Settings/>}/>







        
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}



export default App;





//https://i.pinimg.com/originals/fb/79/82/fb79829be36f2c9a82035e26182558e3.jpg