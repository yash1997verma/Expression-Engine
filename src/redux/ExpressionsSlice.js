import {createSlice} from "@reduxjs/toolkit";
import toast from 'react-hot-toast';


const expressionSlice = createSlice({
    name: 'expressions',
    initialState: {
        expressionList: [1],
        JsonData: {}
    },
    reducers:{
        addExpresssion: (state, action)=>{

        }
    }
});


//export actions
export const expressionActions = expressionSlice.actions;
//export reducers
export const expressionReducer = expressionSlice.reducer;