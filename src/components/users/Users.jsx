import * as axios from "axios"
import React from "react"
import styles from './users.module.css'
import userPhoto from '../../assets/images/user.jpg'    /* this is the way we imported a picture */


class Users extends React.Component {
    
/* 
constructor(props){
    super(props);    
        }         WE DO NOT NEED CONSTRUCTOR ANYMORE, BECAUSE WE DO NOT DO ANYTHING EXTRA IN IT, cONSTRUCTOR WILL AUTOMATICALLY CREATE HIMSELF AND SEND HIS PROPS TO HIS SUPER*/


componentDidMount(){
        /* we changed quotes to be able to write with variables */
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
    
        this.props.setUsers(response.data.items)})
}


onPageChanged = (pageNumber)=>{
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
    .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount/100);  /* i divide on 100, because it retrieve to many users */
    })
}



    render(){
        let pagesCount = Math.ceil( this.props.totalUsersCount/this.props.pageSize)    /* math.ceil  rounds digit to a bigger integer */

let pages = []

for(let i=1; i<=pagesCount; i++){
pages.push(i);
}

        return <div> 
            <div className={styles.pages} >
                
                {pages.map(p=>{
                   return <span onClick={(e)=>{this.onPageChanged(p) }} className={this.props.currentPage === p && styles.selectedPage}>{`${p}. `}</span>    /* if this particular page from the array pages equals to the currentPage, then make this span className=... */
                })}

            </div>


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