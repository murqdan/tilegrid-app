// import ReactJS karena kita menggunakan format JSX
// eslint-disable-next-line no-unused-vars
import * as React from 'react'

// eslint-disable-next-line react/prop-types
const Hello = ({ name }) => {
  return <div>Hello {name}!</div>
}

Hello.defaultProps = {
  name: 'anonim'
}

export default Hello
