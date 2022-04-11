import { useState, useEffect, useMemo } from 'react'

const Komponenku = ({ wilayah }) => {
  let [menu, setMenu] = useState([])

  const fetchMenu = function () {
    return ['nasi padang', 'nasi uduk', 'nasi gudeg']
  }

  menu = useMemo(() => {
    if (wilayah === 'bali') return ['ayam betutu']

    return fetchMenu()
  }, [wilayah])

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
