// libs
import React from 'react';
// components
import ItemLinkFooter from '../../Atoms/ItemLinkFooter';
// others
import './style.scss';

const ListLinkFooter:React.FC = () => {
    const listLinkFooter = [
        'Giới thiệu',
        'Liên hệ', 
        'Quảng cáo', 
        'Góp ý', 
        'Thoả thuận sử dụng'
    ]
    return(
        <div className='list-link-footer-wrapper'>
            {
                listLinkFooter.map((item,index) => {
                   return <ItemLinkFooter item={item} key={index} />
                })
            }
        </div>
    );
}

export default ListLinkFooter;