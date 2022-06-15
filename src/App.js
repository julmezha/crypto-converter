import React from 'react';
import CurrencyConverter from "./components/CurrencyConverter"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

const App = () => {
  return (
    <Container className='app'>
      <CurrencyConverter />
      made by 0xjulmezha
    </Container>
  )
}

export default App
