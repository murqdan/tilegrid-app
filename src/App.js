import store from './app/store'
import { Provider } from 'react-redux'

function App () {
  return (
    <div>
      <Provider store={store}>

      </Provider>
    </div>
  )
}

export default App
