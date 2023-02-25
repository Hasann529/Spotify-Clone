import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './Header'
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SongRow from './SongRow';
import { setPlaylist, setItem,setArtist } from '../../Redux/Action';

const Body = ({spotify}) => {
    const {current_playlist, playlists} = useSelector(state=>state.users)
    const dispatch = useDispatch()
 
    useEffect(()=>{
      
      if(playlists.length !== 0){
      
   //    dispatch(setItem(playlists.items[0]))
     //   dispatch(setArtist((track.artists.map(artist =>artist.name).join(", "))))

        const stuff = playlists.items[0].tracks.href.split('/');
        const id = stuff[stuff.length-2];
        spotify.getPlaylist(id).then((playlist)=>{
             dispatch(setPlaylist(playlist))
             dispatch(setItem(playlist.tracks.items[0].track))
             dispatch(setArtist((playlist.tracks.items[0].track.artists.map(artist =>artist.name).join(", "))))
             })
            
        }
    },[playlists,dispatch,spotify])

  return (
    <div className='body'>
      <Header spotify={spotify} />
      <div className='body__info'>
      { current_playlist?.images[0]?.url && <img src={current_playlist.images[0].url} alt='disLogo' /> }
      <div className='bodyinfo-text'>
          <strong>PLAYLIST</strong>
           { current_playlist &&  <h2>{current_playlist.name}</h2> }
         {  current_playlist && <p>{current_playlist.description}</p>  }
      </div> 
      </div>
      <div className='body-icons'>
       <PlayCircleFilledIcon className='play' />
       <FavoriteBorderIcon className='fav'/>
       <MoreHorizIcon className='horizontal'/>
      </div>
      <div className='body-songs'>
         { current_playlist  &&
          current_playlist.tracks.items.map((item,index) => (
            <SongRow track={item.track} key={index} />
          ))
         }
      </div>
    </div>
  )
}

export default Body
