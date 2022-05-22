import {
  Center,
  Box,
  Text,
  Badge,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import { useApp } from '../../AppProvider'
import { FilterInput } from './components/FilterInput'
import { SortSelector } from './components/SortSelector'
import { sortAndFilterExtensions } from './utils/sortAndFilterExtensions'

const i18ns = {
  tableTitle1: 'Cantidad',
  tableTitle2: 'Extension',
  noResults: 'No hay resultados para esta busqueda',
}

export const TableView = () => {
  const { state } = useApp()
  const {
    formValues: { owner, repository },
    sortValues: { quantity, extension },
  } = state

  return (
    <Flex direction="column" h="100%">
      <Center h="100px">
        <Flex w="50%">
          <FilterInput />
        </Flex>
        <Flex w="50%" justifyContent="flex-end" alignItems="center">
          <Badge colorScheme="teal">{owner}</Badge>
          <Text fontWeight="bold" px="2">
            /
          </Text>
          <Badge colorScheme="teal">{repository}</Badge>
        </Flex>
      </Center>
      <Box maxH="calc(100% - 100px)" w="100%" overflowY="scroll">
        {sortAndFilterExtensions(state).length > 0 ? (
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>
                    <SortSelector
                      name="quantity"
                      label={i18ns.tableTitle1}
                      defaultValue={quantity}
                      disabled={Boolean(extension.length > 0)}
                    />
                  </Th>
                  <Th>
                    <SortSelector
                      name="extension"
                      label={i18ns.tableTitle2}
                      defaultValue={extension}
                      disabled={Boolean(quantity.length > 0)}
                    />
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {sortAndFilterExtensions(state).map(item => (
                  <Tr key={item[0]}>
                    <Td>{item[1]}</Td>
                    <Td>{item[0]}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        ) : (
          <Center h="200px">
            <Text>{i18ns.noResults}</Text>
          </Center>
        )}
      </Box>
    </Flex>
  )
}
