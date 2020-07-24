import React from 'react';
import './style.scss';
import IconNextList from '../../Atoms/IconNextList';
import IconPreList from '../../Atoms/IconPreList';
const SliderIconPlaylist:React.FC = () => {
    return(
        <div className='slider-icon-playlist-wraper'>
            <IconPreList />
            <IconNextList />
        </div>
    );
}

export default SliderIconPlaylist;