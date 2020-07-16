import React from 'react';
import './style.scss';
import ItemLink from '../../Organisms/ItemLink';
const HeaderMain = () => {
    const navLinkList = [
        { title : 'trang chủ', isVip : false},
        { title :'#zingchart',isVip : false},
        { title : 'mới phát hành',isVip : false},
        { title : 'top100',isVip : false},
        { title : 'chủ đề',isVip : false},
        { title : 'mv',isVip : false},
        { title : 'album',isVip : false},
        { title : 'nghệ sĩ',isVip : false},
        { title : 'nhạc cá nhân',isVip : false},
        { title : 'vip', isVip : true},
    ];
    return(
        <div className='headerMain'>
            {
                navLinkList.map(function(item,index){
                    return <ItemLink item={item} key={index}/>;
                })
            } 
       </div>
    );
}
export default HeaderMain;