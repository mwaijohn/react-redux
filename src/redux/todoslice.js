import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
	name: 'todos',
    //Next we add initial state
	initialState: [
		{ id: 1, title: 'todo1', completed: false },
		{ id: 2, title: 'todo2', completed: false },
		{ id: 3, title: 'todo3', completed: true },
		{ id: 4, title: 'todo4', completed: false },
		{ id: 5, title: 'todo5', completed: false },
	],
    // Now we add the reducers. The reducer responds to the action, takes the current state,
    // and creates new state based on the action payload.
    // The first one we are adding is the addTodo reducer
	reducers: {
        //When we add a reducer object like this,
        // the createSlice function creates actions based on the reducer names.
		addTodo: (state, action) => {
			const todo = {
				id: new Date(),
				title: action.payload.title,
				completed: false,
			};
			state.push(todo);
		},
		toggleComplete: (state, action) => {
			const index = state.findIndex((todo) => todo.id === action.payload.id);
			state[index].completed = action.payload.completed;
		},
		deleteTodo: (state, action) => {
			return state.filter((todo) => todo.id !== action.payload.id);
		},
	},
});

//So the todoSlice has created a bunch of actions for us based on our reducer names, 
//and we just use destructuring to get the addTodo action and export it
export const { addTodo,toggleComplete,deleteTodo } = todoSlice.actions;

//And we export the reducer so we can add it to our store
export default todoSlice.reducer;