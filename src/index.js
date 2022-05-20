import React from 'react'
import ReactDOM from 'react-dom/client'
import { ColorModeScript } from '@chakra-ui/react'
import App from './App'

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

root.render(
  <>
    <ColorModeScript />
    <App />
  </>
)
