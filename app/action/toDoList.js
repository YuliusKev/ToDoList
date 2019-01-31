export const POST_TODOLIST = "POST_TODOLIST";

export const postTodolist = (id, post) => ({
  type: POST_TODOLIST,
  id,
  post
});
