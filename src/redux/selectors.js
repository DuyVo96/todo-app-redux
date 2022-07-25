import { createSelector } from "reselect";

export const searchTextSelector = (state) => state.filters.search;
// export const todoListSelector = (state) => state.todoList;

export const todoListSelector = (state) => {
  const todosRemaining = state.todoList.filter((todo) => {
    return todo.name.includes(state.filters.search);
  });

  return todosRemaining;
};

// reselect;
// export const todosRemainingSelector = createSelector(
//   searchTextSelector,
//   todoListSelector,
//   (todoList, searchText) => {
//     return todoList.filter((todo) => {
//       return todo.name.includes(searchText);
//     });
//   }
// );
