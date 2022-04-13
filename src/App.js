import { Routes, Route } from 'react-router-dom'
import './App.css'

const Home = () => <h2>Halaman Home</h2>
const About = () => <h2>Halaman About</h2>

function App () {
  return (
    <div className="App App-header">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App
