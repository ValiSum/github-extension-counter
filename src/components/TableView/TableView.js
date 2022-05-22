import {
  Center,
  Box,
  Text,
  Badge,
  Flex,
  InputGroup,
  Input,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import { useApp } from '../../AppProvider'
import { SortSelector } from './components/SortSelector'

const i18ns = {
  tableTitle1: 'Cantidad',
  tableTitle2: 'Extension',
}

export const TableView = () => {
  const { state } = useApp()
  const {
    formValues: { owner, repository },
  } = state

  return (
    <Flex direction="column" h="100%">
      <Center h="100px">
        <InputGroup w="50%" backgroundColor="whiteAlpha.900" borderRadius="6">
          <Input
            type="text"
            name="owner"
            placeholder="Buscar extension"
            value={state.query}
            size="md"
          />
        </InputGroup>
        <Flex w="50%" justifyContent="flex-end" alignItems="center">
          <Badge colorScheme="teal">{owner}</Badge>
          <Text fontWeight="bold" px="2">
            /
          </Text>
          <Badge colorScheme="teal">{repository}</Badge>
        </Flex>
      </Center>
      <Box maxH="calc(100% - 100px)" w="100%" overflowY="scroll">
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>
                  <SortSelector name="quantity" label={i18ns.tableTitle1} />
                </Th>
                <Th>
                  <SortSelector name="extension" label={i18ns.tableTitle2} />
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {Object.entries(state.extensions).map(item => (
                <Tr key={item[0]}>
                  <Td>{item[1]}</Td>
                  <Td>{item[0]}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Flex>
  )
}
