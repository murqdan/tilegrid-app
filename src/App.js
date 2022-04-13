import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import './App.css'

function App () {
  return (
    <div className="App">
      <ul className='menu'>
        <li><NavLink to="/" activeClassName="active" exact>Home</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
        <li><NavLink to="/member" activeClassName="active">Member</NavLink></li>
      </ul>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/member" element={ <Navigate to="/"/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
