import React from 'react';
import store from "./store";
import SongList from './songList';
import TopBar from './topBar';
import songs from '../songs.json';

export default class AppWithReduxService extends React.Component {

  componentDidMount() {
    setTimeout(() => {
        store.dispatch({
            type: "SET_SONGS",
            songs
        });
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