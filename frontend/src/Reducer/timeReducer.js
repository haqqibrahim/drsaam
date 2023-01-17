const initialState = { timeLeft: 60, color: "white" };

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_TIME":
      return { ...state, timeLeft: action.timeLeft };
    case "CHANGE_COLOR":
      return { ...state, color: action.color };
    default:
      return state;
  }
};

export default timerReducer;
