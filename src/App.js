import { ChakraProvider, theme } from '@chakra-ui/react'
import { AppProvider } from './AppProvider'
import { Layout } from './layout'
import { INITIAL_STATE } from './constants'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AppProvider initialState={INITIAL_STATE}>
        <Layout />
      </AppProvider>
    </ChakraProvider>
  )
}

export default App
