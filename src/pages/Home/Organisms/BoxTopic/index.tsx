// libs
import React from "react";
// components
import BoxThumTopic from "../../Molecules/BoxThumTopic";
import BoxTitleTopic from "../../Molecules/BoxTitleTopic";
// others
import "./style.scss";

interface PropsBoxTopic {
  arr: {
    titleTopic: string;
    listThumTopic: {thumTopic : string}[];
  };
}

const BoxTopic: React.FC<PropsBoxTopic> = (props) => (
  <div className="box-topic">
    <BoxTitleTopic title={props.arr.titleTopic} />
    <BoxThumTopic arr={props.arr} />
  </div>
);
export default BoxTopic;
