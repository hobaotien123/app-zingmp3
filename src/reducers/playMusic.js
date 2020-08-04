const initialState = {
    play : false,
  };
  
  const playMusic = (state = initialState, action) => {
    switch (action.type) {
      case "PLAY_MUSIC": {
        return {
            play : true,
        };
      }
      default:
        return state;
    }
  };
  export default playMusic;
  