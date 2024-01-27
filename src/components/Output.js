import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { expressionActions } from '../redux/ExpressionsSlice';
// import ReactJson from 'react-json-view';


function Output({toggleOutput}) {
  const dispatch = useDispatch();
  //get expression list
  const expressionList = useSelector(state=>state.expressions.expressionList);
  //get combinator
  const combinator = useSelector(state=>state.expressions.combinator);
  //get output
  const output = useSelector(state=>state.expressions.output)

  //set data in output
  useEffect(()=>{
    dispatch(expressionActions.setOutput());
  },[expressionList, combinator]);
    
  return (
    <div style={{ width: '300px', height: '500px', overflowX: 'auto' }} >

      <svg
        onClick={toggleOutput}
        style={{
            position: 'absolute',
            right: '2',
            top: '2',
            width: '25px',
            height: '25px',
            cursor: 'pointer',
        }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
        >
        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>

      
      
      {/* <ReactJson 
        style={{
          width: '100%', 
          height: '500px',
          overflowX: 'auto',
          scrollbarWidth: 'thin', 
          scrollbarColor: '#888 #f5f5f5', 
        }} 
        src={output}  
      /> */}
    </div>
  )
}

export default Output;

