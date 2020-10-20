import React from "react";
import { PlainService } from "./plainService";

export default class SongList extends React.Component<{}, {songs: any[]}> {
    constructor(props) {
		super(props);

		this.state = {
            songs: []
        };
    
        this.onSongsUpdate = this.onSongsUpdate.bind(this);
    }

    componentDidMount() {
        PlainService.subscribe(this.onSongsUpdate);
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