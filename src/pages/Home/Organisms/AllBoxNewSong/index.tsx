import { Alert, Spin } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppState } from '../../../../reducers';
import { fetchData } from '../../actions/addlistNewSong';
import { pgDown, pgUp } from '../../constants/index.js';
import useEventListNewSong from '../../hooks/useEventListNewSong';
import BoxListNewSong from '../BoxListNewSong';
import BoxTitleNewMusic from '../BoxTitleNewMusic';
import ListItemNewMusic from '../ListItemNewMusic';
import './style.scss';

const AllBoxNewSong = () => {
    const dispatch = useDispatch();
    const  { list : listNewSong , loading , err } = useSelector((state:AppState) => state.listSong);
    const [page,setPage]  = useState(1);

    // call api get data
    useEffect( () => { 
        dispatch(fetchData());
    },[]);

    // pagination
    let perPage = 15;
    let start = ( page - 1 ) * perPage;
    let end = page * perPage;
    let pageStart = 1;
    let pageEnd = Math.ceil(listNewSong.length/perPage);
    const handler = useCallback(
        (e) => {
            // switch(e.code){
            //     case pgUp : 
            //         e.preventDefault();
            //         end >= listNewSong.length || setPage(page + 1);
            //         e.shiftKey === true && setPage(pageEnd)
            //         break;
            //     case pgDown :
            //         e.preventDefault();
            //         end <= perPage || setPage(page - 1);
            //         e.shiftKey === true && setPage(pageStart);
            //         break;
            // }
            switch(true){
                case e.shiftKey && pgUp === e.code :
                    e.preventDefault();
                    setPage(pageEnd);
                    break;
                case e.shiftKey && pgDown === e.code :
                    e.preventDefault();
                    setPage(pageStart);
                    break;
                case pgUp === e.code :
                    e.preventDefault();
                    end >= listNewSong.length || setPage(page + 1);
                    break;
                case pgDown === e.code : 
                    e.preventDefault();
                    end <= perPage || setPage(page - 1);
                    break;
            }
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
           loading === true ? <Spin /> 
           : err == true || listNewSong.length === 0 
           ? <Alert message="Không có dữ liệu" type="error" /> 
           : <BoxListNewSong start={start} end={end} arr={listNewSong} />
        }
    </div>
}

export default AllBoxNewSong;