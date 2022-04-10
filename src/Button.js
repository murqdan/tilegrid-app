import style from './Button.module.scss'
import PropTypes from 'prop-types'

const Button = ({ props }) => {
  return (
    <button className={style.default}>
      {props}
    </button>
  )
}

Button.propTypes = {
  props: PropTypes.string
}

export default Button
