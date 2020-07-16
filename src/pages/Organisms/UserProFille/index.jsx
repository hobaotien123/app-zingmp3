import React from 'react';
import './style.scss';
import iconUpload from './upload.png';
import iconUser from './user.png';
import iconNotification from './notification.png';
import ItemUserProfile from '../../Molecules/ItemUserProfile';
const userProfileListItem = [
    iconUpload,
    iconNotification,
    iconUser
];
const UserProFile = () => {
    return(
        <div className='user-profile'>
            {
                userProfileListItem.map(function(item,index){
                   return <ItemUserProfile key={index} item={item} />;
                })
            }
        </div>
    );
}
export default UserProFile;