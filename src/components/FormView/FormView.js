import {
  Container,
  Heading,
  VStack,
  InputGroup,
  Input,
  InputRightElement,
  Button,
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import { useApp } from '../../AppProvider'

const i18ns = {
  title: 'Bienvenido',
  button: 'Mostrar',
  loadingText: 'Cargando',
}

export const FormView = () => {
  const { state, getData, setFormValues } = useApp()
  const {
    formValues: { owner, repository },
  } = state

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
          <Input
            type="text"
            name="owner"
            placeholder="Owner"
            value={owner}
            onChange={setFormValues}
            disabled={state.isLoading}
          />
          {owner && <InputRightElement children={<CheckIcon color="teal" />} />}
        </InputGroup>
        <InputGroup>
          <Input
            type="text"
            name="repository"
            placeholder="Repository"
            value={repository}
            onChange={setFormValues}
            disabled={state.isLoading}
          />
          {repository && (
            <InputRightElement children={<CheckIcon color="teal" />} />
          )}
        </InputGroup>
        <Button
          colorScheme="teal"
          w="100%"
          isLoading={state.isLoading}
          loadingText={i18ns.loadingText}
          onClick={getData}
          disabled={
            state.isLoading || owner.length === 0 || repository.length === 0
          }
        >
          {i18ns.button}
        </Button>
      </VStack>
    </Container>
  )
}
