// export const addTodoAction = {
//   type: "todolist/addTodo",
//   payload: { id: 5, name: "learn Football", completed: false, priority: "Low" },
// };

// action creator

export const addTodo = (data) => {
  return { type: "todolist/addTodo", payload: data };
};

export const searchFilterChange = (text) => {
  return {
    type: "filters/searchFilterChange",
    payload: text,
  };
};
