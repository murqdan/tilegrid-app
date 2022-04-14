import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'

const GuardRoute = ({ children, isLogin, ...rest }) => {
  if (!isLogin) {
    return <Navigate to="/login" />
  }

  return children
}

GuardRoute.propTypes = {
  children: PropTypes.element,
  isLogin: PropTypes.bool
}

export default GuardRoute
