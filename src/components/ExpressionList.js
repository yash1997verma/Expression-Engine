
import Button from 'react-bootstrap/Button';
import Expression from './Expression'
import { useDispatch, useSelector } from 'react-redux';
function ExpressionList({toggleForm}) {
    //get list of expressions
  const expressions = useSelector((state)=> state.expressions.expressionList);
    
    return (
    <>
      {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Button style={{ marginTop: '30px' }} variant="danger" type="submit">
          Delete
        </Button>
        <Button style={{ marginTop: '30px' }} variant="danger" type="submit">
          Delete
        </Button>
      </div> */}
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '40px', width:'60vw'  }}>
        <p style={{ margin: '0', fontWeight: 'bold' }}>List of expressions</p>
        <Button onClick={toggleForm} style={{ display: 'flex' , justifyContent: 'center', alignItems: 'center',  }}  variant="primary" type="submit">
          <svg style={{width:'25px', height:'25px'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-2 h-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <p style={{ margin: '0', fontWeight: 'bold', marginLeft: '2px' }} >Add </p>
        </Button>
     
      </div>
      {expressions.map((exp)=>(
        <div className='m-4' >
            <Expression /> 
        </div>
          
      ))}
      
    </>
  )
}

export default ExpressionList