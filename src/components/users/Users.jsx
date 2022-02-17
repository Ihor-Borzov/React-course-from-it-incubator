import React from "react"
import styles from './users.module.css'
import userPhoto from '../../assets/images/user.jpg'    /* this is the way we imported a picture */



let Users = (props)=>{


    let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize)    /* math.ceil  rounds digit to a bigger integer */

    let pages = []
    
    for(let i=1; i<=pagesCount; i++){
    pages.push(i);
    }
    



return(
       
<div> 
<div className={styles.pages} >
    
    {pages.map(p=>{
       return <span onClick={(e)=>{props.onPageChanged(p) }} className={props.currentPage === p && styles.selectedPage}>{`${p}. `}</span>    /* if this particular page from the array pages equals to the currentPage, then make this span className=... */
    })}

</div>

{props.users.map(u=> <div key={u.id}>              {/*we simply built a function with the help of map we are saing - we want to map through our users array, and each objects should build his own div element with everything what is inside */}
<span>
<div>
<img src={u.photos.small != null ? u.photos.small :userPhoto} className={styles.usersPhoto}/>       {/* HERE is another trinarnye virazenie */}
</div>
<div>
{u.followed
? <button onClick={()=>{props.unfollow(u.id)}} >  Unfollow  </button>
: <button onClick={()=>{props.follow(u.id)}} >  Follow  </button>}

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

)

}

export default Users