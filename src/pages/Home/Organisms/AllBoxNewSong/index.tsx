import { Spin,Alert } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useEventListNewSong from '../../../../hooks/useEventListNewSong';
import { AppState } from '../../../../reducers';
import BoxListNewSong from '../BoxListNewSong';
import BoxTitleNewMusic from '../BoxTitleNewMusic';
import ListItemNewMusic from '../ListItemNewMusic';
import './style.scss';
import { addlistNewSong,fetchData } from '../../../../actions/addlistNewSong';
import axios from 'axios';

const AllBoxNewSong = () => {
    const dispatch = useDispatch();
    const  { list : listNewSong } = useSelector((state:AppState) => state.listSong);
    const { loading } = useSelector((state:AppState) => state.listSong );
    const { err } = useSelector((state:AppState) => state.listSong );
    const [page,setPage]  = useState(1);
    useEffect( () => { 
        dispatch(fetchData());
            // const url = 'http://localhost:3000/listNewSong';
            // axios.get(url)
            // .then(res => {
            //     dispatch(getData(res.data));
            // }).catch(err => console.log(err));
    },[]);


    const pgDown = "PageDown";
    const pgUp = "PageUp"
    let perPage = 15;
    let start = ( page - 1 ) * perPage;
    let end = page * perPage;
    let pageStart = 1;
    let pageEnd = Math.ceil(listNewSong.length/perPage);
    const handler = useCallback(
        (e) => {
            switch(e.code){
                case pgUp : 
                    e.preventDefault();
                    end >= listNewSong.length || setPage(page + 1);
                    e.shiftKey === true && setPage(pageEnd)
                    break;
                case pgDown :
                    e.preventDefault();
                    end <= perPage || setPage(page - 1);
                    e.shiftKey === true && setPage(pageStart);
                    break;
            }

          // Update coordinates

            // if(e.keyCode === 34){
            //     e.preventDefault();
            //     if(end >= listNewSong.length){
            //         return;
            //     }
            //     setPage(page + 1)
            // }
            // if(e.keyCode === 33){
            //     e.preventDefault();
            //     if(end <= perPage){
            //         return;
            //     }
            //     setPage(page - 1)
            // }

            // Shift + PgDn

            // if(e.shiftKey === true && e.keyCode === 34){
            //     let pageEnd = Math.ceil(listNewSong.length/perPage);
            //     setPage(pageEnd);
            // }

            // Shift + PgUp 

            // if(e.shiftKey === true && e.keyCode === 33){
            //     let pageStart = 1;
            //     setPage(pageStart);
            // }
        },
        [page,listNewSong]
    );
    useEventListNewSong('keydown', handler);

    const onChangeMusic = (pageOnChange:any) => {
        setPage(pageOnChange);
    }

    return <div className='all-box-new-song-wrapper'>
        <BoxTitleNewMusic onChangeMusic={onChangeMusic} arr={listNewSong}  page={page} perPage={perPage} />
        <ListItemNewMusic />
        {
           loading === true ? <Spin /> : err == true || listNewSong.length === 0 ? <Alert message="Không có dữ liệu" type="error" /> : <BoxListNewSong start={start} end={end} arr={listNewSong} />
        }
    </div>
}

export default AllBoxNewSong;