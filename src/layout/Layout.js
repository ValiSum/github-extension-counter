import { useEffect } from 'react'
import {
  Flex,
  Link,
  Text,
  useColorModeValue,
  Container,
  Heading,
  Button,
  Center,
  useToast,
} from '@chakra-ui/react'
import { isEmpty } from 'lodash'
import { useApp } from '../AppProvider'
import { ColorModeSwitcher } from '../components/ColorModeSwitcher'
import { FormView } from '../components/FormView'
import { TableView } from '../components/TableView'

const i18ns = {
  appTitle: 'Github Extension Counter',
  backButton: 'Volver',
  rightsText: '© Todos los derechos están reservados',
  authorText: 'Hecho con ♥ por',
  authorName: 'ValiSum',
  errorTitle: 'Ha habido un error!',
  errorDescription: 'Comprueba que todos los datos introducidos son correctos.',
}

export const Layout = () => {
  const toast = useToast()

  const { state, setInitialState } = useApp()
  const bg = useColorModeValue('whiteAlpha.800', 'blackAlpha.800')

  useEffect(() => {
    if (state.isError) {
      const toastId = 'error-toast'
      if (!toast.isActive(toastId)) {
        toast({
          id: toastId,
          position: 'top',
          title: i18ns.errorTitle,
          description: i18ns.errorDescription,
          status: 'error',
          duration: 2000,
          isClosable: true,
        })
      }
    }
  }, [state.isError, toast])

  return (
    <Flex width="100wh" height="100vh" direction="column" bg={bg}>
      <Container maxW="4xl" height="50px">
        <Flex height="100%" justifyContent="space-between" alignItems="center">
          <Heading as="h1" size="md">
            {i18ns.appTitle}
          </Heading>
          <Flex>
            <ColorModeSwitcher />
            {!isEmpty(state.extensions) && !state.isLoading && (
              <Button
                ml="2"
                colorScheme="teal"
                variant="outline"
                onClick={setInitialState}
              >
                {i18ns.backButton}
              </Button>
            )}
          </Flex>
        </Flex>
      </Container>
      <Container maxW="4xl" height="calc(100% - 150px)">
        {(isEmpty(state.extensions) || state.isLoading) && <FormView />}
        {!isEmpty(state.extensions) && !state.isLoading && <TableView />}
      </Container>
      <Container maxW="4xl" height="100px">
        <Center height="100%">
          <Text>
            {i18ns.rightsText} | {new Date().getFullYear()} |
            {` ${i18ns.authorText} `}
            <Link
              href="https://valisum.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              {i18ns.authorName}
            </Link>
          </Text>
        </Center>
      </Container>
    </Flex>
  )
}
