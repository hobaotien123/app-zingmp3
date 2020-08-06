// libs
import React from 'react';
// components
import ThumMvHot from '../../Atoms/ThumMvHot';
import NameMvHot from '../../Atoms/NameMvHot';
import SingerMvHot from '../../Atoms/SingerMvHot';
// others
import './style.scss';

interface PropsItemMvHot{
    item : {
        thumMvHot : string,
        nameMvHot : string,
        singerMvHot : string,
    }
}

const ItemMvHot:React.FC<PropsItemMvHot> = (props) => {
    return(
        <div className='item-mv-hot-wrapper'>
            <ThumMvHot item={props.item} />
            <NameMvHot item={props.item} />
            <SingerMvHot item={props.item} />
        </div>
    );
}

export default ItemMvHot;