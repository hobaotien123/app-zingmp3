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
import BoxListNewSong from '../Organisms/BoxListNewSong';
import BoxTopic from '../Organisms/BoxTopic';
import ThumTopic from '../Atoms/ThumTopic';
import BoxTitleTopic from '../Molecules/BoxTitleTopic';
import ListMvHot from '../Organisms/ListMvHot';
import BannerMvHot from '../Atoms/BannerMvHot';
import ListItemMix from '../Organisms/ListItemMix';
const Pages = () => {
    const listTopicTop = {
        titlePlayListen : 'Playlist Nghe Gần Đây',
        listPlayListen : [
            {
                id:1,
                thumMusic : 'https://via.placeholder.com/200',
                titleMusic : 'Những bài hát hay nhất của quân AP',
                singerMusic : 'Quân AP'
            },
            {
                id:2,
                thumMusic : 'https://via.placeholder.com/200',
                titleMusic : 'Radio Chiếc Khăn Gió Ấm (EDM Version)'
            },
            {
                id:3,
                thumMusic : 'https://via.placeholder.com/200',
                titleMusic : 'Top 100 Nhạc Rap Việt Nam Hay Nhất',
                singerMusic : 'Hương Ly'
            },
            {
                id:4,
                thumMusic : 'https://via.placeholder.com/200',
                titleMusic : 'Những bài hát hay nhất của quân AP',
                singerMusic : 'Quân AP'
            },
            {
                id:5,
                thumMusic : 'https://via.placeholder.com/200',
                titleMusic : 'Những bài hát hay nhất của quân AP',
                singerMusic : 'Quân AP'
            }
            
        ]
    }
    const listNewSong = [
        { 
            thumNewSong : 'https://via.placeholder.com/50',
            titleSong :  'Yeu Em That Day',
            singerSong : 'Đình Tùng'
        },
        { 
            thumNewSong : 'https://via.placeholder.com/50',
            titleSong :  'Yeu Em That Day',
            singerSong : 'Đình Tùng'
        },
        { 
            thumNewSong : 'https://via.placeholder.com/50',
            titleSong :  'Yeu Em That Day',
            singerSong : 'Đình Tùng'
        },
        { 
            thumNewSong : 'https://via.placeholder.com/50',
            titleSong :  'Yeu Em That Day',
            singerSong : 'Đình Tùng'
        },
        { 
            thumNewSong : 'https://via.placeholder.com/50',
            titleSong :  'Yeu Em That Day',
            singerSong : 'Đình Tùng'
        }
    ]
    const listTopic = {
        titleTopic : 'Quốc gia',
        listThumTopic : [
            { thumTopic  : 'https://via.placeholder.com/200x60'},
            { thumTopic  : 'https://via.placeholder.com/200x60'},
            { thumTopic  : 'https://via.placeholder.com/200x60'},
            { thumTopic  : 'https://via.placeholder.com/200x60'},
            { thumTopic  : 'https://via.placeholder.com/200x60'}
        ]
    }
    const listMvHot = [
        { thumMvHot : 'https://via.placeholder.com/200x60', nameMvHot : 'Bigcityboi', singerMvHot : 'Binz,Phan Duy Anh' },
        { thumMvHot : 'https://via.placeholder.com/200x60', nameMvHot : 'Bigcityboi', singerMvHot : 'Binz,Phan Duy Anh' },
        { thumMvHot : 'https://via.placeholder.com/200x60', nameMvHot : 'Bigcityboi', singerMvHot : 'Binz,Phan Duy Anh' },
        { thumMvHot : 'https://via.placeholder.com/200x60', nameMvHot : 'Bigcityboi', singerMvHot : 'Binz,Phan Duy Anh' },
    ]
    const listItemMix =  {
        
        mixInfo :   {
                        thumMix : 'https://via.placeholder.com/200x200',
                        titleMix : 'Nhạc Sơn Tùng M-TP được nghe nhiều',
                        mixSub : 'Bạn đã quan tâm',
                        numberSongs : '30 bài hát'
                    },
        mixList : [
            { stt : '1' , nameSong : 'Như ngày hôm qua' },
            { stt : '1' , nameSong : 'Như ngày hôm qua' },
            { stt : '1' , nameSong : 'Như ngày hôm qua' },
            { stt : '1' , nameSong : 'Như ngày hôm qua' },
            { stt : '1' , nameSong : 'Như ngày hôm qua' },
            { stt : '1' , nameSong : 'Như ngày hôm qua' },
            { stt : '1' , nameSong : 'Như ngày hôm qua' },
            { stt : '1' , nameSong : 'Như ngày hôm qua' },
            { stt : '1' , nameSong : 'Như ngày hôm qua' },
            { stt : '1' , nameSong : 'Như ngày hôm qua' }
        ]
    }
    return(
        <div>
            <Header />
            <SliderBanner />
            <ListTopicTop title={listTopicTop.titlePlayListen} />
            <div className='listItemTopicTop'>
            {
                listTopicTop.listPlayListen.map(function(item,index){
                    return <ItemTopicTop item={item} key={index}/>
                })
            }
            </div>
            <ListTopicTop title={listTopicTop.titlePlayListen} />
            <div className='listItemTopicTop'>
            {
                listTopicTop.listPlayListen.map(function(item,index){
                    return <ItemTopicTop item={item} key={index}/>
                })
            }
            </div>
            <ListTopicTop title={listTopicTop.titlePlayListen} />
            <div className='listItemTopicTop'>
            {
                listTopicTop.listPlayListen.map(function(item,index){
                    return <ItemTopicTop item={item} key={index}/>
                })
            }
            </div>
            <ListTopicTop title={listTopicTop.titlePlayListen} />
            <div className='listItemTopicTop'>
            {
                listTopicTop.listPlayListen.map(function(item,index){
                    return <ItemTopicTop item={item} key={index}/>
                })
            }
            </div>
            <ListTopicTop title={listTopicTop.titlePlayListen} />
            <div className='listItemTopicTop'>
            {
                listTopicTop.listPlayListen.map(function(item,index){
                    return <ItemTopicTop item={item} key={index}/>
                })
            }
            </div>
            <ListTopicTop title={listTopicTop.titlePlayListen} />
            <div className='listItemTopicTop'>
            {
                listTopicTop.listPlayListen.map(function(item,index){
                    return <ItemTopicTop item={item} key={index}/>
                })
            }
            </div>
            <SongRanking />
            <ListZingChart />
            <ListZingChoice />
            <ListTopicTop title={listTopicTop.titlePlayListen} />
            <div className='listItemTopicTop'>
            {
                listTopicTop.listPlayListen.map(function(item,index){
                    return <ItemTopicTop item={item} key={index}/>
                })
            }
            </div>
            <ListTopicTop title={listTopicTop.titlePlayListen} />
            <div className='listItemTopicTop'>
            {
                listTopicTop.listPlayListen.map(function(item,index){
                    return <ItemTopicTop item={item} key={index}/>
                })
            }
            </div>
            <ListTopicTop title={listTopicTop.titlePlayListen} />
            <div className='listItemTopicTop'>
            {
                listTopicTop.listPlayListen.map(function(item,index){
                    return <ItemTopicTop item={item} key={index}/>
                })
            }
            </div>
            <BoxTitleNewMusic />
            <ListItemNewMusic />
            <div className='grid-column-33'>
                <div className='box-list-item-new-song-wrapper'>
                    {
                        listNewSong.map(function(item,index){
                            return <BoxListNewSong item={item} key={index}/>
                        })
                    }
                </div>
                <div className='box-list-item-new-song-wrapper'>
                    {
                        listNewSong.map(function(item,index){
                            return <BoxListNewSong item={item} key={index}/>
                        })
                    }
                </div>
                <div className='box-list-item-new-song-wrapper'>
                    {
                        listNewSong.map(function(item,index){
                            return <BoxListNewSong item={item} key={index}/>
                        })
                    }
                </div>
            </div>
            <div className='listItemTopicTop'>
                {
                    listTopicTop.listPlayListen.map(function(item,index){
                        return <ItemTopicTop item={item} key={index}/>
                    })
                }
            </div>
            <ListTopicTop title={listTopicTop.titlePlayListen} />
            <div className='listItemTopicTop'>
            {
                listTopicTop.listPlayListen.map(function(item,index){
                    return <ItemTopicTop item={item} key={index}/>
                })
            }
            </div>
            <ListTopicTop title={listTopicTop.titlePlayListen} />
            <div className='listItemTopicTop'>
            {
                listTopicTop.listPlayListen.map(function(item,index){
                    return <ItemTopicTop item={item} key={index}/>
                })
            }
            </div>
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
        </div>
    );
}
export default Pages;