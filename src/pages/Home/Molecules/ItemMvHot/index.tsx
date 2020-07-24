import React from 'react';
import './style.scss';
import ThumMvHot from '../../Atoms/ThumMvHot';
import NameMvHot from '../../Atoms/NameMvHot';
import SingerMvHot from '../../Atoms/SingerMvHot';

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