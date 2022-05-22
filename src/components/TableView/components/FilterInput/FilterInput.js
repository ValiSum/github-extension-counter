import { InputGroup, Input, InputRightElement } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
import { useApp } from '../../../../AppProvider'

const i18ns = {
  placeholder: 'Buscar extension',
}

export const FilterInput = () => {
  const { state, setFilterValue } = useApp()
  const { filterValue } = state

  return (
    <InputGroup backgroundColor="whiteAlpha.900" borderRadius="6">
      <Input
        size="md"
        type="text"
        placeholder={i18ns.placeholder}
        value={filterValue}
        onChange={event => setFilterValue(event.target.value)}
      />
      {filterValue && (
        <InputRightElement
          children={
            <CloseIcon color="teal" onClick={() => setFilterValue('')} />
          }
        />
      )}
    </InputGroup>
  )
}
