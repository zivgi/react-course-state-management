import React from "react";
import store from "./store";

export default class TopBar extends React.Component<{}, {songCount: number}> {
  constructor(props) {
		super(props);

		this.state = {
			songCount: 0
    };
    
    this.onSongsUpdate = this.onSongsUpdate.bind(this);
  }
  
  componentDidMount() {
    //PlainService.setCallback(this.onSongsUpdate);
    store.subscribe(() => {
        let state = store.getState();
        console.log("TopBar received state");
        this.onSongsUpdate(state.filteredSongs);

        //this.setState({songCount: state.filteredSongCount});
    });

  }

  private onSongsUpdate(songs) {
    console.log("onSongsUpdate - top bar");
    this.setState({songCount: songs.length});
  }

  private setHebrewFilter() {
    store.dispatch({
        type: "SET_FILTER",
        language: "he"
    });
  }
  private setEnglishilter() {
    store.dispatch({
        type: "SET_FILTER",
        language: "en"
    });
  }
  private removeFilter() {
    store.dispatch({
        type: "SET_FILTER",
        language: ""
    });
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
