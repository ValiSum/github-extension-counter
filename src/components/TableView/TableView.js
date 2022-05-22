import {
  Center,
  Box,
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

const i18ns = {
  tableTitle1: 'Cantidad',
  tableTitle2: 'Extension',
}

export const TableView = () => {
  const { state } = useApp()

  return (
    <Flex direction="column" h="100%">
      <Center h="100px">
        <InputGroup>
          <Input
            type="text"
            name="owner"
            placeholder="Buscar extension"
            value={state.query}
            size="md"
          />
        </InputGroup>
      </Center>
      <Box maxH="calc(100% - 100px)" w="100%" overflowY="scroll">
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>{i18ns.tableTitle1}</Th>
                <Th>{i18ns.tableTitle2}</Th>
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
