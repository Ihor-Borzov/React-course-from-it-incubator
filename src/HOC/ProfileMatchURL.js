import React from 'react'
import { useMatch } from 'react-router-dom';

let urlMatch = (Component)=>{
    let ProfileMatch =(props)=>{
    let match = useMatch("/profile/:userId");
    return(
        <Component {...props} match={match}/>
    )

}
return ProfileMatch
}

export default urlMatch