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
  ownerPlaceholderInput: 'Propietario',
  repositoryPlaceholderInput: 'Repositorio',
  loadingText: 'Cargando',
  showButton: 'Mostrar',
}

export const FormView = () => {
  const { state, getData, setFormValues } = useApp()
  const {
    formValues: { owner, repository },
    isError,
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
      <VStack mt="2" mb="8" spacing={6} p="4" boxShadow="md" borderRadius="4">
        <InputGroup>
          <Input
            type="text"
            variant="filled"
            name="owner"
            placeholder={i18ns.ownerPlaceholderInput}
            value={owner}
            onChange={setFormValues}
            disabled={state.isLoading}
            isInvalid={isError}
          />
          {owner && <InputRightElement children={<CheckIcon />} />}
        </InputGroup>
        <InputGroup>
          <Input
            type="text"
            variant="filled"
            name="repository"
            placeholder={i18ns.repositoryPlaceholderInput}
            value={repository}
            onChange={setFormValues}
            disabled={state.isLoading}
            isInvalid={isError}
          />
          {repository && <InputRightElement children={<CheckIcon />} />}
        </InputGroup>
        <Button
          colorScheme="teal"
          w="100%"
          isLoading={state.isLoading}
          loadingText={i18ns.loadingText}
          onClick={getData}
          disabled={
            state.isLoading ||
            Boolean(owner.length === 0) ||
            Boolean(repository.length === 0)
          }
        >
          {i18ns.showButton}
        </Button>
      </VStack>
    </Container>
  )
}
