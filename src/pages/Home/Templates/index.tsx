import React from "react";
import BannerMvHot from "../Atoms/BannerMvHot";
import SongRanking from "../Atoms/SongRanking";
import listItemMix from "../mocks/listItemMix";
import listMvHot from "../mocks/listMvHot";
import listTopic from "../mocks/listTopic";
import listTopic1 from "../mocks/listTopic1";
import listTopic100 from "../mocks/listTopic100";
import listTopic2 from "../mocks/listTopic2";
import listTopicCoffe from "../mocks/listTopicCoffe";
import listTopicHipHop from "../mocks/listTopicHipHop";
import listTopicMyMix from "../mocks/listTopicMyMix";
import listTopicRap from "../mocks/listTopicRap";
import listTopicToday from "../mocks/listTopicToday";
import listTopicTop from "../mocks/listTopicTop";
import listTopicYear from "../mocks/listTopicYear";
import AllBoxNewSong from "../Organisms/AllBoxNewSong";
import BoxFooter from "../Organisms/BoxFooter";
import BoxTopic from "../Organisms/BoxTopic";
import Header from "../Organisms/Header";
import ListItemMix from "../Organisms/ListItemMix";
import ListMvHot from "../Organisms/ListMvHot";
import ListTopicTop from "../Organisms/ListTopicTop";
import ListZingChart from "../Organisms/ListZingChart";
import ListZingChoice from "../Organisms/ListZingChoice";
import SliderBanner from "../Organisms/SliderBanner";
import TestPlayMusic from "../Organisms/TestPlayMusic";
import "./style.scss";

const Pages: React.FC = () => (
  <div>
    <Header />
    <SliderBanner />
    <ListTopicTop arr={listTopicTop} />
    <ListTopicTop arr={listTopicToday} />
    <ListTopicTop arr={listTopicMyMix} />
    <ListTopicTop arr={listTopicYear} />
    <ListTopicTop arr={listTopicRap} />
    <ListTopicTop arr={listTopicCoffe} />
    <SongRanking />
    <ListZingChart />
    <ListZingChoice />
    <ListTopicTop arr={listTopic100} />
    <ListTopicTop arr={listTopicHipHop} />
    <ListTopicTop arr={listTopicTop} />
    <AllBoxNewSong />
    <ListTopicTop arr={listTopicTop} />
    <ListTopicTop arr={listTopicTop} />
    <ListTopicTop arr={listTopicTop} />
    <BoxTopic arr={listTopic} />
    <BoxTopic arr={listTopic1} />
    <BoxTopic arr={listTopic2} />
    <div className="box-all-mv-hot">
      <BannerMvHot />
      <ListMvHot arr={listMvHot} />
    </div>
    <ListItemMix arr={listItemMix} />
    <ListItemMix arr={listItemMix} />
    <ListItemMix arr={listItemMix} />
    <BoxFooter />
    <TestPlayMusic />
  </div>
);
export default Pages;
