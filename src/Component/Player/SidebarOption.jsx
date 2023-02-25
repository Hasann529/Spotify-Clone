import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPlaylist } from "../../Redux/Action";

const SidebarOption = ({spotify, Icon, title }) => {
  const { playlists } = useSelector(state=>state.users)
  const dispatch = useDispatch()

  const playlistClick = (title)=>{
        playlists.items.forEach(item => {
          if(item.name===title){
          const stuff = item.tracks.href.split('/');
          const id = stuff[stuff.length-2];
          spotify.getPlaylist(id).then(playlist=>{
            dispatch(setPlaylist(playlist))
          })
   } })
  }


  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{title}</h4> : <h6 onClick={()=>(playlistClick(title))}>{title}</h6>}
    </div>
  );
};

export default SidebarOption;
