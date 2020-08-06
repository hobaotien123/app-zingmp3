// libs
import React from 'react';
// components
import ItemZingChoice from '../../Atoms/ItemZingChoice';
// others
import './style.scss';
const ListZingChoice:React.FC = () => {
    const listZingChoice = [
        { thumZingChoice :  'https://via.placeholder.com/380x120'},
        { thumZingChoice :  'https://via.placeholder.com/380x120'},
        { thumZingChoice :  'https://via.placeholder.com/380x120'}
    ]
    return(
        <div className='list-zing-choice-wrapper'>
            {
                listZingChoice.map((item,index) => {
                    return <ItemZingChoice item={item} key={index} />
                })
            }
        </div>
    );
}

export default ListZingChoice;