
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Homepage from './pages/Homepage'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

function App() {
   return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage /> } />
        <Route path='/Signin' element={<Signin /> } />
        <Route path='/Signup' element={<Signup /> } />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
