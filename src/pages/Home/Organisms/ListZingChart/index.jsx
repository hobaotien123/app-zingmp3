import React from 'react';
import './style.scss';
import ItemZingChart from '../../Atoms/ItemZingChart'
const ListZingChart = () => {
    let listZingChart = [
        {
            thumZingChart : 'https://via.placeholder.com/270x60'
        },
        {
            thumZingChart : 'https://via.placeholder.com/270x60'
        },
        {
            thumZingChart : 'https://via.placeholder.com/270x60'
        },
        {
            thumZingChart : 'https://via.placeholder.com/270x60'
        }
    ]
    return(
        <div className='list-zing-chart-wrapper'>    
        {   listZingChart.map(function(item,index){
                return <ItemZingChart item={item} key={index} /> 
            })
        }
        </div>
    );
}
export default ListZingChart;