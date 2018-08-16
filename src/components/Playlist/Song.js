import React from 'react'
import share from '../../icons/share.png';
import heart from '../../icons/heart.png';
import './Song.css'

const Song = (props) => {
  return (
    <div className="Song" onClick={() => (props.selectSong(props.track))}>
      <div className="Track">
        <p className="Small">{props.lenght} | {props.artist}</p>
        <p className="Big">{props.song}</p>
      </div>
      <div className="Social">
        <img src={share} alt="share" />
        <img src={heart} alt="heart" />
      </div>
    </div>
  )
}

export default Song;