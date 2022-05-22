import {
  Container,
  Heading,
  VStack,
  InputGroup,
  Input,
  Button,
} from '@chakra-ui/react'
import { useApp } from '../../AppProvider'

const i18ns = {
  title: 'Bienvenido',
  button: 'Mostrar',
}

export const FormView = () => {
  const { getData } = useApp()

  return (
    <Container
      maxW="md"
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Heading as="h2" textAlign="center">
        {i18ns.title}
      </Heading>
      <VStack
        mt="2"
        mb="8"
        spacing={6}
        p="4"
        backgroundColor="whiteAlpha.900"
        boxShadow="md"
        borderRadius="4"
      >
        <InputGroup>
          <Input type="text" name="owner" placeholder="Owner" />
        </InputGroup>
        <InputGroup>
          <Input type="text" name="owner" placeholder="Repository" />
        </InputGroup>
        <Button colorScheme="teal" w="100%" onClick={getData}>
          {i18ns.button}
        </Button>
      </VStack>
    </Container>
  )
}
