import {createSlice} from "@reduxjs/toolkit";
import toast from 'react-hot-toast';


const expressionSlice = createSlice({
    name: 'expressions',
    initialState: {
        combinator: 'AND',
        expressionList: [],
        JsonData: {}
    },
    reducers:{
        addExpresssion: (state, action)=>{
            // console.log(action.payload)
            state.expressionList = [...state.expressionList, action.payload];
            toast.success('Expression Added');
        },
        deleteExpression: (state, action)=>{
            const deleteId = action.payload;
            const newList = state.expressionList.filter(expression => expression.id !== deleteId);
            state.expressionList = newList;
            toast.success('Deleted Successfully !!');
        },
        setCombinator: (state, action)=>{
            state.combinator = action.payload;
        }
    }
});


//export actions
export const expressionActions = expressionSlice.actions;
//export reducers
export const expressionReducer = expressionSlice.reducer;