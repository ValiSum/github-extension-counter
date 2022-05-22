import { createContext, useContext, useReducer } from 'react'
import { ACTIONS } from './constants'
import { getFakeExtensionsData } from './mocks'

const AppContext = createContext()

const appReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case ACTIONS.SET_FORM_VALUES:
      return { ...state, formValues: payload.formValues }
    case ACTIONS.SET_IS_LOADING:
      return { ...state, isLoading: payload.isLoading }
    case ACTIONS.SET_EXTENSIONS:
      return { ...state, extensions: payload.extensions }
    case ACTIONS.SET_FILTER_VALUE:
      return { ...state, filterValue: payload.filterValue }
    case ACTIONS.SET_SORT_VALUES:
      return { ...state, sortValues: payload.sortValues }
    default:
      throw new Error(`Unhandled action type: ${type}`)
  }
}

const AppProvider = ({ initialState, children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  const setFormValues = event => {
    const {
      target: { name, value },
    } = event
    dispatch({
      type: ACTIONS.SET_FORM_VALUES,
      payload: { formValues: { ...state.formValues, [name]: value } },
    })
  }

  const setIsLoading = isLoading => {
    dispatch({ type: ACTIONS.SET_IS_LOADING, payload: { isLoading } })
  }

  const setExtensions = extensions => {
    dispatch({ type: ACTIONS.SET_EXTENSIONS, payload: { extensions } })
  }

  const setFilterValue = filterValue => {
    dispatch({ type: ACTIONS.SET_FILTER_VALUE, payload: { filterValue } })
  }

  const setSortValues = event => {
    const {
      target: { name, value },
    } = event
    dispatch({
      type: ACTIONS.SET_SORT_VALUES,
      payload: { sortValues: { ...state.sortValues, [name]: value } },
    })
  }

  const getData = async () => {
    setIsLoading(true)
    const response = await getFakeExtensionsData()

    setExtensions(response)
    setIsLoading(false)
  }

  const value = {
    state,
    setFormValues,
    setIsLoading,
    setExtensions,
    setFilterValue,
    setSortValues,
    getData,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

const useApp = () => {
  const context = useContext(AppContext)

  if (context === undefined) {
    throw new Error('useApp must be used within a AppProvider')
  }

  const {
    state,
    setFormValues,
    setIsLoading,
    setExtensions,
    setFilterValue,
    setSortValues,
    getData,
  } = context

  return {
    state,
    setFormValues,
    setIsLoading,
    setExtensions,
    setFilterValue,
    setSortValues,
    getData,
  }
}

export { AppProvider, useApp }
