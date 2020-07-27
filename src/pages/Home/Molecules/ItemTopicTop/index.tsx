import React from 'react';
import './style.scss';
import { Button, Tooltip } from 'antd';
import {PlayCircleOutlined, HeartOutlined, DashOutlined } from '@ant-design/icons';
interface PropsItemTopicTop {
    item :  {
                id : number,
                thumMusic : string,
                titleMusic : string,
                singerMusic : [
                    {nameSinger : string}
                ],
            }
}

const ItemTopicTop:React.FC<PropsItemTopicTop> = (props) => {
let { item } = props;
    return(
            <div className='itemTopicTop'>
                <div className='overlay-relative'>
                    <img src={item.thumMusic} />
                    <div className='overlay-img' >
                        <Button style={{backgroundColor : 'transparent', border : 'none'}}  type="primary" shape="circle" icon={<HeartOutlined style={{color : 'white', fontSize : '23px'}}  />}  />
                        <Button style={{backgroundColor : 'transparent', border : 'none'}} type="primary" shape="circle" icon={<PlayCircleOutlined className='playcircle-icon' style={{color : '#fff', fontSize : '55px',margin : '0px 15px'}}  />}  />
                        <Button style={{backgroundColor : 'transparent', border : 'none'}} type="primary" shape="circle" icon={<DashOutlined style={{color : 'white', fontSize : '23px'}}  />}  />
                    </div>
                </div>
                <h4>{item.titleMusic}</h4>
                { !item.singerMusic}
                {
                   item.singerMusic && item.singerMusic.map((name,index) => {
                        return(
                            index < item.singerMusic.length - 1 ? 
                                <span key={index}>{name.nameSinger},</span>
                                : <span key={index}>{name.nameSinger}</span>
                        );
                    })
                }
            </div>
    );
}
export default ItemTopicTop;