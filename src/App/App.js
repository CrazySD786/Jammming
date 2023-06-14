import './App.css';
import Searchbar from '../Searchbar/Searchbar';
import SearchResult from '../SearchResult/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from "../Spotify";
import { useState } from 'react';


function App() {
  const [playlist, setPlaylist] = useState([]);
  const [tracklist, setTracklist] = useState([]);

  async function handleSearch(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const inputData = Object.fromEntries(formData.entries());
    const data = await Spotify.search(inputData.songName);
    setTracklist(data)
}

  async function savePlaylist(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const inputData = Object.fromEntries(formData.entries());
    const data = await Spotify.savePlaylist(inputData.playlistName, playlist.map(obj => obj.uri));
    console.log(data)
    setPlaylist([])

  }

  function onAdd(index) {
    if (!playlist.includes(tracklist[index])) {
      setPlaylist([...playlist, tracklist[index]])
    }
  }

  function onRemove(key) {
    setPlaylist(playlist.filter(track => track.id != key));
  }

  return (
    <>
      <header>
        <h1>Jammming</h1>
      </header>
      <div className='searchbar'>
        <Searchbar  onSubmit={handleSearch}/>
      </div>
      <div className='songs'>
        <SearchResult tracklist={tracklist} onAdd={onAdd}/>
        <Playlist playlist={playlist} onRemove={onRemove} savePlaylist={savePlaylist}/>
      </div>
    </>
  );
}

export default App;
