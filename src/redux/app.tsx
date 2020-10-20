import React from 'react';
import store from "./store";
import SongList from './songList';
import TopBar from './topBar';
import songs from '../songs.json';

export default class AppWithReduxService extends React.Component {

  componentDidMount() {
    setTimeout(() => {
      let action = {
        type: "SET_SONGS",
        songs: songs
      }

        store.dispatch(action);
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