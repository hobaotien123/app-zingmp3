import React from 'react';
import classNames from 'classnames';

import './style.scss';
import iconPreImg from '../../../../images/back.png';

interface PropsIconPreList{
    onClickPre : Function,
    page : number,
}

const IconPreList:React.FC<PropsIconPreList> = (props) => {
    return(
        <img 
            onClick={() => props.onClickPre()} 
            className={classNames('icon-pre-list',{ activeIconPre : props.page > 1} )}
            src={iconPreImg} 
        />
    );
}

export default IconPreList;