import { useSelector, useDispatch } from 'react-redux'
import AddTileButton from '../AddTileButton'
import Tile from '../Tile'

const colors = ['red', 'blue', 'pink', 'yellow', 'gray']

export default function Grid () {
  const gridTiles = useSelector(state => state.grid)
  const dispatch = useDispatch()

  return (
    <div>
        <div style={{ maxWidth: 400, overflow: 'hidden' }}>
         {gridTiles.map((tile, index) => {
           return <Tile {...tile} key={index}/>
         })}
        </div>
        <br/>
        <div>
          {colors.map(color => {
            return <AddTileButton
                key={color}
                color={color}
                onClick={_ => dispatch({ type: 'ADD_TILE', color })}
                />
          })}
        </div>
    </div>
  )
}
