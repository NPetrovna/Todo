import { Navigate, Route, Routes } from 'react-router'
import Home from './components/Home'
import Registration from './components/Registration'
import Autorization from './components/Autorization'
import NavBar from './components/NavBar'

function App() {

  return (
    <div className="bg-sky-200 h-screen w-screen flex flex-col justify-center items-center">
      <Routes>
        <Route path='/*' element={<NavBar />}>
          <Route path='home' element={<Home />}/>
          <Route path='register' element={<Registration />}/>
          <Route path='auth' element={<Autorization />}/>
          <Route path="*" element={<Navigate to="/home" />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
