import React from 'react';
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