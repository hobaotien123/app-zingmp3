// libs
import React from 'react';
// others
import './style.scss';
interface ItemZingChart{
   item : {
      thumZingChart : string
   }
}

const ItemZingChart:React.FC<ItemZingChart> = (props) => {
   return <img src={props.item.thumZingChart} alt='imgZingChart' />
}

export default ItemZingChart;