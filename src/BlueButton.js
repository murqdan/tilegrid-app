import * as React from 'react'

const BlueButton = ({ onCustomClick, caption }) => {
  return <button style={{ border: '2px solid blue' }} onClick={onCustomClick}>
    {caption}
</button>
}

export default BlueButton
