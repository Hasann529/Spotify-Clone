const initialState = {
  user: null,
  playlists: [],
  token:null,
  current_playlist:null,
  playing:false,
  item:null,
  artist:null,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_USER":
      return {
        ...state,
        user: payload,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: payload,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: payload,
      };

      case "SET_PLAYLIST":
      return {
        ...state,
        current_playlist: payload,
      };

      case "SET_ITEM":
      return {
        ...state,
        item: payload,
      };

      case "SET_PLAYING":
      return {
        ...state,
        playing : payload,
      };

      case "SET_ARTIST":
      return {
        ...state,
        artist : payload,
      };

    default:
      return state;
  }
};
