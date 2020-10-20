import React from "react";
import { MobxService } from "./mobxService";
import { reaction } from "mobx";

export default class TopBar extends React.Component<{}, {songCount: number}> {
  constructor(props) {
		super(props);

		this.state = {
			songCount: 0
    };
    
    this.onSongsUpdate = this.onSongsUpdate.bind(this);
  }
  
  componentDidMount() {
    reaction(
      ()  => MobxService.filteredSongCount,
      (filteredSongCount) => {
        console.log("TopBar received state");
        this.setState({songCount: filteredSongCount});
        //this.onSongsUpdate(filteredSongs);
      }
    )
    
  }

  private onSongsUpdate(songs) {
    console.log("onSongsUpdate - top bar");
    this.setState({songCount: songs.length});
  }

  private setHebrewFilter() {
    MobxService.setFilter("he");
  }
  private setEnglishilter() {
    MobxService.setFilter("en");
  }
  private removeFilter() {
    MobxService.setFilter("");
  }

  render() {   
      return (
        <div>
            songs {this.state.songCount}

          <div>
            <button onClick={this.setHebrewFilter}>Hebrew</button>
            <button onClick={this.setEnglishilter}>English</button>
            <button onClick={this.removeFilter}>All</button>
          </div>
        </div>
      ) 
  }
}
