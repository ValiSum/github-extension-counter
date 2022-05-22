export const ACTIONS = {
  SET_FORM_VALUES: 'SET_FORM_VALUES',
  SET_IS_LOADING: 'SET_IS_LOADING',
  SET_EXTENSIONS: 'SET_EXTENSIONS',
  SET_PROMISES: 'SET_PROMISES',
  SET_FILTER_VALUE: 'SET_FILTER_VALUE',
  SET_SORT_VALUES: 'SET_SORT_VALUES',
  SET_INITIAL_STATE: 'SET_INITIAL_STATE',
}

export const INITIAL_STATE = {
  formValues: { owner: '', repository: '' },
  isLoading: false,
  promises: [],
  extensions: {},
  filterValue: '',
  sortValues: { quantity: '', extension: '' },
}

export const TOKEN = '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'

export const OPTION_VALUES = {
  asc: 'asc',
  desc: 'desc',
}
