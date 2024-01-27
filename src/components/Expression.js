import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Expression() {
  return (
    <div>
      <Form>
        <Row className="">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Rule Type</Form.Label>
            <Form.Select size="sm">
              <option>Age</option>
              <option>Credit Score</option>
              <option>Account Balance</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Operator</Form.Label>
            <Form.Select size="sm">
              <option>&lt;</option>
              <option>&ge;</option>
              <option>&le;</option>
              <option>=</option>
            </Form.Select>
          </Form.Group>
        
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Score</Form.Label>
            <Form.Control type="password" placeholder="Score" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Value</Form.Label>
            <Form.Control type="password" placeholder="Value" />
          </Form.Group>
        
          <Form.Group as={Col} controlId="formGridPassword" >
            <div className='mt-6'>
            <Button style={{ marginTop: '30px' }} variant="danger" type="submit">
              Delete
            </Button>
            </div>
         
          </Form.Group>
        </Row>
      </Form>
    </div>
  );
}

export default Expression;
