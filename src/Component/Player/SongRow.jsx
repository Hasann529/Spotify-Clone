import React from 'react'
import { useDispatch } from 'react-redux'
import { setArtist, setItem, setPlaying } from '../../Redux/Action'

const SongRow = ({track}) => {
    const dispatch = useDispatch()

    const handleSetItem = (track) =>{
        dispatch(setPlaying(true))
        dispatch(setItem(track))
        dispatch(setArtist((track.artists.map(artist =>artist.name).join(", "))))
    }

  return (
    <div className='song-row' onClick={()=>handleSetItem(track)}>
   
       <img src={track.album.images[0].url} alt='song-album'/>
       <div className='song-row-info'>
          <p className='track-name'>{track.name}</p>
          <p>
            {track.artists.map(artist =>artist.name).join(", ")} - {" "} {track.album.name}
          </p>
       </div> 
    </div>
  )
}

export default SongRow
