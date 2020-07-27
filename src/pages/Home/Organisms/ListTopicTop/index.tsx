import React, {useState} from 'react';

import './style.scss';
import TitlePlayListen from '../../Atoms/TitlePlayListen';
import IconPlaylist from '../../Atoms/IconPlaylist';
import ItemTopicTop from '../../Molecules/ItemTopicTop';
import SliderIconPlaylist from '../../Molecules/SliderIconPlaylist'

interface PropsListTopicTop {
    arr : {
        titlePlayListen : string,
        listPlayListen : Array<Object>
    },
}

const ListTopicTop:React.FC<PropsListTopicTop> = (props) => {
    const [page,setPage]  = useState(1);
    // const [active,isActive] = useState(false);
    let perPage = 5;
    let start = ( page - 1 ) * perPage;
    let end = page * perPage;
    let listPlay = props.arr.listPlayListen;
    const increase = () => {
        if(end >= listPlay.length){
            return;
        }
        // isActive(true)
        setPage(page + 1)
    }
    const decrease = () => {
        // if(end < 11){
        //     isActive(false)
        // }
        if(end < 6){
            return;
        }
        setPage(page-1)
    }
    return(
        <div>
            <div className='title-icon-playlist'>
                <div className='all-title'>
                    <TitlePlayListen title={props.arr} />
                    <IconPlaylist />
                </div>
                <SliderIconPlaylist page={page} listPlay={listPlay} onClickNext={increase} onClickPre={decrease} />
            </div>
            <div className='listItemTopicTop'>
                    {
                        listPlay.slice(start,end).map((item:any,index:any) => {
                            return <ItemTopicTop item={item} key={index}/>
                        })
                    }     
            </div>
        </div>
    );
}
export default ListTopicTop;