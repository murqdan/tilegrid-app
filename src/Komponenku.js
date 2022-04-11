import { useState, useEffect } from 'react'

const Komponenku = props => {
  const [menu, setMenu] = useState([])

  useEffect(() => {
    const fetchMenu = function () {
      return ['nasi padang', 'nasi uduk', 'nasi gudeg']
    }

    const data = fetchMenu()
    setMenu(data)
  }, [])

  return <div>
     {menu.map(makanan => <div>{makanan}</div>)}
    </div>
}

export default Komponenku
