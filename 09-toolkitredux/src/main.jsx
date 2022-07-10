import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App'
import { store } from './store/store'
import { Provider } from 'react-redux'
import './index.css'
// import { PokemonApp } from './PokemonApp'
import { ToDoApp } from './ToDoApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      {/* <PokemonApp/> */}
        <ToDoApp />
    </Provider>
  </React.StrictMode>
)
