import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import Category from './pages/Category'
import Home from './pages/Home'
import About from './pages/About'
import Foods from './pages/Foods'
import Drinks from './pages/Drinks'
import './App.css'

function App () {
  return (
    <div className="App">
      <ul className='menu'>
        <li><NavLink to="/" activeClassName="active" exact>Home</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
        <li><NavLink to="/member" activeClassName="active">Member</NavLink></li>
        <li><NavLink to="/category" activeClassName="active">Category</NavLink></li>
      </ul>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/member" element={ <Navigate to="/"/>}/>
          <Route path="/category" element={<Category/>}>
            <Route path="foods" element={<Foods />} />
            <Route path="drinks" element={<Drinks />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
