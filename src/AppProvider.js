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
    case 'SET_EXTENSIONS':
      return { ...state, extensions: payload.extensions }
    default:
      throw new Error(`Unhandled action type: ${type}`)
  }
}

const AppProvider = ({ initialState, children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  const setFormValues = formValues => {
    dispatch({ type: ACTIONS.SET_FORM_VALUES, payload: { formValues } })
  }

  const setIsLoading = isLoading => {
    dispatch({ type: ACTIONS.SET_IS_LOADING, payload: { isLoading } })
  }

  const setExtensions = extensions => {
    dispatch({ type: ACTIONS.SET_EXTENSIONS, payload: { extensions } })
  }

  const getData = async () => {
    const response = await getFakeExtensionsData()

    setExtensions(response)
  }

  const value = { state, setFormValues, setIsLoading, setExtensions, getData }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

const useApp = () => {
  const context = useContext(AppContext)

  if (context === undefined) {
    throw new Error('useApp must be used within a AppProvider')
  }

  const { state, setFormValues, setIsLoading, setExtensions, getData } = context

  return { state, setFormValues, setIsLoading, setExtensions, getData }
}

export { AppProvider, useApp }