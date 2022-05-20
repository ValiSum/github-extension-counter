import { Flex, useColorModeValue } from '@chakra-ui/react'
import { FormView } from './components/FormView'

export const Home = () => {
  const bg = useColorModeValue('gray.300', 'gray.900')
  return (
    <Flex width="100wh" height="100vh" direction="column" bg={bg}>
      <FormView />
    </Flex>
  )
}
