import React from 'react'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import SkipPreviousIcon from "@mui/icons-material//SkipPrevious";
import SkipNextIcon from "@mui/icons-material//SkipNext";
import ShuffleIcon from "@mui/icons-material//Shuffle";
import RepeatIcon from "@mui/icons-material//Repeat";
import VolumeDownIcon from "@mui/icons-material//VolumeDown";
import PauseCircleFilledIcon from "@mui/icons-material//PauseCircleFilled";
import PlaylistPlayIcon from "@mui/icons-material//PlaylistPlay";
import Slider from "@mui/material/Slider";
import { useDispatch, useSelector } from 'react-redux';
import { setPlaying } from '../../Redux/Action';

const Footer = () => {

  const {item,artist,playing} = useSelector(state=>state.users)
  const dispatch = useDispatch()


  return (
    <div className='footer'>
      <div className="footer__left">
      <img src={item?.album.images[0].url} alt='song-logo' />
     <div>
        <p className='item'>{item?.name}</p>
        <p className='artist'>{artist}</p>
      </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className='shuffle' />
        <SkipPreviousIcon className='skip'/>
        {!playing ? <PlayCircleFilledIcon onClick={()=>dispatch(setPlaying(true))} className='play-btn' color='white' /> : <PauseCircleFilledIcon onClick={()=>dispatch(setPlaying(false))} className='play-btn' color='white' />}
        <SkipNextIcon className='skip' />
        <RepeatIcon className='repeat' />
      </div>
      <div className="footer__right">
        <PlaylistPlayIcon className='f-r-items' />
        <VolumeDownIcon className='f-r-items' />
        <Slider className='slider' size='small' aria-labelledby="continuous-slider" />
      </div>
    </div>
  )
}

export default Footer 
