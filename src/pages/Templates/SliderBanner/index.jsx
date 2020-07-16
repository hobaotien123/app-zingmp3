import React from 'react';
import Slider from "react-slick";


import './style.scss'
import sliderImg from './huongly.jpg';
import ItemSliderImg from '../../Organisms/ItemSliderImg';
const SliderBanner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const ListSlider = [
        sliderImg,
        sliderImg,
        sliderImg
    ];
    return(
        <div className='sliderBanner'>
            <Slider {...settings}>
            {
                ListSlider.map(function(item,index){
                    return <ItemSliderImg item={item} key={index} />
                })
            }
            </Slider>
        </div>
    );
}
export default SliderBanner;