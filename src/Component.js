import { useState, useEffect } from 'react'

const Component = props => {
  const [counter, setCounter] = useState(0)

  useEffect(
    () => {
      setCounter(counter + 1)
      // Dengan kata lain, render loop akan terjadi jika Effect
      // mengubah nilai dependency nya sendiri. Untuk itu hindari melakukan hal tersebut.
    }, [counter]
  )

  return (
    <div>
     {counter}
    </div>
  )
}

export default Component
