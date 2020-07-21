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
                <TitlePlayListen title={props.arr} />
                <IconPlaylist />
                <SliderIconPlaylist />
                <div className='listItemTopicTop'>
                     {
                         props.arr.listPlayListen.map((item,index) => {
                             return <ItemTopicTop item={item} key={index}/>
                         })
                     }
                </div>
            </div>
        </div>
    );
}
export default ListTopicTop;