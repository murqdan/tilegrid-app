import './style.css'
import { string, number, func } from 'prop-types'

export default function Tile ({ color, id, onDoubleClick }) {
  return (
    <div className="tile" style={{ backgroundColor: color }} onDoubleClick={onDoubleClick}/>
  )
}

Tile.propTypes = {
  color: string.isRequired,
  id: number.isRequired,
  onDoubleClick: func.isRequired
}
