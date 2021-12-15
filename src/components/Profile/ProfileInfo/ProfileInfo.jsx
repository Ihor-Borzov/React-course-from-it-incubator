import React from 'react';

import s from "./ProfileInfo.module.css";


const ProfileInfo = () => {
    return (
        <div >

            <div>
                <img src="https://images.moviesanywhere.com/abe382d486edde3c74c469210c7b27ae/98fd2ad0-1513-461a-af1f-f9647b348954.png?r=2x1&w=300" />
            </div>

            <div className={s.descriptionBlock}>ava + description</div>

        </div>
    )
}

export default ProfileInfo;