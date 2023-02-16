import { Box, Heading, Button, Flex, Stack } from '@chakra-ui/react'
import bgImage from './resources/images/banner-desktop.jpg'

function App() {
  return (
    <Box h='40vh' bg='gray' bgImage={`url(${bgImage})`} bgRepeat='no-repeat' bgSize='cover'>
      <Flex direction='column' alignItems='center' justify='center' h='100%' bg='rgb(0 0 0 / 50%)' p={['0 10%', null, '0 20%']}>
        <Heading variant='banner'>ANT MAN QUANTOMANIA</Heading>
        <Stack direction={{ base: 'column', md:'row'}} spacing='40px' mt='30px' w={['100%', null, 'auto']}>
          <Button variant='outline' size='lg' textTransform='uppercase' borderRadius='0' color='white' letterSpacing='1px' _hover={{color: 'black', bg:'white'}}>Ver detalles</Button>
          <Button variant='outline' size='lg' textTransform='uppercase' borderRadius='0' color='white' letterSpacing='1px' _hover={{color: 'black', bg:'white'}}>Ver Videos</Button>
        </Stack>
      </Flex>
    </Box>
  );
}
//el FLEX es un box que esta en display flex
//el STACK es lo mismo que el flex pero hay que decirle si es column o row y la separacion que tienen los items uno con otro
//cuando un diseño se usa una sola vez se hace inline, pero si vemos que algo se repite vamos y modificamos el theme
export default App;



/* <Box bg='brand.primary'>
        Hola Mundo
      </Box>
      <Button>Este es un boton por defecto</Button>
      <Button colorScheme='teal' size='lg'>Este es un boton customizado</Button>
      <Button variant='outline' size='lg'>Este es un boton </Button>
      <Button variant='cta' size='lg'>Este es un boton </Button> */
