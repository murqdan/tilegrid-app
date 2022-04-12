import React from 'react'
import Child from './Child'

const TemaSitus = React.createContext('light')

const AppBelajarContext = () => {
  return (
    <div>
        <TemaSitus.Provider value={'light'}>
            <Child/>
        </TemaSitus.Provider>
   </div>
  )
}

export { TemaSitus, AppBelajarContext }
