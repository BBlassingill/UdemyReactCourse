// Action creator
export const selectSong = song => {
	// Return an action that gets stored on the store
	// All actions have to have a type property
	return {
		type: "SONG_SELECTED",
		payload: song
	};
};
