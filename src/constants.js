export const ACTIONS = {
  SET_FORM_VALUES: 'SET_FORM_VALUES',
  SET_IS_LOADING: 'SET_IS_LOADING',
  SET_EXTENSIONS: 'SET_EXTENSIONS',
}

export const INITIAL_STATE = {
  formValues: { owner: '', repository: '' },
  isLoading: false,
  extensions: {},
}
