import React, { useState } from 'react';
import './style.scss';
import 'antd/dist/antd.css';
import { message, Modal, Button, Space,Tooltip  } from 'antd';
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
const [state,setState] = useState({visible : false});
const [like,setLike] = useState(false);

    const showModal = () => {
        setState({
        visible: true,
        });
    };

    const hideModal = () => {
        setState({
        visible: false,
        });
    };

    const success = () => {
        message.success('Playlist đã được thêm vào Thư viện nhạc cá nhân' , 1);
    };
    const warning = () => {
        message.warning('Playlist đã được xóa khỏi Thư viện nhạc cá nhân', 1);
    };


    const setLikeTrue = () => {
        setLike(true);
        success();
    }
    const setLikeFalse = () => {
        setLike(false);
        warning();
    }

let { item } = props;
    return(
            <div className='itemTopicTop'>
                <div className='overlay-relative'>
                    <img src={item.thumMusic} />
                    <div className='overlay-img' >
                        {
                            like === false && 
                            <Tooltip title="Thêm vào Playlist">
                            <Button  onClick={setLikeTrue} style={{marginTop : '17px',width : '23px', backgroundColor : 'transparent', border : 'none'}}  type="primary" shape="circle" icon={<HeartOutlined style={{margin : '0px', color : 'white', fontSize : '23px'}}  />}  />
                            </Tooltip>
                        }
                        
                        {
                            like === true && 
                            <Tooltip title="Xoá khỏi Playlist">
                            <Button  onClick={setLikeFalse} style={{marginTop : '17px',width : '23px', backgroundColor : '#fff', border : 'none'}}  type="primary" shape="circle" icon={<HeartOutlined style={{margin : '0px',  borderRadius : "50%" ,color : 'black', fontSize : '23px'}}  />}  />
                            </Tooltip>
                        }
                        
                        <Tooltip title="Play Music">
                            <Button onClick={showModal} style={{width : '45px', margin : '0px 10px', border : 'none', backgroundColor : 'transparent'}} type="primary" shape="circle" icon={<PlayCircleOutlined style={{margin : '0px', fontSize : '45px'}} />} />
                        </Tooltip>
                        <Button  style={{marginTop : '17px',width : '23px', backgroundColor : 'transparent', border : 'none'}} type="primary" shape="circle" icon={<DashOutlined style={{margin : '0px', color : 'white', fontSize : '23px'}}  />}  />

                        <Modal
                        title="Modal"
                        visible={state.visible}
                        onOk={hideModal}
                        onCancel={hideModal}
                        okText="Confirm"
                        cancelText="Cancel"
                        >
                        <p>Bla bla ...</p>
                        <p>Bla bla ...</p>
                        <p>Bla bla ...</p>
                        </Modal>
                    </div>
                </div>
                <h4>{item.titleMusic}</h4>
                {
                    item.singerMusic && item.singerMusic.map((name,index) => {
                        return(
                            index < item.singerMusic.length - 1  
                            ?<span key={index}>{name.nameSinger},</span>
                            :<span key={index}>{name.nameSinger}</span>
                        );
                    })
                }
            </div>
    );
}
export default ItemTopicTop;