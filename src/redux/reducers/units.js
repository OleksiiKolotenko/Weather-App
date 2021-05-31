const initialState = {
  units: "C",
};

const units = (state = initialState, action) => {
  switch (action.type) {
    case "SET_UNITS":
      return {
        ...state,
        unit: action.payload,
      };
    default:
      return state;
  }
};

export default units;
