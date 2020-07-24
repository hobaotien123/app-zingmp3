import React from 'react';
import './style.scss';
import ItemLinkFooter from '../../Atoms/ItemLinkFooter';

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