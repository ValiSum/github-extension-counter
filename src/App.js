import { ChakraProvider, theme } from '@chakra-ui/react'
import { AppProvider } from './AppProvider'
import { ColorModeSwitcher } from './components/ColorModeSwitcher'
import { Home } from './components/Home/Home'
import { INITIAL_STATE } from './constants'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AppProvider initialState={INITIAL_STATE}>
        <ColorModeSwitcher />
        <Home />
      </AppProvider>
    </ChakraProvider>
  )
}

export default App
