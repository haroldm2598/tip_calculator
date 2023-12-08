import { configureStore } from '@reduxjs/toolkit';
import tipReducer from './tip/tipSlice';

export const store = configureStore({
	reducer: {
		tipCalculator: tipReducer
	}
});
