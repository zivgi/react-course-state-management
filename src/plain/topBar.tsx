import React from "react";
import { PlainService } from "./plainService";


export default class TopBar extends React.Component<{}, {songCount: number}> {
  constructor(props) {
		super(props);

		this.state = {
			songCount: 0
    };
    
    this.onSongsUpdate = this.onSongsUpdate.bind(this);
  }
  
  componentDidMount() {
    PlainService.setCallback(this.onSongsUpdate);
  }

  private onSongsUpdate(songs) {
    console.log("onSongsUpdate - top bar");
    this.setState({songCount: songs.length});
  }

  private setHebrewFilter() {
    PlainService.setFilter("he");
  }
  private setEnglishilter() {
    PlainService.setFilter("en");
  }
  private removeFilter() {
    PlainService.setFilter("");
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
