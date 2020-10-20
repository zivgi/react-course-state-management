import React from 'react';
import SongList from './songList';
import TopBar from './topBar';
import songs from '../songs.json';
import { PlainService } from './plainService';

export default  class AppWithPlainService extends React.Component {

    componentDidMount() {
      setTimeout(() => {
        PlainService.setSongs(songs);
      }, 2000);
    }
    
    render() {
      return (
      <div className="App">
        <TopBar></TopBar>
        <SongList></SongList>
      </div>
      )
    }
  }