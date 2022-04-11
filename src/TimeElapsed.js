import { useState, useEffect } from 'react'

const TimeElapsed = props => {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(second => second + 1) // <--- menggunakan fungsi updater untuk melakukan increment
    }, 1000)

    return () => clearInterval(intervalId)
  }, []) // <--- sekarang kita tidak perlu mendaftarkan state seconds karena memang tidak dipakai di effect ini

  return (
    <div>
      {seconds} detik.
    </div>
  )
}

export default TimeElapsed
