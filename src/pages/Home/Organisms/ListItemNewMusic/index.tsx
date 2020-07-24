import React from 'react';
import './style.scss';
import ItemNewMusic from '../../Atoms/ItemNewMusic';
const ListItemNewMusic:React.FC = () => {
    const listItemNewMusic = [
        { thumItemNewMusic : 'https://via.placeholder.com/390x200'},
        { thumItemNewMusic : 'https://via.placeholder.com/390x200'},
        { thumItemNewMusic : 'https://via.placeholder.com/390x200'} 
    ]
    return(
        <div className='list-item-newmusic-wrapper'>
            {
                listItemNewMusic.map(function(item,index){
                    return <ItemNewMusic item={item} key={index} />
                })
            }
        </div>
    );
}

export default ListItemNewMusic;