import { createContext, useReducer, useEffect } from "react";

export const MyFriendAuthContext = createContext();

export const myFriendAuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { myFriend: action.payload };
    case "LOGOUT":
      return { myFriend: null };
    default:
      return state;
  }
};

export const MyFriendAuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(myFriendAuthReducer, {
    myFriend: null,
  });

  useEffect(() => {
    const myFriend = JSON.parse(localStorage.getItem("myFriend"));

    if (myFriend) {
      dispatch({ type: "LOGIN", payload: myFriend });
    }
  }, []);

  console.log("MyFriendAuthContext state:", state);

  return (
    <MyFriendAuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </MyFriendAuthContext.Provider>
  );
};
