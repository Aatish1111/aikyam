import React,{useEffect} from 'react'
import Login from './pages/Login/Login'
import Signup from './pages/signup/Signup'
import Home from './pages/Home/Home'

import { useNavigate,Routes,Route} from 'react-router-dom'

const App = () => {
  const navigate=useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

    if (authToken) {
      navigate('/')
    }
  }, [])
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </div>
  )
}

export default App
