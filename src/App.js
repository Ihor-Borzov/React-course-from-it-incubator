import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';

const App = () => {
  return (
    <div className="app-wrapper">
    <BrowserRouter>                              {/* so this is the way routing work - you have to wrap everything in BrowserRouter */}
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
      <Routes>                                             {/* you have to wrap each Route component in the Routes tag*/}
        <Route path="/dialogs" element={<Dialogs/>} />            
        </Routes>
        <Routes> 
        <Route path="/profile" element={<Profile/>} />      {/* pay attention in the path we do not put dot at the start, only slash  */}
        </Routes>
        <Routes> 
        <Route path="/news" element={<News/>} />      {/* pay attention in the path we do not put dot at the start, only slash  */}
        </Routes>
        <Routes> 
        <Route path="/Music" element={<Music/>} />      {/* pay attention in the path we do not put dot at the start, only slash  */}
        </Routes>
        <Routes> 
        <Route path="/settings" element={<Settings/>} />      {/* pay attention in the path we do not put dot at the start, only slash  */}
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}



export default App;





//https://i.pinimg.com/originals/fb/79/82/fb79829be36f2c9a82035e26182558e3.jpg