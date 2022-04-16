import { useSelector, useDispatch } from 'react-redux'
import AddTileButton from '../AddTileButton'
import Tile from '../Tile'

const colors = ['red', 'blue', 'pink', 'yellow', 'gray']

export default function Grid () {
  const gridTiles = useSelector(state => state.grid)
  const dispatch = useDispatch()

  return (
    <div>
        <div style={{ maxWidth: 350, overflow: 'hidden' }}>
         {gridTiles.map((tile, index) => {
           return <Tile {...tile} key={index} onDoubleClick={e => dispatch({ type: 'REMOVE_TILE', id: tile.id })}/>
         })}
        </div>
        <br/>
        <div>
          {colors.map(color => {
            return <AddTileButton
                key={color}
                color={color}
                onClick={e => dispatch({ type: 'ADD_TILE', color })}
              />
          })}
        </div>
    </div>
  )
}
