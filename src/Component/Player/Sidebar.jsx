import React from 'react'
import SidebarOption from './SidebarOption'
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { useSelector } from 'react-redux';



const Sidebar = ({spotify}) => {
    const {playlists} = useSelector(state=> state.users)
    
  
     
  return (
    <div className='sidebar'>
      <img className='sidebar__logo' src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt='SIDEBAR_LOGO'/>
      <SidebarOption Icon={HomeIcon} title='Home' />
      <SidebarOption Icon={SearchIcon} title='Search' />
      <SidebarOption Icon={LibraryMusicIcon} title='Your Library' />
      <br />

      <strong className='sidebar__title'>PLAYLISTS</strong>
      <hr />
      <div className="playlist">
      {
        playlists?.items?.map((playlist) => (
        <SidebarOption spotify={spotify} title={playlist.name} key={playlist.id}/>
      ))}

      </div>
    
     
    </div>
  )
}

export default Sidebar
