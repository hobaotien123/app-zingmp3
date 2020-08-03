import React from 'react';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';

import './style.scss'
import sliderImg from './huongly.jpg';
import sliderImg1 from '../../images/slider1.jpg';
import sliderImg2 from '../../images/slider2.jpg';
import sliderImg3 from '../../images/slider3.jpg';

import ItemSliderImg from '../../Molecules/ItemSliderImg';
const SliderBanner:React.FC = () => {
    const listSlider = [
        sliderImg,
        sliderImg1,
        sliderImg2,
        sliderImg3,
    ];
    return(
            
                <div className='slider-banner-wrapper'>
                    <Carousel >
                        {
                            listSlider.map(function(item,index){
                                return <ItemSliderImg item={item} key={index} />
                            })
                        }
                    </Carousel>
                </div>
    );
}
export default SliderBanner;