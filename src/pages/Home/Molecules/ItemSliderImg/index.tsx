// libs
import React from 'react';
// others
import './style.scss';

interface PropsItemSliderImg {
    item : string,
}

const ItemSliderImg:React.FC<PropsItemSliderImg> = (props) => {
    return( 
        <div>
            <img src={props.item} />
        </div>
    );
}
export default ItemSliderImg;