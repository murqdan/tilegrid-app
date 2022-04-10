import { useState } from 'react'
import PropTypes from 'prop-types'

const Button = ({ text }) => {
  const [counter, setCounter] = useState(0)

  const handleClick = () => setCounter(c => c + 1)

  return (
    <button onClick={handleClick}>
      {text} {counter}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string
}

export default Button
