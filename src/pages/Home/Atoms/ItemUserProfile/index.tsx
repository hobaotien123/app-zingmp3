import React from 'react';
interface PropsItemUserProfile{
    item : string,
}
const ItemUserProfile:React.FC<PropsItemUserProfile> = (props) => {
    return(
        <a className='user-propfile-wrapper' href='#'>
            <img src={props.item} />
        </a>
    );
}
export default ItemUserProfile;