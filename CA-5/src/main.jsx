import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import { fetchData } from './features/fetch/fetchdata.js'

// dipatching the fetch data thunk once the app starts 
store.dispatch(fetchData())
// this ensures that the app is fast and no need for extra piece of code in components

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)