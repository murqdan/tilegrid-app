import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

function Login ({ setLogin }) {
  const navigate = useNavigate()

  return (
      <div>
          <h2>Halaman Login</h2>
          <p>
            <button onClick={() => {
              setLogin(true)
              navigate('/member')
            }}> Login </button>
          </p>
      </div>
  )
}

Login.propTypes = {
  setLogin: PropTypes.func
}

export default Login
