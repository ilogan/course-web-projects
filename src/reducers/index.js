import { combineReducers } from "redux";

// Reducer
const songsReducer = () => {
  return [
    { title: "Smells Like Teen Spirit", duration: "4:05" },
    { title: "Macerana", duration: "2:30" },
    { title: "All Star", duration: "1:45" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSongs: selectedSongReducer
});
