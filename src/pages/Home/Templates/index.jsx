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

import listTopicTop from '../../../../src/mocks/listTopicTop';
import listNewSong from '../../../../src/mocks/listNewSong';
import listTopic from '../../../../src/mocks/listTopic';
import listMvHot from '../../../../src/mocks/listMvHot';
import listItemMix from '../../../../src/mocks/listItemMix';
import BoxFooter from '../Organisms/BoxFooter';
const Pages = () => {
    // const listTopicTop = {
    //     titlePlayListen : 'Playlist Nghe Gần Đây',
    //     listPlayListen : [
    //         {
    //             id:1,
    //             thumMusic : 'https://via.placeholder.com/200',
    //             titleMusic : 'Những bài hát hay nhất của quân AP',
    //             singerMusic : 'Quân AP'
    //         },
    //         {
    //             id:2,
    //             thumMusic : 'https://via.placeholder.com/200',
    //             titleMusic : 'Radio Chiếc Khăn Gió Ấm (EDM Version)'
    //         },
    //         {
    //             id:3,
    //             thumMusic : 'https://via.placeholder.com/200',
    //             titleMusic : 'Top 100 Nhạc Rap Việt Nam Hay Nhất',
    //             singerMusic : 'Hương Ly'
    //         },
    //         {
    //             id:4,
    //             thumMusic : 'https://via.placeholder.com/200',
    //             titleMusic : 'Những bài hát hay nhất của quân AP',
    //             singerMusic : 'Quân AP'
    //         },
    //         {
    //             id:5,
    //             thumMusic : 'https://via.placeholder.com/200',
    //             titleMusic : 'Những bài hát hay nhất của quân AP',
    //             singerMusic : 'Quân AP'
    //         }
            
    //     ]
    // }
    // const listNewSong = [
    //     { 
    //         thumNewSong : 'https://via.placeholder.com/50',
    //         titleSong :  'Yeu Em That Day',
    //         singerSong : 'Đình Tùng'
    //     },
    //     { 
    //         thumNewSong : 'https://via.placeholder.com/50',
    //         titleSong :  'Yeu Em That Day',
    //         singerSong : 'Đình Tùng'
    //     },
    //     { 
    //         thumNewSong : 'https://via.placeholder.com/50',
    //         titleSong :  'Yeu Em That Day',
    //         singerSong : 'Đình Tùng'
    //     },
    //     { 
    //         thumNewSong : 'https://via.placeholder.com/50',
    //         titleSong :  'Yeu Em That Day',
    //         singerSong : 'Đình Tùng'
    //     },
    //     { 
    //         thumNewSong : 'https://via.placeholder.com/50',
    //         titleSong :  'Yeu Em That Day',
    //         singerSong : 'Đình Tùng'
    //     }
    // ]
    // const listTopic = {
    //     titleTopic : 'Quốc gia',
    //     listThumTopic : [
    //         { thumTopic  : 'https://via.placeholder.com/200x60'},
    //         { thumTopic  : 'https://via.placeholder.com/200x60'},
    //         { thumTopic  : 'https://via.placeholder.com/200x60'},
    //         { thumTopic  : 'https://via.placeholder.com/200x60'},
    //         { thumTopic  : 'https://via.placeholder.com/200x60'}
    //     ]
    // }
    // const listMvHot = [
    //     { thumMvHot : 'https://via.placeholder.com/200x60', nameMvHot : 'Bigcityboi', singerMvHot : 'Binz,Phan Duy Anh' },
    //     { thumMvHot : 'https://via.placeholder.com/200x60', nameMvHot : 'Bigcityboi', singerMvHot : 'Binz,Phan Duy Anh' },
    //     { thumMvHot : 'https://via.placeholder.com/200x60', nameMvHot : 'Bigcityboi', singerMvHot : 'Binz,Phan Duy Anh' },
    //     { thumMvHot : 'https://via.placeholder.com/200x60', nameMvHot : 'Bigcityboi', singerMvHot : 'Binz,Phan Duy Anh' },
    // ]
    // const listItemMix =  {
        
    //     mixInfo :   {
    //                     thumMix : 'https://via.placeholder.com/200x200',
    //                     titleMix : 'Nhạc Sơn Tùng M-TP được nghe nhiều',
    //                     mixSub : 'Bạn đã quan tâm',
    //                     numberSongs : '30 bài hát'
    //                 },
    //     mixList : [
    //         { stt : '1' , nameSong : 'Như ngày hôm qua' },
    //         { stt : '1' , nameSong : 'Như ngày hôm qua' },
    //         { stt : '1' , nameSong : 'Như ngày hôm qua' },
    //         { stt : '1' , nameSong : 'Như ngày hôm qua' },
    //         { stt : '1' , nameSong : 'Như ngày hôm qua' },
    //         { stt : '1' , nameSong : 'Như ngày hôm qua' },
    //         { stt : '1' , nameSong : 'Như ngày hôm qua' },
    //         { stt : '1' , nameSong : 'Như ngày hôm qua' },
    //         { stt : '1' , nameSong : 'Như ngày hôm qua' },
    //         { stt : '1' , nameSong : 'Như ngày hôm qua' }
    //     ]
    // }
    return(
        <div>
            <Header />
            <SliderBanner />
            <ListTopicTop arr={listTopicTop} />
            <ListTopicTop arr={listTopicTop} />
            <ListTopicTop arr={listTopicTop} />
            <ListTopicTop arr={listTopicTop} />
            <ListTopicTop arr={listTopicTop} />
            <ListTopicTop arr={listTopicTop} />
            <SongRanking />
            <ListZingChart />
            <ListZingChoice />
            <ListTopicTop arr={listTopicTop} />
            <ListTopicTop arr={listTopicTop} />
            <ListTopicTop arr={listTopicTop} />
            <BoxTitleNewMusic />
            <ListItemNewMusic />
            <div className='grid-column-33'>
                <BoxListNewSong arr={listNewSong} />
                <BoxListNewSong arr={listNewSong} />
                <BoxListNewSong arr={listNewSong} />
            </div>
            <ListTopicTop arr={listTopicTop} />
            <ListTopicTop arr={listTopicTop} />
            <ListTopicTop arr={listTopicTop} />
            <BoxTopic arr={listTopic} />
            <BoxTopic arr={listTopic} />
            <BoxTopic arr={listTopic} />
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