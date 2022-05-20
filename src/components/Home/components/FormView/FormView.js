import {
  Container,
  Heading,
  Flex,
  VStack,
  InputGroup,
  Input,
  Button,
} from '@chakra-ui/react'
import { useApp } from '../../../../AppProvider'

const i18ns = {
  title: 'Github Extension Counter',
  button: 'Mostrar',
}

export const FormView = () => {
  const { getData } = useApp()
  return (
    <Container maxW="md" height="100%" px="2" py="4">
      <Flex direction="column" height="100%" justifyContent="center">
        <Heading color="teal.400" textAlign="center">
          {i18ns.title}
        </Heading>
        <VStack
          mt="4"
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
      </Flex>
    </Container>
  )
}
