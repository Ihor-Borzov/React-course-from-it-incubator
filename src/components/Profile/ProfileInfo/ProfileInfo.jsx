import React from 'react';
import userPhoto from '../../../assets/images/user.jpg' 
import Preloader from '../../common/preloader/Preloader';
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus"


const ProfileInfo = (props) => {
    /* this is the way we prevent jsx to render when we have not enough data */
if(!props.profile){
    return(
        <Preloader/>
    )
}

    return (
        <div >

            <div>
                <img src="https://images.moviesanywhere.com/abe382d486edde3c74c469210c7b27ae/98fd2ad0-1513-461a-af1f-f9647b348954.png?r=2x1&w=300" />
            </div>

            <div className={s.descriptionBlock}>
              
                  <img className={s.profilePick} src= {props.profile.photos.large != null ? props.profile.photos.large :userPhoto } ></img>
                  
                  
                  <img className={s.isLokkingForWork} src={props.profile.lookingForAJob ?
                  "https://perfectstrangersofnyc.com/wp-content/uploads/2018/02/moving-to-nyc-without-a-job.jpg"
                : "https://i.natgeofe.com/k/d987f7b2-1895-4978-9216-3f365ea51a34/ladybug-daisy_4x3.jpg"
                }></img>

<div>  {props.profile.aboutMe}  </div>
<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                </div>

        </div>
    )
}

export default ProfileInfo;
