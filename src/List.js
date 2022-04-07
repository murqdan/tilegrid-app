import React from 'react'

/*
  const List = () => {
  const users = [
    'Albert', 'Romy', 'Shinta', 'Hendra', 'Fenny', 'Desta'
  ]
  const displayUser = users.map((user, index) => <li key={index}>{user}</li>)
  return <ul>{displayUser}</ul>
}
*/

// const List = () => {
//   const users = [
//     { id: 1, name: 'Albert', gender: 'male' },
//     { id: 2, name: 'Romy', gender: 'male' },
//     { id: 3, name: 'Shinta', gender: 'female' },
//     { id: 4, name: 'Hendra', gender: 'male' },
//     { id: 5, name: 'Fenny', gender: 'female' },
//     { id: 6, name: 'Desta', gender: 'male' }
//   ]
//   /* const displayUser = users.map((user) => {
//     return <li key={user.id}>{user.name} ({user.gender})</li>
//   })
//   return <ul>{displayUser}</ul> */

//   return (
//     <ul>
//         {users.length > 0 && users.map((user) => {
//           return <li key={user.id}>{user.name} ({user.gender})</li>
//         })}
//     </ul>
//   )
// }

const List = ({ users }) => {
  return <ul>
      {users.length > 0 && users.map((user) => {
        return <li key={user.id}>{user.name} ({user.gender})</li>
      })}
    </ul>
}

export default List
