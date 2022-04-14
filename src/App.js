import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import GuardRoute from './components/GuardRoute'
import Category from './pages/Category'
import Drinks from './pages/Drinks'
import Member from './pages/Member'
import Login from './pages/Login'
import Foods from './pages/Foods'
import About from './pages/About'
import Post from './pages/Post'
import Home from './pages/Home'
import './App.css'

function App () {
  const [isLogin, setLogin] = React.useState(false)

  return (
    <div className="App">
      <ul className='menu'>
        <li><NavLink to="/" activeClassName="active" exact>Home</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
        <li><NavLink to="/member" activeClassName="active">Member</NavLink></li>
        <li><NavLink to="/category" activeClassName="active">Category</NavLink></li>
        <li>{isLogin
          ? <NavLink to="/logout" onClick={(e) => {
            e.preventDefault()
            setLogin(false)
          }} >Logout</NavLink>
          : <NavLink to="/login" activeClassName="active">Login</NavLink>
        }</li>
      </ul>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route
          path="/member"
          element={
            <GuardRoute isLogin={isLogin}>
              <Member/>
            </GuardRoute>
          }/>
          <Route path="/login" element={<Login setLogin={setLogin}/>}/>
          <Route path="/category" element={<Category/>}>
            <Route path="foods" element={<Foods />} />
            <Route path="drinks" element={<Drinks />} />
          </Route>
          <Route path="/post/:id" element={<Post/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
