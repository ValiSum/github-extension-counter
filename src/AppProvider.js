import {
  createContext,
  useContext,
  useReducer,
  useCallback,
  useEffect,
} from 'react'
import { ACTIONS, INITIAL_STATE } from './constants'
import { getBranch, getTrees } from './services/api'
import { keyExtractor } from './utils/keyExtractor'

const AppContext = createContext()

const appReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case ACTIONS.SET_FORM_VALUES:
      return { ...state, formValues: payload.formValues }
    case ACTIONS.SET_IS_LOADING:
      return { ...state, isLoading: payload.isLoading }
    case ACTIONS.SET_PROMISES:
      return { ...state, promises: payload.promises }
    case ACTIONS.SET_EXTENSIONS:
      return { ...state, extensions: payload.extensions }
    case ACTIONS.SET_FILTER_VALUE:
      return { ...state, filterValue: payload.filterValue }
    case ACTIONS.SET_SORT_VALUES:
      return { ...state, sortValues: payload.sortValues }
    case ACTIONS.SET_IS_ERROR:
      return { ...state, isError: payload.isError }
    case ACTIONS.SET_INITIAL_STATE:
      return { ...state, ...payload }
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
    if (state.isError && state.formValues[name].value !== value) {
      setIsError(false)
    }
    dispatch({
      type: ACTIONS.SET_FORM_VALUES,
      payload: { formValues: { ...state.formValues, [name]: value } },
    })
  }

  const setIsLoading = isLoading => {
    dispatch({ type: ACTIONS.SET_IS_LOADING, payload: { isLoading } })
  }

  const setPromises = promises => {
    dispatch({ type: ACTIONS.SET_PROMISES, payload: { promises } })
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

  const setIsError = isError => {
    dispatch({ type: ACTIONS.SET_IS_ERROR, payload: { isError } })
  }

  const setInitialState = () => {
    dispatch({
      type: ACTIONS.SET_INITIAL_STATE,
      payload: { ...INITIAL_STATE, extensions: {} },
    })
  }

  const getData = async () => {
    try {
      setIsLoading(true)
      const {
        formValues: { owner, repository },
      } = state
      const response = await getBranch(owner, repository)

      if (response?.data?.commit?.sha) {
        const sha = response?.data?.commit?.sha
        setPromises([getTrees(owner, repository, sha)])
      }
    } catch (_) {
      setIsError(true)
      setIsLoading(false)
    }
  }

  const getRepositoryTree = useCallback(async () => {
    try {
      const responses = await Promise.all(
        state.promises.map(promise => promise)
      )

      if (responses.length > 0) {
        let promises = []
        let extensions = state.extensions

        responses.forEach(response => {
          if (response?.data?.tree) {
            const tree = response?.data?.tree

            tree.forEach(({ path, sha, type }) => {
              if (type === 'tree') {
                promises.push(
                  getTrees(
                    state.formValues.owner,
                    state.formValues.repository,
                    sha
                  )
                )
              } else {
                const key = keyExtractor(path)
                if (key) {
                  if (extensions[key]) {
                    extensions[key] = extensions[key] + 1
                  } else {
                    extensions[key] = 1
                  }
                }
              }
            })
          }
        })

        setPromises(promises)
        setExtensions(extensions)
      }
    } catch (_) {
      setIsError(true)
      setIsLoading(false)
    }
  }, [state.extensions, state.formValues, state.promises])

  useEffect(() => {
    if (state.promises.length > 0) {
      getRepositoryTree()
    } else {
      if (Object.keys(state.extensions).length > 0) {
        setIsLoading(false)
      }
    }
  }, [state.promises, state.extensions, getRepositoryTree])

  const value = {
    state,
    setFormValues,
    setIsLoading,
    setExtensions,
    setFilterValue,
    setSortValues,
    setIsError,
    setInitialState,
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
    setIsError,
    setInitialState,
    getData,
  } = context

  return {
    state,
    setFormValues,
    setIsLoading,
    setExtensions,
    setFilterValue,
    setSortValues,
    setIsError,
    setInitialState,
    getData,
  }
}

export { AppProvider, useApp }
