import Button from 'react-bootstrap/Button';
import Expression from './Expression';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import { expressionActions } from '../redux/ExpressionsSlice';
function ExpressionList({toggleForm, toggleOutput}) {
    //get list of expressions
    const expressions = useSelector((state)=> state.expressions.expressionList);
    
    const dispatch = useDispatch();

    //change connector
    const changeConnector = (e)=>{
      dispatch(expressionActions.setCombinator(e.target.value))
    }
    return (
    <div style={{display: 'flex', flexDirection: 'column', width:'90vw' }}>
     
        
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '40px',  }}>

        <p style={{ margin: '0', fontWeight: 'bold', }}>List of expressions</p>

        <Button onClick={toggleOutput} style={{ display: 'flex' , justifyContent: 'center', alignItems: 'center',  }}   variant="outline-info" type="submit" size="sm">
          <svg style={{width:'25px', height:'25px'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
          View Output
        </Button>

        <Button onClick={toggleForm} style={{ display: 'flex' , justifyContent: 'center', alignItems: 'center',  }}  variant="primary" type="submit">
          <svg style={{width:'25px', height:'25px'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-2 h-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <p style={{ margin: '0', fontWeight: 'bold', marginLeft: '2px' }} >Add </p>
        </Button>
     
      </div>

      
      <Form style={{display:'flex',  justifyContent: 'left', alignItems: 'center', marginTop: '30px',}}>
        <Form.Group style={{ display: 'flex', justifyContent:'center', alignItems: 'center', gap:'20px' }}>
          <Form.Label style={{fontStyle: 'italic', fontWeight: 'bold'}}>Connector Type</Form.Label>
          <Form.Select onChange={changeConnector} style={{width:'100px', height:'40px'}}>
            <option>AND</option>
            <option>OR</option>
          </Form.Select>
        
        </Form.Group>
        
      </Form>

      <Table style={{marginTop:'30px'}}>
        <thead>
          <tr>
            <th>Rule Type</th>
            <th>Operator</th>
            <th>Score</th>
            <th>Value</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {expressions.map((expressionData) => (
            <Expression key={expressionData.id} expressionData={expressionData} />
          ))}
        </tbody>
      </Table>
      
      
    </div>
  )
}

export default ExpressionList