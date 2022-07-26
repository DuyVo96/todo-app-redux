// export const addTodoAction = {
//   type: "todolist/addTodo",
//   payload: { id: 5, name: "learn Football", completed: false, priority: "Low" },
// };

// action creator

export const addTodo = (data) => {
  return { type: "todolist/addTodo", payload: data };
};

export const toggleTodoStatus = (todoId) => {
  return { type: "todolist/toggleTodoStatus", payload: todoId };
};

export const searchFilterChange = (text) => {
  return {
    type: "filters/searchFilterChange",
    payload: text,
  };
};

export const statusFilterChange = (status) => {
  return {
    type: "filters/statusFilterChange",
    payload: status,
  };
};

export const priorityFilterChange = (priorities) => {
  return {
    type: "filters/prioritiesFilterChange",
    payload: priorities,
  };
};
