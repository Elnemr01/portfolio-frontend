import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/home/Home'
import AllProjects from './pages/projects/AllProjects'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <div className="App bg-background pt-17.5">
      <Toaster/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<AllProjects/>}/>
      </Routes>
    </div>
  )
}

export default App
