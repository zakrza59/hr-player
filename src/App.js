import React, { Component } from 'react';
import Player from './components/Player/Player';
import Playlist from './components/Playlist/Playlist';
import Song from './components/Playlist/Song';
import music from './music.json';
import './App.css';

class App extends Component {
  state = {
    isPlaying: false,
    music,
    songIndex: 0,
    nowSong: null,
    player: true
  }

  componentWillMount() {
    let i = this.state.songIndex;
    this.setState({
      nowSong: this.state.music[i]
    });
  }

  switcher = () => {
    const doesPlay = this.state.isPlaying;
    this.setState({
      isPlaying: !doesPlay,
    });
  }

  playOnSong() {
    if (!this.state.isPlaying) {
      this.setState({
        isPlaying: true
      })
    }
  }

  nextSong = () => {
    let l = this.state.music.length - 1;
    if (this.state.songIndex !== l) {
      this.setState({
        songIndex: this.state.songIndex + 1,
      });
      this.playOnSong();
    }
  }

  prevSong = () => {
    if (this.state.songIndex !== 0) {
      this.setState({
        songIndex: this.state.songIndex - 1,
      });
      this.playOnSong();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.songIndex !== prevState.songIndex) {
      this.setState({
        nowSong: this.state.music[this.state.songIndex]
      });
      console.log(this.state.songIndex);
    }
  }

  selectSong = (track) => {
    this.setState({
      nowSong: track,
      player: true
    })
    this.playOnSong();
  }

  goTo = () => {
    const notWhereIWantToBe = this.state.player;
    this.setState({
      player: !notWhereIWantToBe,
    });
  }


  render() {
    let player = null;
    let playlist = null;

    if (this.state.player) {
      player = <Player
        goTo={this.goTo}
        song={this.state.nowSong.songName}
        artist={this.state.nowSong.artist}
        isPlaying={this.state.isPlaying}
        clicked={this.switcher}
        nextSong={this.nextSong}
        prevSong={this.prevSong} />
    } else {
      playlist = <Playlist goTo={this.goTo}
      >
        {this.state.music.map((song, i) =>
          <Song
            selectSong={this.selectSong}
            track={song}
            song={song.songName}
            artist={song.artist}
            lenght={song.lenght}
            key={i} />
        )}
      </Playlist>
    }

    return (
      <div className="Flex-box">
        {player}
        {playlist}
      </div>
    );
  }
}

export default App;
