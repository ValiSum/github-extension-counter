import { Flex, useColorModeValue } from '@chakra-ui/react'
import { isEmpty } from 'lodash'
import { useApp } from '../../AppProvider'
import { FormView } from './components/FormView'

export const Home = () => {
  const { state } = useApp()
  const bg = useColorModeValue('gray.300', 'gray.900')

  return (
    <Flex width="100wh" height="100vh" direction="column" bg={bg}>
      {(isEmpty(state.extensions) || state.isLoading) && <FormView />}
      {!isEmpty(state.extensions) && !state.isLoading && <div>TableView</div>}
    </Flex>
  )
}
