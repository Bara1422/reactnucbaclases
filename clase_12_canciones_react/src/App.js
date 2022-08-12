import React, { useState } from 'react';

import Header from './components/header/Header';
import SongList from './components/songsList/SongList';
import Lyric from './components/lyric/Lyric';

import useFetch from './hooks/useFetch';

import './App.css';

const API_URL = 'https://api.lyrics.ovh';

function App() {
  const [songsUrl, setSongsUrl] = useState('')
  const [artist, setArtist] = useState('')
  const [songTitle, setSongTitle] = useState('')
  const [songUrl, setSongUrl] = useState('')
  const [showLyric, setShowLyric] = useState(false)

  const { loading, data: songs, error } = useFetch(songsUrl)

  const { loading: load, data: lyric, error2 } = useFetch(songUrl)

  const handlerLyric = (artist, song) => {
    setArtist(artist)
    setSongTitle(song)
    setSongUrl(`${API_URL}/v1/${artist}/${song}`)
    setShowLyric(true)
  }


  return (<div className="App">
    <Header fetchSongs={setSongsUrl} showLyric={setShowLyric} />
    <div className='container'>
      {!showLyric && (<SongList songs={songs} displayLyric={handlerLyric} fetchSongs={setSongsUrl}/>)}
      {showLyric && lyric?.lyrics ? (<Lyric lyric={lyric.lyrics} artist={artist} songTitle={songTitle} />) : null}
    </div>
  </div>
  )
};

export default App;
