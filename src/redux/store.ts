import { createStore, } from 'redux';

const initialState = {
    songs: [],
    filteredSongs: [],
    filteredSongCount: 0
}
const songsReducer = (state = initialState, action: any) => {
    if (action.type == "SET_SONGS") {
        let songs = action.songs;
        return {songs, filteredSongs: songs, filteredSongCount: songs.length}; 
    } else if (action.type == "SET_FILTER") {
        let language = action.language;
        let songs = state.songs;
        let filteredSongs = songs;
        if (language === "he") {
            filteredSongs = songs.filter(a => a.lang === "he")
        } else if (language === "en") {
            filteredSongs = songs.filter(a => a.lang === "en")
        }
        return {songs, filteredSongs, filteredSongCount: filteredSongs.length}; 
    }
    return state;
}

const store = createStore(songsReducer);

export default store;