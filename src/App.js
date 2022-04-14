import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import './App.css'
const GuardRoute = React.lazy(() => import('./components/GuardRoute'))
const Category = React.lazy(() => import('./pages/Category'))
const Drinks = React.lazy(() => import('./pages/Drinks'))
const Member = React.lazy(() => import('./pages/Member'))
const Login = React.lazy(() => import('./pages/Login'))
const Foods = React.lazy(() => import('./pages/Foods'))
const About = React.lazy(() => import('./pages/About'))
const Post = React.lazy(() => import('./pages/Post'))
const Home = React.lazy(() => import('./pages/Home'))

function App () {
  const [isLogin, setLogin] = React.useState(false)

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <div className="App">
        <ul className='menu'>
          <li><NavLink to="/" className={(navData) => (navData.isActive ? 'active' : 'none')}>Home</NavLink></li>
          <li><NavLink to="/about" className={(navData) => (navData.isActive ? 'active' : 'none')}>About</NavLink></li>
          <li><NavLink to="/member" className={(navData) => (navData.isActive ? 'active' : 'none')}>Member</NavLink></li>
          <li><NavLink to="/category" className={(navData) => (navData.isActive ? 'active' : 'none')}>Category</NavLink></li>
          <li>{isLogin
            ? <NavLink to="/logout" onClick={(e) => {
              e.preventDefault()
              setLogin(false)
            }} >Logout</NavLink>
            : <NavLink to="/login" className={(navData) => (navData.isActive ? 'active' : 'none')}>Login</NavLink>
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
    </React.Suspense>
  )
}

export default App
