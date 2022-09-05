import { configureStore } from '@reduxjs/toolkit';

import todoReducer from './redux/todoslice'

export default configureStore({
	reducer: {
		todos: todoReducer,
	},
});