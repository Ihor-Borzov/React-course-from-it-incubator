import axios from "axios";

 /* we can create example - (exemplyar) of an axious */
const instance = axios.create({
    withCredentials:true,
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    headers: {"API-KEY":"f36a6a26-6367-4d7a-9af1-d75a40668f7f"}
});



/* here we created an object which will be containing all the needed axios requests from the Users component  */
export const usersAPI = {  
  
getUsers : (currentPage =1, pageSize=6)=>{
    return(
       instance.get(`users?page=${currentPage}&count=${pageSize}`,     /* now we do request from our instance which is predeterminated */
       ).then((response)=>{
           return (
               response.data
           )})
   
   
    )
   },


follow:(userId)=>{
 return(   instance.post(`follow/${userId}`))
},



unfollow:(userId)=>{
    return(
        instance.delete(`follow/${userId}`)
        )
},

getProfile:(userId)=>{
    console.warn("obsolete method. Please use profileAPI object")
    return( profileAPI.getUser(userId)

 
    )
} 
}




export const profileAPI={
    getUser:(userId)=>{
    return(
        instance.get(`profile/ ${userId}`)
        .then((response)=>{
            return(response.data)})
    )
},


getStatus:(userId)=>{
return(
    instance.get(`profile/status/ ${userId}`)
)
},

updateStatus:(status)=>{
    return(
        instance.put(`profile/status/`, {status:status})
    )
}
}












export const authAPI = {
me:()=>{return(
    instance.get("auth/me")
)}


}





/* here we start working with promises */