import React from "react";
import { PlainService as store } from "./plainService";


export default class TopBar extends React.Component<{}, {songCount: number}> {
  constructor(props) {
		super(props);

		this.state = {
			songCount: 0
    };
    
    this.onSongsUpdate = this.onSongsUpdate.bind(this);
  }
  
  componentDidMount() {
    store.subscribe(this.onSongsUpdate);
  }

  private onSongsUpdate(songs) {
    console.log("onSongsUpdate - top bar");
    this.setState({songCount: songs.length});
  }

  private setHebrewFilter() {
    store.setFilter("he");
  }
  private setEnglishilter() {
    store.setFilter("en");
  }
  private removeFilter() {
    store.setFilter("");
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
