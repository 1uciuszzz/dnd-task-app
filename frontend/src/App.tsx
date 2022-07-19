import './App.css'
import { BrowserRouter, Outlet } from 'react-router-dom'
import Router from './router'

function App() {
  return <>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    <Outlet />
  </>
}

export default App
