import './App.css';
import {
  Box,
  Button
} from '@chakra-ui/react'


function App() {
  return (
    <div className="App">
      <Box bg='brand.primary'>
        Hola Mundo
      </Box>
      <Button>Este es un boton por defecto</Button>
      <Button colorScheme='teal' size='lg'>Este es un boton customizado</Button>
      <Button variant='outline' size='lg'>Este es un boton </Button>

    </div>
  );
}

export default App;
