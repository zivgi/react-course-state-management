export default class PlainServiceImpl {
    private _songs;
    private _filteredSongs;

    public setSongs(songs) {
        this._songs = songs;
        this._filteredSongs = songs;
        
        this.notifyCallbacks(songs);
    }

    public setFilter(language) {
        if (language === "he") {
            this._filteredSongs = this._songs.filter(song => song.lang === "he")
        } else if (language === "en") {
            this._filteredSongs = this._songs.filter(a => a.lang === "en")
        } else {
            this._filteredSongs = this._songs;
        }
        this.notifyCallbacks(this._filteredSongs);
    }

    private _callbacks = []; 
    public subscribe(callback) {
        this._callbacks.push(callback);
    }

    public unsubscribe(callback) {
        // Remove from _callbacks array
    }

    private notifyCallbacks(songs) {
        this._callbacks.forEach(callback => {
            callback(songs);
        });
    }
}

const PlainService = new PlainServiceImpl();
export { PlainService };