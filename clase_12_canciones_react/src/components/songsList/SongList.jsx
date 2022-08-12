import React from 'react';
import Song from '../song/Song'

import './song-list.css'



const SongList = ({songs, displayLyric, fetchSongs}) => {
  return (
    <>
      <ul className='songs'>
        {songs?.data.map((song) => (
          <Song key={song.id} song={song} displayLyric={displayLyric}/>
          ))}
      </ul>
      <div className='container centered'>
        {
          songs?.prev ? (<button className='btn' onClick={()=> fetchSongs(`https://cors-anywhere.herokuapp.com/${songs.prev}`)}>Anterior</button>) : ('')
        }
        {
          songs?.next ? (
            <button className='btn' onClick={()=> fetchSongs(`https://cors-anywhere.herokuapp.com/${songs.next}`)}>Siguiente</button>
          ) : ('')
        }
      </div>
    </>
  )
}

export default SongList