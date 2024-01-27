import React, { useState } from 'react'
import Expression from './Expression'

function ExpressionList() {
    const [expressions, setExpressions] = useState([1]);
    console.log(expressions.length)
  return (
    <>
        {expressions.map((exp)=>(
            <div className='m-4' >
                <Expression /> 
            </div>
            
        ))}
    </>
  )
}

export default ExpressionList