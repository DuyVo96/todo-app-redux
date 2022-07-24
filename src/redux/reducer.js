const initState = {
  filter: {
    search: "",
    status: "All",
    priority: [],
  },

  todoList: [
    { id: 1, name: "learn Yoga", completed: false, priority: "Medium" },
    { id: 2, name: "learn Redux", completed: true, priority: "High" },
    { id: 3, name: "learn JavaScript", completed: false, priority: "Low" },
  ],
};

const rootReducer = (state = initState, action) => {
  console.log("state, action", state, action);
  // {
  //     type: 'todolist/addTodo',
  //     payload: { id: 5, name: "learn Football", completed: false, priority: "Low" }
  // }
  switch (action.type) {
    case "todolist/addTodo":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    default:
      return state;
  }
};

export default rootReducer;
