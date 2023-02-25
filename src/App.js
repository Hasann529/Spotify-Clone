import { useEffect} from "react";
import "./App.css";
import Login from "./Component/Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Component/Player";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUser, setPlaylists} from "./Redux/Action";


const spotify = new SpotifyWebApi()

function App() {
   const dispatch = useDispatch()
   const {token } = useSelector(state => state.users)
  
   
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token){ 
      
     spotify.setAccessToken(_token)

     dispatch(setToken(_token));
     
     spotify.getMe().then(user => {
      dispatch(setUser(user))
       })

      spotify.getUserPlaylists().then((playlists)=>{
        dispatch(setPlaylists(playlists))
       }).catch(err=>console.log(err))
      }
     
      
    
  }, [token,dispatch]);

  return (
    <div className="app">
    {!token && <Login />}
    {token && <Player spotify={spotify} />}
    </div>
  );
}

export default App;
