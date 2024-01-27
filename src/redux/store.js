import { configureStore } from '@reduxjs/toolkit';
import { expressionReducer } from './ExpressionsSlice';


const store = configureStore({
    reducer: {
        expressions: expressionReducer,
    }
});

export default store;