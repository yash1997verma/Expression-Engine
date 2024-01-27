import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'
import ExpressionList from './components/ExpressionList';
import ExpressionForm from './components/ExpressionForm';
// hot toast
import { Toaster } from 'react-hot-toast';
//redux
import store from './redux/store';
import { Provider } from 'react-redux';
function App() {
  // boolean state to open and close form
  const[formIsOpen, setFormIsOpen] = useState(false);
  
  //toggle form
  const toggleForm = ()=> setFormIsOpen(!formIsOpen);

  return (
    <Provider store ={store} >

      {formIsOpen && 
        <div style={{position:'fixed',display:'flex', justifyContent: 'center', alignItems:'center', zIndex: '20', width: '100vw' , height:'100vh', backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.8)', } }>
          <ExpressionForm toggleForm={toggleForm} />
        </div>
      }

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src="/startup.gif" alt="" style={{ width: '60px', height: '60px', marginTop:'20px' }} />
        <h1 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginTop: '30px', marginBottom: '10px' }}>
          Expression Engine
        </h1>
      </div>

      <Toaster /> 

      <div style={{display:'flex', justifyContent: 'center',}}>
        <ExpressionList toggleForm={toggleForm}/>
      </div>

    </Provider>
  );
}

export default App;
