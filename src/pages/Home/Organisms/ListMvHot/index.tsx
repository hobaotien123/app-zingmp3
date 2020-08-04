import React from 'react';
import './style.scss';
import ItemMvHot from '../../Molecules/ItemMvHot';

interface PropsListMvHot{
    arr : Array<Item>,
}
type Item = {
    thumMvHot: string;
    nameMvHot: string;
    singerMvHot: string;
}

const ListMvHot:React.FC<PropsListMvHot> = (props) => {
    return(
        <div className='list-mv-hot-wrapper'>
            {
                props.arr.map((item:Item,index:number) => {
                    return <ItemMvHot item={item} key={index}/>
                })
            }
        </div>
    );
}

export default ListMvHot;