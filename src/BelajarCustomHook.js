import useToggle from './UseToggle'

const BelajarCustomHook = () => {
  const [statusLampu, toggleLampu] = useToggle()

  return (
    <div>
       Lampu saat ini:  {statusLampu}
       <br/>
       <button onClick={e => toggleLampu('ON')}>Saklar ON</button>
       <button onClick={e => toggleLampu('OFF')}>Saklar OFF</button>
    </div>
  )
}

export default BelajarCustomHook
