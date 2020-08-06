// libs
import React from 'react';
// components
import IconNextList from '../../Atoms/IconNextList';
import IconPreList from '../../Atoms/IconPreList';
// others
import './style.scss';

interface PropsSliderIconPlaylist {
    onClickNext : Function,
    onClickPre : Function,
    // active : boolean,
    page : number,
    listPlay : Array<Object>,
}

const SliderIconPlaylist:React.FC<PropsSliderIconPlaylist> = (props) => {
    return(
        <div className='slider-icon-playlist-wraper'>
            <IconPreList page={props.page}  onClickPre={props.onClickPre} />
            <IconNextList page={props.page} listPlay={props.listPlay} onClickNext={props.onClickNext}/>
        </div>
    );
}

export default SliderIconPlaylist;