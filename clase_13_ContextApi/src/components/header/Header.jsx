import React, {useState, useContext } from 'react'
import './header.css'
import {SongsContext} from '../../context/SongsContext'
import { fetchSongs } from "../../actions/songsActions";

const Header = () => {
  const {dispatch} = useContext(SongsContext)
  const [inputValue, setInputValue] = useState('')

  const formHandler = (e) => {
    e.preventDefault()
    dispatch((dispatch) => fetchSongs(dispatch, inputValue))
  }
  return (
    <header>
      <h1>Canciones Piolas</h1>
      <form id='form'>
        <input
         type="text"
          id='search'
           placeholder='Cancion o Artista...'
            value={inputValue} onChange={(e) => setInputValue(e.target.value)}
            />
        <button onClick={formHandler}>Buscar</button>
      </form>
    </header>
  )
}

export default Header