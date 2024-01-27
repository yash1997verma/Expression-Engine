import {createSlice} from "@reduxjs/toolkit";
import toast from 'react-hot-toast';


//to get expected output in a JSON format
export const convertStateToJson = (expressionList, combinator) => {
      
    const rules = expressionList.map((expression) => ({
      key: expression.ruleType,
      output: {
        value: expression.value,
        operator: expression.operator,
        score: expression.score,
      },
    }));
    const result = {
        rules,
        combinator,
    };


    return result;

};

const expressionSlice = createSlice({
    name: 'expressions',
    initialState: {
        combinator: 'AND',
        expressionList: [],
        output: {}
    },
    reducers:{
        addExpresssion: (state, action)=>{
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
        },
        setOutput: (state, action)=>{
            state.output  = convertStateToJson(state.expressionList, state.combinator);
        }
    }
});


//export actions
export const expressionActions = expressionSlice.actions;
//export reducers
export const expressionReducer = expressionSlice.reducer;