import React from "react"
import styles from './users.module.css'

let Users = (props)=>{

    /* this is the way we prevent this function to run infinite loops */
    if(props.users.length===0){
    props.setUsers( [
        { id:1, photoUrl:"https://i.pinimg.com/550x/17/e2/4a/17e24aab881fe2950c6121d729b859a3.jpg", followed:false, fullName:"Dimitry", status:"I am a boss", location:{city:"Minsk", country:"belarus"}},
      { id:2,  photoUrl:"https://i.pinimg.com/550x/17/e2/4a/17e24aab881fe2950c6121d729b859a3.jpg", followed:true, fullName:"Sahsa", status:"I am a boss", location:{city:"Moscow", country:"Russia"}},
      { id:3,  photoUrl:"https://i.pinimg.com/550x/17/e2/4a/17e24aab881fe2950c6121d729b859a3.jpg", followed:false, fullName:"Andrew", status:"I am a boss", location:{city:"Kyiv", country:"Ucraine"}},
    ])}

    return <div>
{props.users.map(u=> <div key={u.id}>              {/*we simply built a function with the help of map we are saing - we want to map through our users array, and each objects should build his own div element with everything what is inside */}
    <span>
        <div>
            <img src={u.photoUrl} className={styles.usersPhoto}/>
            </div>
        <div>
            {u.followed
            ? <button onClick={()=>{props.unFollow(u.id)}} >  Unfollow  </button>
            : <button onClick={()=>{props.follow(u.id)}} >  Follow  </button>}
            
            </div>
    </span>

    <span>
        <span>
            <div>{u.fullName}</div>
            <div>{u.status}</div>
        </span>
        <span>
        <div>{u.location.country}</div>
            <div>{u.location.city}</div>
       
        </span>
    </span>

    </div>) }

    </div>
}

export default Users;

/* sequence */