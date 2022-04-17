import { useSelector, useDispatch } from 'react-redux'
import AddTileButton from '../AddTileButton'
import Tile from '../Tile'
import { addTileWithChecking, removeTile } from '../../features/Grid/actions'
import './style.css'

const colors = ['gold', 'lightsalmon', 'mediumvioletred', 'darkturquoise', 'chartreuse']

export default function Grid () {
  const gridTiles = useSelector(state => state.grid)
  const dispatch = useDispatch()

  return (
    <div className='Grid-center'>
        <div style={{ maxWidth: 400, overflow: 'hidden' }}>
         {gridTiles.map((tile, index) => {
           return <Tile {...tile} key={index} onDoubleClick={e => dispatch(removeTile(tile.id))}/>
         })}
        </div>
        <br/>
        <div>
          {colors.map(color => {
            return <AddTileButton
                key={color}
                color={color}
                onClick={e => dispatch(addTileWithChecking(color))}
              />
          })}
        </div>
    </div>
  )
}
