import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Post from './components/Profile/MyPosts/Post/Post';


//========================================================================================


let postsData =[ 
  { id:1,  message:'Hi, how are you', likesCount:12},
    {id:2, message:'it is my first post', likesCount:11},
]

let dialogsData =[ 
  { id:1, name:'Dimych'}, 
    {id:2,name:'Endry'},
    {id:3,name:'Sveta'},
    {id:4,name:'Sasha'},
    {id:5,name:'Victor'},
    {id:6,name:'Valera'},
  ]

    let messagesData =[ 
      { id:1,  message:'Hi'},
        {id:2, message:'How is your It camasutra'},
        {id:3, message:'Yo'},
        {id:4, message:'Yo'},
        {id:5, message:'Yo'},
      ]



//=======================================================================================

ReactDOM.render(
  <React.StrictMode>
    <App posts ={postsData} dialogs={dialogsData}  messages={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
