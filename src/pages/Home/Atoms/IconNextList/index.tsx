import React from 'react';
import classNames from 'classnames';

import './style.scss';
import iconNextImg from '../../images/next.png';


interface PropsIconNextList{
    onClickNext : Function,
    // active : boolean,
    page : number,
    listPlay : Array<Object>,
}

const IconNextList:React.FC<PropsIconNextList> = (props) => {
    return(
        <img 
            onClick={() => props.onClickNext()}  
            className={classNames('icon-next-list',{ activeIconNext : props.page * 5 >= props.listPlay.length  } )} 
            src={iconNextImg}
        />
    );
}

export default IconNextList;