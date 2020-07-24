import React from 'react';
import './style.scss';
import ItemMvHot from '../../Molecules/ItemMvHot';

interface PropsListMvHot{
    arr : Array<Object>,
}


const ListMvHot:React.FC<PropsListMvHot> = (props) => {
    return(
        <div className='list-mv-hot-wrapper'>
            {
                props.arr.map((item:any,index:any) => {
                    return <ItemMvHot item={item} key={index}/>
                })
            }
        </div>
    );
}

export default ListMvHot;