import {
  Flex,
  Link,
  Text,
  useColorModeValue,
  Container,
  Heading,
  Button,
  Center,
} from '@chakra-ui/react'
import { isEmpty } from 'lodash'
import { useApp } from '../AppProvider'
import { ColorModeSwitcher } from '../components/ColorModeSwitcher'
import { FormView } from '../components/FormView'
import { TableView } from '../components/TableView'

const i18ns = {
  appTitle: 'Github Extension Counter',
  backButton: 'Volver',
  rightsText: '© All rights are reserved',
  authorText: 'Made with 💖 by',
  authorName: 'ValiSum',
}

export const Layout = () => {
  const { state } = useApp()
  const bg = useColorModeValue('gray.300', 'gray.900')

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
              <Button ml="2" variant="ghost">
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
