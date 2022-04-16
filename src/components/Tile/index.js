import './style.css'
import { string, number } from 'prop-types'

export default function Tile ({ color, id }) {
  return (
    <div className="tile" style={{ backgroundColor: color }}/>
  )
}

Tile.defaultProps = {
  color: 'gray'
}

Tile.propTypes = {
  color: string,
  id: number.isRequired
}
