import React from 'react';
import './style.scss';

import TitlePlayListen from '../../Atoms/TitlePlayListen';
import IconPlaylist from '../../Atoms/IconPlaylist';
import ItemTopicTop from '../../Molecules/ItemTopicTop';
import SliderIconPlaylist from '../../Molecules/SliderIconPlaylist'

interface PropsListTopicTop {
    arr : {
        titlePlayListen : string,
        listPlayListen : Array<Object>,
    },
}

const ListTopicTop:React.FC<PropsListTopicTop> = (props) => {    
    return(
        <div>
            <div className='title-icon-playlist'>
                <div className='all-titlei'>
                    <TitlePlayListen title={props.arr} />
                    <IconPlaylist />
                </div>
                {/* <TitlePlayListen title={props.arr} />
                <IconPlaylist /> */}
                <SliderIconPlaylist />
                <div className='listItemTopicTop'>
                     {
                         props.arr.listPlayListen.map((item:any,index:any) => {
                             return <ItemTopicTop item={item} key={index}/>
                         })
                     }
                </div>
            </div>
        </div>
    );
}
export default ListTopicTop;