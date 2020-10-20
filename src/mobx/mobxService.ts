import { makeObservable, observable, computed, reaction, action } from "mobx";

export default class MobxServiceImpl {
    public songs = [];

    public get filteredSongs() {
        let tempFilteredSongs = this.songs;
        if (this.filter === "he") {
            tempFilteredSongs = this.songs.filter(a => a.lang === "he")
        } else if (this.filter === "en") {
            tempFilteredSongs = this.songs.filter(a => a.lang === "en")
        }   

        return tempFilteredSongs;
    }

    public get filteredSongCount() {
        return this.filteredSongs.length;
    }

    constructor() {
        makeObservable(this, {
            songs: observable,
            filter: observable,
            filteredSongs: computed,
            filteredSongCount: computed,
            setFilter: action
        })
    }
    
    public filter = "";

    public setFilter(language) {
        this.filter = language;
    }
}

const MobxService = new MobxServiceImpl();
export { MobxService };