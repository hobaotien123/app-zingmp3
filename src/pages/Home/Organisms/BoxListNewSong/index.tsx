// libs
import React from 'react';
import { Alert } from 'antd';
// components
import BoxItemNewSong from '../BoxItemNewSong';
// other
import './style.scss';

interface BoxListNewSong {
    arr :  Array<Item>
    start : number,
    end : number,
    err : boolean,
}
type Item = {
    thumNewSong: string;
    titleSong: string;
    singerSong: string;
}


const BoxListNewSong:React.FC<BoxListNewSong> = (props) => {
    const { err, arr , start , end } = props
    return(
        <div className='box-list-item-new-song-wrapper'>
            {
                err === true || arr.length === 0 ? 
                <Alert message="Không có dữ liệu" type="error" />
                : arr.slice(start,end).map((item: Item,index: number) => {
                    return <BoxItemNewSong  item={item} key={index}/>
                })
            }
        </div>
    );
}

export default BoxListNewSong;