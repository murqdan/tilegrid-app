import style from './Button.module.css'

const Button = ({ props }) => {
  return <button className={style.default}>
    {props}
  </button>
}

export default Button
