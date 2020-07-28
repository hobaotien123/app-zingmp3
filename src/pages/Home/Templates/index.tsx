import React from 'react';
import './style.scss';
import Header from '../Organisms/Header';
import SliderBanner from '../Organisms/SliderBanner';
import ListTopicTop from '../Organisms/ListTopicTop';
import ItemTopicTop from '../Molecules/ItemTopicTop';
import SongRanking from '../Atoms/SongRanking';
import ListZingChart from '../Organisms/ListZingChart';
import ListZingChoice from '../Organisms/ListZingChoice';
import BoxTitleNewMusic from '../Organisms/BoxTitleNewMusic';
import ListItemNewMusic from '../Organisms/ListItemNewMusic';
import BoxTopic from '../Organisms/BoxTopic';
import ThumTopic from '../Atoms/ThumTopic';
import BoxTitleTopic from '../Molecules/BoxTitleTopic';
import ListMvHot from '../Organisms/ListMvHot';
import BannerMvHot from '../Atoms/BannerMvHot';
import ListItemMix from '../Organisms/ListItemMix';
import BoxListNewSong from '../Organisms/BoxListNewSong';

import listTopicTop from '../../../mocks/listTopicTop';
import listTopicToday from '../../../mocks/listTopicToday';
import listTopicMyMix from '../../../mocks/listTopicMyMix';
import listTopicYear from '../../../mocks/listTopicYear';
import listTopicRap from '../../../mocks/listTopicRap';
import listTopicCoffe from '../../../mocks/listTopicCoffe';
import listTopic100 from '../../../mocks/listTopic100';
import listTopicHipHop from '../../../mocks/listTopicHipHop';
import listNewSong from '../../../mocks/listNewSong';
import listTopic from '../../../mocks/listTopic';
import listTopic1 from '../../../mocks/listTopic1';
import listTopic2 from '../../../mocks/listTopic2';
import listMvHot from '../../../mocks/listMvHot';
import listItemMix from '../../../mocks/listItemMix';
import BoxFooter from '../Organisms/BoxFooter';
const Pages: React.FC = () => {
    
    return(
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
            <BoxTitleNewMusic />
            <ListItemNewMusic />
            <BoxListNewSong arr={listNewSong} />
            
            <ListTopicTop arr={listTopicTop} />
            <ListTopicTop arr={listTopicTop} />
            <ListTopicTop arr={listTopicTop} />
            <BoxTopic arr={listTopic} />
            <BoxTopic arr={listTopic1} />
            <BoxTopic arr={listTopic2} />
            <div className='box-all-mv-hot'>
                <BannerMvHot />
                <ListMvHot arr={listMvHot}/>
            </div>
            <ListItemMix  arr={listItemMix} />
            <ListItemMix  arr={listItemMix} />
            <ListItemMix  arr={listItemMix} />
            <BoxFooter />
        </div>
    );
}
export default Pages;