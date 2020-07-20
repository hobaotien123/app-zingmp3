import React from 'react';
import './style.scss';

import TitlePlayListen from '../../Atoms/TitlePlayListen';
import IconPlaylist from '../../Atoms/IconPlaylist';
import ItemTopicTop from '../../Molecules/ItemTopicTop';
import SliderIconPlaylist from '../../Molecules/SliderIconPlaylist'
const ListTopicTop = (props) => {
    
    return(
        <div>
            <div className='title-icon-playlist'>
                <TitlePlayListen titlePlayListen={props.title} />
                <IconPlaylist />
                <SliderIconPlaylist />
            </div>
        </div>
    );
}
export default ListTopicTop;