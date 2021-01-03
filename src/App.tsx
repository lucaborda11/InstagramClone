import React from 'react';
import './App.css';
import Card from './components/Card';
import Container from './components/Container';
import Input from './components/Input';
import Button from './components/Button';
import Title from './components/Title'
import Link from './components/Link'
import Center from './components/Center';



function App() {
  return (
    <Container>
      <Card>
        <Title>Log In</Title>
        <Input placeholder='Mail' label='Mail'/>
        <Input placeholder='Password' label='Password'/>
        <Button block={true}>Confirm</Button>
        <Center>
          <Link>Sing In</Link>
        </Center>
      </Card>
    </Container>
  );
}

export default App;
