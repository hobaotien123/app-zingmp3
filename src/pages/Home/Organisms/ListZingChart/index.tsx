// libs
import React from 'react';
// components
import ItemZingChart from '../../Atoms/ItemZingChart';
// others
import './style.scss';
const ListZingChart:React.FC = () => {
    let listZingChart = [
        {
            thumZingChart : '//static-zmp3.zadn.vn/skins/zmp3-v5.2/images/song-vn-2x.jpg'
        },
        {
            thumZingChart : '//static-zmp3.zadn.vn/skins/zmp3-v5.2/images/mv-vn-2x.jpg'
        },
        {
            thumZingChart : '//static-zmp3.zadn.vn/skins/zmp3-v5.2/images/web_song_usuk.png'
        },
        {
            thumZingChart : '//static-zmp3.zadn.vn/skins/zmp3-v5.2/images/web_song_kpop.png'
        }
    ]
    return(
        <div className='list-zing-chart-wrapper'>    
        {   
            listZingChart.map((item,index) => {
                return <ItemZingChart item={item} key={index} /> 
            })
        }
        </div>
    );
}
export default ListZingChart;