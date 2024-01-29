import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { expressionActions } from '../redux/ExpressionsSlice';
function Expression({ expressionData }) {
  const dispatch = useDispatch();
  const deleteExpression = ()=>{
    dispatch(expressionActions.deleteExpression(expressionData.id));
  }
  return (
    <tr>
      <td>
        <span>{expressionData.ruleType}</span>
      </td>
      <td>
        <span>{expressionData.operator}</span>
      </td>
      <td >
        <span>{expressionData.score}</span>
      </td>
      <td >
        <span>{expressionData.value}</span>
      </td>
      <td className="">
        <Button onClick={deleteExpression}  variant="danger" size='sm' type="submit">
          Delete
        </Button>
      </td>
    
      
    </tr>
  );
}

export default Expression;
