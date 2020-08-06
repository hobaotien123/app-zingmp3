// libs
import React, { useState } from "react";
// components
import TitlePlayListen from "../../Atoms/TitlePlayListen";
import IconPlaylist from "../../Atoms/IconPlaylist";
import ItemTopicTop from "../../Molecules/ItemTopicTop";
import SliderIconPlaylist from "../../Molecules/SliderIconPlaylist";
// others
import "./style.scss";

interface PropsListTopicTop {
  arr: {
    titlePlayListen: string;
    listPlayListen: Array<Item>;
  };
}
type Item = {
  id: number;
  thumMusic: string;
  titleMusic: string;
  singerMusic: { nameSinger: string }[];
};

const ListTopicTop: React.FC<PropsListTopicTop> = (props) => {
  const [page, setPage] = useState(1);
  // const [active,isActive] = useState(false);
  const perPage = 5;
  const start = (page - 1) * perPage;
  const end = page * perPage;
  const listPlay = props.arr.listPlayListen;
  const increase = () => {
    if (end >= listPlay.length) {
      return;
    }
    // isActive(true)
    setPage(page + 1);
  };
  const decrease = () => {
    // if(end < 11){
    //     isActive(false)
    // }
    if (end < 6) {
      return;
    }
    setPage(page - 1);
  };
  return (
    <div>
      <div className="title-icon-playlist">
        <div className="all-title">
          <TitlePlayListen title={props.arr} />
          <IconPlaylist />
        </div>
        <SliderIconPlaylist
          page={page}
          listPlay={listPlay}
          onClickNext={increase}
          onClickPre={decrease}
        />
      </div>
      <div className="listItemTopicTop">
        {listPlay.slice(start, end).map((item: Item, index: number) => (
          <ItemTopicTop item={item} key={index} />
        ))}
      </div>
    </div>
  );
};
export default ListTopicTop;
