import React, {useState,useCallback} from 'react';
import useEventListNewSong from '../../../../../src/hooks/useEventListNewSong';
import './style.scss';
import BoxItemNewSong from '../BoxItemNewSong';

interface BoxListNewSong {
    arr :  Array<Object>
}


const BoxListNewSong:React.FC<BoxListNewSong> = (props) => {
    const [page,setPage]  = useState(1);
    let perPage = 15;
    let start = ( page - 1 ) * perPage;
    let end = page * perPage;
    let listNewSong = props.arr;
    const handler = useCallback(
        (e) => {
          // Update coordinates
            if(e.keyCode === 34){
                e.preventDefault();
                if(end >= listNewSong.length){
                    return;
                }
                setPage(page + 1)
            }
            if(e.keyCode === 33){
                e.preventDefault();
                if(end <= perPage){
                    return;
                }
                setPage(page - 1)
            }
        },
        [page]
    );
    useEventListNewSong('keydown', handler);
    return(
        <div className='box-list-item-new-song-wrapper'>
            {
                props.arr.slice(start,end).map(function(item:any,index:any){
                    return <BoxItemNewSong  item={item} key={index}/>
                })
            }
        </div>
    );
}

export default BoxListNewSong;