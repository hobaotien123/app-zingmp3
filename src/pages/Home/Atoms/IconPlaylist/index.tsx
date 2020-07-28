import React from 'react';
import './style.scss';
import iconImgNext from './next.png'
import { RightOutlined } from '@ant-design/icons';

const IconPlaylist:React.FC = () => {
    return(
        <RightOutlined style={{fontSize : '20px',marginBottom : '15px'}} />
    );
}

export default IconPlaylist;