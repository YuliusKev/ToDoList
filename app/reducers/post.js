import { POST_TODOLIST } from "../action/toDoList";

const initialState = {
  data: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_TODOLIST:
      if (state.data === null) {
        return {
          ...state,
          data: [
            {
              id: action.id,
              post: action.post
            }
          ]
        };
      } else {
        return {
          ...state,
          data: [...state.data, { id: action.id, post: action.post }]
        };
      }
    default:
      return state;
  }
};
