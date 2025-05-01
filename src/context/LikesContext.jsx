import { createContext, useContext, useReducer, useEffect } from "react";

const LikesContext = createContext();
const initialState = JSON.parse(localStorage.getItem("likeState")) || {};

function likesReducer(state, action) {
  switch (action.type) {
    case "LIKE":
      const updated = {
        ...state,
        [action.payload]: !state[action.payload],
      };
      localStorage.setItem("likeState", JSON.stringify(updated));
      return updated;
    default:
      return state;
  }
}

export function LikesProvider({ children }) {
  const [state, dispatch] = useReducer(likesReducer, initialState);

  useEffect(() => {
    localStorage.setItem("likeState", JSON.stringify(state));
  }, [state]);

  return (
    <LikesContext.Provider value={{ likes: state, toggleLike: dispatch }}>
      {children}
    </LikesContext.Provider>
  );
}

export function useLikes() {
  return useContext(LikesContext);
}
