import React from 'react'
import './App.css'
import List from './List'
import Table from './Table'
import users from './User'

function App () {
  return (
    <div >
     {/* <List users={users}/> */}
     <Table users={users}/>
    </div>
  )
}

export default App
