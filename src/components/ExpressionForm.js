import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function ExpressionForm({toggleForm}) {
  return (
        <Form style={{ position:'relative', padding: '20px', margin: '20px',width:'300px', border:'2px solid black', borderRadius: '10px'  }}>

            <svg onClick={toggleForm} style={{position:'absolute', right:'2', top:'2', width:'25px', height:'25px', cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
                    
           
            <div >
                <p style={{fontWeight: 'bold'}}>Add new expression</p>

                <Form.Group controlId="formGridEmail">
                    <Form.Label>Rule Type</Form.Label>
                    <Form.Select size="sm">
                    <option>Age</option>
                    <option>Credit Score</option>
                    <option>Account Balance</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group controlId="formGridEmail">
                    <Form.Label>Operator</Form.Label>
                    <Form.Select size="sm">
                    <option>&lt;</option>
                    <option>&ge;</option>
                    <option>&le;</option>
                    <option>=</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group controlId="formGridPassword">
                    <Form.Label>Score</Form.Label>
                    <Form.Control type="password" placeholder="Score" />
                </Form.Group>

                <Form.Group controlId="formGridPassword">
                    <Form.Label>Value</Form.Label>
                    <Form.Control type="password" placeholder="Value" />
                </Form.Group>

                <Form.Group style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Button style={{ marginTop: '30px',  }} variant="primary" type="submit">
                        Add Expression
                    </Button>
                </Form.Group>
            </div>

        </Form>

    )
}

export default ExpressionForm