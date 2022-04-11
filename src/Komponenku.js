import { useState, useEffect, useCallback } from 'react'

const Komponenku = props => {
  const [menu, setMenu] = useState([])

  // ------------------------
  const fetchMenu = useCallback(() => {
    return ['nasi padang', 'nasi uduk', 'nasi gudeg']
  }, [])
  // ------------------------

  useEffect(() => {
    const data = fetchMenu()
    setMenu(data)
  }, [fetchMenu]) // <--- fetchMenu sbg dependency effect

  return (
    <div>
      {menu.map(makanan => <div>{makanan}</div>)}
    </div>
  )
}

export default Komponenku
