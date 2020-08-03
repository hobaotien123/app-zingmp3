import React from "react";
import './style.scss';
import searchImg from './search.png';
const SearchBoxHeaderTop:React.FC = () => {
    return( 
        <div className='input-search-box-wrapper'>
            <form>
                <input placeholder="Nhập tên bài hát, ca sĩ hoặc mv..." />
                <a href='#'>
                    <img src={searchImg} />
                </a>
            </form>
        </div>
    );
}

export default SearchBoxHeaderTop;
