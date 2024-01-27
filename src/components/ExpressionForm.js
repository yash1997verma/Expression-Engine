import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { expressionActions } from '../redux/ExpressionsSlice';
import toast from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';
function ExpressionForm({toggleForm}) {
    const ruleTypeRef = useRef(null);
    const operatorRef = useRef(null);
    const scoreRef = useRef(null);
    const valueRef = useRef(null);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newExpression = {
            id: uuidv4(),
            ruleType: ruleTypeRef.current.value,
            operator: operatorRef.current.value,
            score: scoreRef.current.value,
            value: valueRef.current.value,
        };
        // Check if score and value are not empty
        if (newExpression.score.trim() === '' || newExpression.value.trim() === '') {
            toast.error('Complete Form');
            return;
        }


        //close the form
        toggleForm();

        // Dispatch the action
        dispatch(expressionActions.addExpresssion(newExpression));

    };

    return (
        <Form
            onSubmit={handleSubmit}
            style={{
            position: 'relative',
            padding: '20px',
            margin: '20px',
            width: '300px',
            border: '2px solid black',
            borderRadius: '10px',
            }}
        >
            <svg
            onClick={toggleForm}
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

            <div>
            <p style={{ fontWeight: 'bold' }}>Add new expression</p>

         

            <Form.Group >
                <Form.Label>Rule Type</Form.Label>
                <Form.Select size="sm" ref={ruleTypeRef}>
                <option>Age</option>
                <option>Credit Score</option>
                <option>Account Balance</option>
                </Form.Select>
            </Form.Group>

            <Form.Group >
                <Form.Label>Operator</Form.Label>
                <Form.Select size="sm" ref={operatorRef}>
                <option>&lt;</option>
                <option>&gt;</option>
                <option>&ge;</option>
                <option>&le;</option>
                <option>=</option>
                </Form.Select>
            </Form.Group>

            <Form.Group controlId="formGridPassword">
                <Form.Label>Score</Form.Label>
                <Form.Control type="number" placeholder="Score" ref={scoreRef} />
            </Form.Group>

            <Form.Group controlId="formGridPassword">
                <Form.Label>Value</Form.Label>
                <Form.Control type="number" placeholder="Value" ref={valueRef} />
            </Form.Group>

            <Form.Group style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button style={{ marginTop: '30px' }} variant="primary" type="submit">
                Add Expression
                </Button>
            </Form.Group>
            </div>
        </Form>

    )
}

export default ExpressionForm