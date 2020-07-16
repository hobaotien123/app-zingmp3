import React from "react";
import './style.scss';
import searchImg from './search.png';
const SearchBoxHeaderTop = () => {
    return( 
        <div className='inputSearchBox'>
            <input placeholder="Nhập tên bài hát, ca sĩ hoặc mv..." />
            <a href='#'>
                <img src={searchImg} />
            </a>
        </div>
    );
}

export default SearchBoxHeaderTop;
