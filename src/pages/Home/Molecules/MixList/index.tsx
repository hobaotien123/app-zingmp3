 // libs
import React from 'react';
import { Button } from 'antd';
import { PlayCircleOutlined,AudioOutlined,EllipsisOutlined } from '@ant-design/icons';
// others
import './style.scss'


interface MixList{
    item : {
        stt : string,
        nameSong : string,
    },
    num : number,
}

const MixList:React.FC<MixList> = (props) => {
    return(
        <div className='mix-list-item-wrapper'>
            <p>{props.num}</p>
            <span>{props.item.nameSong}</span>
            <div className='hover-mix-item'>
                <Button style={{width : '20px',border : 'none',backgroundColor : 'transparent',textAlign: 'left'}} type="primary" shape="circle" icon={<PlayCircleOutlined style={{fontSize : '23px',color : '#fff', backgroundColor : '#2e2146', borderRadius : '50%' }} />} />
                <div className='icon-right'>
                    <Button style={{border : 'none',backgroundColor : 'transparent',marginRight : '8px'}} type="primary" shape="circle" icon={<AudioOutlined style={{fontSize : '20px', textAlign : 'right',color : '#2e2146' }} />} />
                    <Button style={{border : 'none',backgroundColor : 'transparent',marginRight : '8px'}} type="primary" shape="circle" icon={<EllipsisOutlined style={{fontSize : '20px', textAlign : 'right',color : '#2e2146'}} />} />
                </div>
            </div>
        </div>
        
    );
}
export default MixList;