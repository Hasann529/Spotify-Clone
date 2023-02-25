

export const setUser = (user) =>{
         return{
            type:'SET_USER',
            payload:user
         }
}
export const setToken = (token) =>{
    return{
       type:'SET_TOKEN',
       payload:token
    }
}
export const setPlaylists = (playlist) =>{
   return{
      type:'SET_PLAYLISTS',
      payload:playlist
   }
}
export const setPlaylist = (response) =>{
   return{
      type:'SET_PLAYLIST',
      payload:response
   }
}
export const setItem = (item) =>{
   return{
      type:'SET_ITEM',
      payload:item
   }
}
export const setPlaying = (bool) =>{
   return{
      type:'SET_PLAYING',
      payload:bool
   }
}
export const setArtist = (artist) =>{
   return{
      type:'SET_ARTIST',
      payload:artist
   }
}