// libs
import React from 'react';
// others
import './style.scss';

interface PropsMixInfo {
    info : {
        mixInfo : {
            thumMix : string,
            titleMix : string,
            mixSub : string,
            numberSongs : string,
        }
    }
}

const MixInfo:React.FC<PropsMixInfo> = (props) => {
    return(
        <div className='mix-info-wrapper'>
            <img src={props.info.mixInfo.thumMix} />
            <div className='mix-info-right'>
                <h4>{props.info.mixInfo.titleMix}</h4>
                <h6>{props.info.mixInfo.mixSub}</h6>
                <span>{props.info.mixInfo.numberSongs}</span>
            </div>
        </div>
    );
}

export default MixInfo;