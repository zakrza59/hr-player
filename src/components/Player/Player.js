import React from 'react';
import repeat from '../../icons/arrows-repeat.png';
import shuffle from '../../icons/arrows-shuffle.png';
import refresh from '../../icons/arrows-refresh.png';
import menu from '../../icons/menu.png';
import share from '../../icons/share.png';
import heart from '../../icons/heart.png';
import next from '../../icons/next.png';
import prev from '../../icons/prev.png';
import play from '../../icons/play.png';
import pause from '../../icons/pause.png';

import './Player.css';

const Player = (props) => {
  const { isPlaying } = props
  let button = play;

  if (isPlaying) {
    button = pause;
  }

  return (
    <div className="Player">
      <div className="Player-top">
        <div className="Box-top">
          <div className="Arrow-box">
            <img src={repeat} alt="repeat" />
            <img src={shuffle} alt="shuffle" />
            <img src={refresh} alt="refresh" />
          </div>
          <img className="Menu-icon" src={menu} onClick={props.goTo} alt="menu" />
        </div>
        <div className="Box-bottom">
          <p>{props.artist}</p>
          <p>{props.song}</p>
        </div>
      </div>
      <div className="Player-bottom">
        <div className="Circle">
          <img src={share} alt="share" />
        </div>
        <div className="Navigation">
          <div className="Circle" onClick={props.prevSong}>
            <img src={prev} alt="prev" />
          </div>
          <div className="Timer">
            <div className="Circle" onClick={props.clicked} >
              <img src={button} alt="button" />
            </div>
          </div>
          <div className="Circle" onClick={props.nextSong}>
            <img src={next} alt="next" />
          </div>
        </div>
        <div className="Circle">
          <img src={heart} alt="heart" />
        </div>
      </div>
    </div>
  )
}

export default Player;