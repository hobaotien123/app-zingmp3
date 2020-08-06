// libs
import React from 'react';
import { Pagination } from 'antd';
// others
import './style.scss';

interface PropsSliderIconNewMusic{
    page : number,
    perPage : number,
    onChangeMusic : Function,
    arr : Array<Object>
}

const SliderIconNewMusic:React.FC<PropsSliderIconNewMusic> = (props) => {
    
    return(
        <div className='slider-icon-newmusic-wrapper'>
            <Pagination onChange={(page,pageSize) => props.onChangeMusic(page,pageSize)} current={props.page} defaultCurrent={1} total={props.arr.length} defaultPageSize={15} ></Pagination>
        </div>
    );
}

export default SliderIconNewMusic;