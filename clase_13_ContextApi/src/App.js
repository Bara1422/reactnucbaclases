import React, { useContext } from 'react';

import Header from './components/header/Header';
import SongList from './components/songsList/SongList';
import Lyric from './components/lyric/Lyric';

import { SongsContext } from './context/SongsContext';
import './App.css';

function App() {
  const { songsState } = useContext(SongsContext)
  return (<div className="App">
    <Header />
    <div className='container'>
      {
        songsState.loading ? (<p>Loading...</p>) : songsState.showLyric ? (<Lyric lyric={songsState.lyric} artist={songsState.artist} song={songsState.songTitle} />) : (<SongList />)
      }
    </div>
  </div>
  )
};

export default App;
