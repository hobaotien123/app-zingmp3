// libs
import React from "react";
// components
import ItemMvHot from "../../Molecules/ItemMvHot";
// others
import "./style.scss";

interface PropsListMvHot {
  arr: Array<Item>;
}
type Item = {
  thumMvHot: string;
  nameMvHot: string;
  singerMvHot: string;
};

const ListMvHot: React.FC<PropsListMvHot> = (props) => (
  <div className="list-mv-hot-wrapper">
    {props.arr.map((item: Item, index: number) => (
      <ItemMvHot item={item} key={index} />
    ))}
  </div>
);

export default ListMvHot;
