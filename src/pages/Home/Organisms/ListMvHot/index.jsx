import React from 'react';
import './style.scss';
import ItemMvHot from '../../Molecules/ItemMvHot';

const ListMvHot = (props) => {
    return(
        <div className='list-mv-hot-wrapper'>
            {
                props.arr.map(function(item,index){
                    return <ItemMvHot item={item} key={index}/>
                })
            }
        </div>
    );
}

export default ListMvHot;