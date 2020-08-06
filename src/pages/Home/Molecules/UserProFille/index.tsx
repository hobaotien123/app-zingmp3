// libs
import React from 'react';
// components
import ItemUserProfile from '../../Atoms/ItemUserProfile';
// others
import './style.scss';
import iconUpload from './upload.png';
import iconUser from './user.png';
import iconNotification from './notification.png';
const userProfileListItem = [
    iconUpload,
    iconNotification,
    iconUser
];
const UserProFile:React.FC = () => {
    return(
        <div className='user-profile-wrapper'>
            {
                userProfileListItem.map(function(item,index){
                   return <ItemUserProfile key={index} item={item} />;
                })
            }
        </div>
    );
}
export default UserProFile;