import React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import { Home } from './components/Home/Home'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher position="absolute" right="2" top="2" />
      <Home />
    </ChakraProvider>
  )
}

export default App
