// libs
import React from 'react';
// others
import './style.scss';
const TestPlayMusic = () => {
    return(
        <div className='test-play-music-wrapper'>
            <audio controls>
                <source src="https://cdns-preview-1.dzcdn.net/stream/c-13039fed16a173733f227b0bec631034-12.mp3" type="audio/mpeg" />
            </audio>
        </div>
    );
}
export default TestPlayMusic;