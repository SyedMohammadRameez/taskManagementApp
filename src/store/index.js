import { createStore } from "redux";
import { actions } from "./actions";

const initState = {
  name: "Rizwan Khan",
  tasks: [],
};

const rootReducer = (state = initState, action) => {
  console.log({ action });
  switch (action.type) {
    case actions.ADD_NEW_TASK: {
      return {
        ...state,
        tasks: [...state.tasks, action.data],
      };
    }
  }
  return state;
};

const store = createStore(rootReducer);

export default store;
