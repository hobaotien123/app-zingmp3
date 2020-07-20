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
                titleMusic : 'Những bài hát hay nhất của quân AP',
                singerMusic : 'Quân AP'
            },
            {
                id:3,
                thumMusic : 'https://via.placeholder.com/200',
                titleMusic : 'Những bài hát hay nhất của quân AP',
                singerMusic : 'Quân AP'
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
            {
                listNewSong.map(function(item,index){
                    return <BoxListNewSong item={item} key={index}/>
                })
            }
        </div>
    );
}
export default Pages;