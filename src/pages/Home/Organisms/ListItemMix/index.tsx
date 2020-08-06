// libs
import React from "react";
// components
import MixInfo from "../../Molecules/MixInfo";
import MixList from "../../Molecules/MixList";
// others
import "./style.scss";

interface ListItemMix {
  arr: {
    mixInfo: {
      thumMix: string;
      titleMix: string;
      mixSub: string;
      numberSongs: string;
    };
    mixList: Array<Item>;
  };
}
type Item = {
  stt: string;
  nameSong: string;
};

const ListItemMix: React.FC<ListItemMix> = (props) => (
  <div className="list-item-mix-wrapper">
    <MixInfo info={props.arr} />
    <div className="list-right-mix-wrapper">
      {props.arr.mixList.map((item: Item, index: number) => (
        <MixList item={item} num={index + 1} key={index} />
      ))}
    </div>
  </div>
);

export default ListItemMix;
