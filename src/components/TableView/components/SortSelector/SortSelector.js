import { Flex, Text, Select } from '@chakra-ui/react'
import { useApp } from '../../../../AppProvider'
import { OPTION_VALUES } from '../../../../constants'

const i18ns = {
  ascOptionLabel: 'Asc',
  descOptionLabel: 'Desc',
}

export const SortSelector = ({ name, label, defaultValue }) => {
  const { setSortValues } = useApp()

  return (
    <Flex>
      <Text flex="2">{label}</Text>
      <Select
        flex="1"
        variant="flushed"
        name={name}
        placeholder="-"
        size="xs"
        onChange={setSortValues}
        defaultValue={defaultValue}
      >
        <option value={OPTION_VALUES.asc}>{i18ns.ascOptionLabel}</option>
        <option value={OPTION_VALUES.desc}>{i18ns.descOptionLabel}</option>
      </Select>
    </Flex>
  )
}
