import React from 'react';
import './style.scss';
import Slider from "react-slick";

const ItemSliderImg = (props) => {
    return(
        <img src={props.item} />
    );
}
export default ItemSliderImg;