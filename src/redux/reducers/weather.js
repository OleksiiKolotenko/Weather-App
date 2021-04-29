const initialState = {
  weather: {},
};

const weather = (state = initialState, action) => {
  switch (action.type) {
    case "SET_WEATHER":
      return {
        ...state,
        weather: action.payload,
      };
    default:
      return state;
  }
};

export default weather;
