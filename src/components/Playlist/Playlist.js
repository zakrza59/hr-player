import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
import back from '../../icons/arrows-back.png';
import './Playlist.css'

const Playlist = (props) => {
  return (
    <div className="Playlist">
      <div className="Playlist-top">
        <div className="Circle" onClick={props.goTo}>
          <img src={back} alt="back" />
        </div>
        <p>Playlist</p>
      </div>
      <div className="Content">
      <div className="Sidebar-left"></div>
        <div className="Playlist-bottom">
          <Scrollbars style={{ width: 312, height: 384 }}>
            {props.children}
          </Scrollbars>
        </div>
        <div className="Sidebar-right"></div>
      </div>
      <div className="Footer"></div>
    </div>
  )
}

export default Playlist;