import React from 'react';
import { MobxService } from "./mobxService";
import SongList from './songList';
import TopBar from './topBar';
import songs from '../songs.json';

export default class AppWithMobx extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      MobxService.songs = songs;
        
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