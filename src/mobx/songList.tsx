import React from "react";
import { MobxService } from "./mobxService";
import { reaction } from "mobx";

export default class SongList extends React.Component<{}, {songs: any[]}> {
    constructor(props) {
		super(props);

		  this.state = {
          songs: []
      };
    }

    componentDidMount() {

      reaction(
        ()  => MobxService.filteredSongs,
        (filteredSongs) => {
          console.log("SongList received state");
          this.onSongsUpdate(filteredSongs);
        }
      )
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