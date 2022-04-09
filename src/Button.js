import style from './Button.module.scss'

const Button = ({ props }) => {
  return (
    <button className={style.default}>
      {props}
    </button>
  )
}

export default Button
