import React from "react";
import store from "./store";

export default class SongList extends React.Component<{}, {songs: any[]}> {
    constructor(props) {
		super(props);

      this.state = {
          songs: []
      };    
    }

    componentDidMount() {
        store.subscribe(() => {
            let state = store.getState();
            console.log("SongList received state");
            this.onSongsUpdate(state.filteredSongs);
        });
    }
    
      private onSongsUpdate(songs) {
        console.log("onSongsUpdate - song list");
        this.setState({songs});
      }

    render() {   
        return (
          <div>
              {this.state.songs.map((song, index) => {
                return (
                    <div key={index}>
                        <span>{song.name}, </span>
                        <span>{song.singer}</span>
                    </div>
                )
              })}
          </div>
        ) 
    }
}