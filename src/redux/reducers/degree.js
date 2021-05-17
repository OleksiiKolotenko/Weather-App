const initialState = {
  degree: 0,
};

const degree = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DEGREE":
      return {
        ...state,
        degree: action.payload,
      };
    default:
      return state;
  }
};

export default degree;
