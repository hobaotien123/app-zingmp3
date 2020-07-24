import React from 'react';
// import 'antd/dist/antd.css';
// import { Carousel } from 'antd';

import './style.scss'
import sliderImg from './huongly.jpg';
import ItemSliderImg from '../../Molecules/ItemSliderImg';
const SliderBanner:React.FC = () => {
    const listSlider = [
        sliderImg
    ];
    return(
            
                <div className='slider-banner-wrapper'>
                    {
                        listSlider.map(function(item,index){
                            return <ItemSliderImg item={item} key={index} />
                        })
                    }
                </div>

    );
}
export default SliderBanner;