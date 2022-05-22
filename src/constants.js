export const ACTIONS = {
  SET_FORM_VALUES: 'SET_FORM_VALUES',
  SET_IS_LOADING: 'SET_IS_LOADING',
  SET_EXTENSIONS: 'SET_EXTENSIONS',
  SET_FILTER_VALUE: 'SET_FILTER_VALUE',
  SET_SORT_VALUES: 'SET_SORT_VALUES',
}

export const INITIAL_STATE = {
  formValues: { owner: '', repository: '' },
  isLoading: false,
  extensions: {},
  filterValue: '',
  sortValues: { quantity: '', extension: '' },
}

export const OPTION_VALUES = {
  asc: 'asc',
  desc: 'desc',
}
