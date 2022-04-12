import { useState } from 'react'

const useToggle = function () {
  const [value, toggle] = useState('OFF')

  return [value, toggle]
}

export default useToggle
