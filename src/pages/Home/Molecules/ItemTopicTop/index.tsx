// libs
import React, { useState } from "react";
import {
  DashOutlined,
  HeartOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";
import { Button, message, Modal, Tooltip } from "antd";
// others
import "antd/dist/antd.css";
import "./style.scss";
interface PropsItemTopicTop {
  item: {
    id: string;
    thumMusic: string;
    titleMusic: string;
    singerMusic: { nameSinger: string }[];
  };
}

const ItemTopicTop: React.FC<PropsItemTopicTop> = (props) => {
  const [state, setState] = useState({ visible: false });
  const [like, setLike] = useState(false);
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
    message.success("Playlist đã được thêm vào Thư viện nhạc cá nhân", 1);
  };
  const warning = () => {
    message.warning("Playlist đã được xóa khỏi Thư viện nhạc cá nhân", 1);
  };

  const setLikeTrue = () => {
    setLike(true);
    success();
  };
  const setLikeFalse = () => {
    setLike(false);
    warning();
  };

  const { item } = props;
  return (
    <div className="itemTopicTop">
      <div className="overlay-relative">
        <img src={item.thumMusic} />
        <div className="overlay-img">
          {like === false && (
            <Tooltip title="Thêm vào Playlist">
              <Button className='ant-add-playlist'
                onClick={setLikeTrue}
                type="primary"
                shape="circle"
                icon={<HeartOutlined className='ant-icon-heart'/>}
              />
            </Tooltip>
          )}

          {like === true && (
            <Tooltip title="Xoá khỏi Playlist">
              <Button className='ant-remove-playlist'
                onClick={setLikeFalse}
                type="primary"
                shape="circle"
                icon={
                  <HeartOutlined className='ant-icon-remove-heart'/>
                }
              />
            </Tooltip>
          )}

          <Tooltip title="Play Music">
            <Button className='ant-play-music'
              onClick={showModal}
              type="primary"
              shape="circle"
              icon={
                <PlayCircleOutlined
                  style={{ margin: "0px", fontSize: "45px" }}
                />
              }
            />
          </Tooltip>
          <Button className='ant-dash-more'
            type="primary"
            shape="circle"
            icon={
              <DashOutlined className='ant-icon-dash'
              />
            }
          />

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
      {item.singerMusic.map((name, index) =>
        index < item.singerMusic.length - 1 ? (
          <span key={index}>{name.nameSinger},</span>
        ) : (
          <span key={index}>{name.nameSinger}</span>
        )
      )}
    </div>
  );
};
export default ItemTopicTop;
