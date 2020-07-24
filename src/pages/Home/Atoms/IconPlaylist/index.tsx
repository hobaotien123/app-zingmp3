import React from 'react';
import './style.scss';
import iconImgNext from './next.png'
const IconPlaylist:React.FC = () => {
    return(
        <img className='icon-playlist' src={iconImgNext} alt="IconImg"/>
    );
}

export default IconPlaylist;