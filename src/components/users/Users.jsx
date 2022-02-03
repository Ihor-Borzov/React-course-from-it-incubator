import * as axios from "axios"
import React from "react"
import styles from './users.module.css'
import userPhoto from '../../assets/images/user.jpg'    /* this is the way we imported a picture */


class Users extends React.Component {

constructor(props){
    super(props);    // first of all let's send props to parent's component (React.Component) constructor method

    /*then we can do server request, because constructor invokes only when component first time born, and each next rerender only method render() invokes   */
alert("new");
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
        
            this.props.setUsers(response.data.items)})
        }





    render(){
        return <div>
        <button onClick={this.getUsers}>get users</button>
        <span>bamboleilo</span>
{this.props.users.map(u=> <div key={u.id}>              {/*we simply built a function with the help of map we are saing - we want to map through our users array, and each objects should build his own div element with everything what is inside */}
    <span>
        <div>
            <img src={u.photos.small != null ? u.photos.small :userPhoto} className={styles.usersPhoto}/>       {/* HERE is another trinarnye virazenie */}
            </div>
        <div>
            {u.followed
            ? <button onClick={()=>{this.props.unFollow(u.id)}} >  Unfollow  </button>
            : <button onClick={()=>{this.props.follow(u.id)}} >  Follow  </button>}
            
            </div>
    </span>

    <span>
        <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
        </span>
        <span>
        <div>{"u.location.country"}</div>
            <div>{"u.location.city"}</div>
       
        </span>
    </span>

    </div>) }

    </div>
    }
}


export default Users;

/* sequence */