import React from 'react'
import ReactDOM from 'react-dom/client'
import RootLayout from './components/container/RootLayout/RootLayout'
import './index.css'
import { Provider } from "react-redux"
import { store } from './store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <RootLayout />
    <ToastContainer />
  </Provider>
)
