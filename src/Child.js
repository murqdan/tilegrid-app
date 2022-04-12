import { useContext } from 'react'
import { TemaSitus } from './AppBelajarContext'

const Child = props => {
  const tema = useContext(TemaSitus) // <---- akses nilai Context TemaSitus

  return (
    <div>
      Tema situs sekarang adalah {tema}
    </div>
  )
}

export default Child
