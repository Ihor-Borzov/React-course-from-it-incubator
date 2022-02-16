import React from 'react'
import preLoaderGif from '../../../assets/images/loader.gif'


let Preloader = (props)=>{
return(
    <div style={{backgroundColor:'white'}}>
 <img src={preLoaderGif}></img>
    </div>
)
}



export default Preloader


