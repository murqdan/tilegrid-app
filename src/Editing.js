import { useState, useEffect } from 'react'

const Editing = () => {
  const [text, setText] = useState('') // <--- state

  useEffect(function () {
    if (text.length) localStorage.setItem('edit-text', text)
  })

  useEffect(function () {
    setText(localStorage.getItem('edit-text'))
  }, [])

  return (
    <textarea
        type="text"
        value={text} // <--- value mengambil nilai text
        onChange={e => setText(e.target.value)} // <--- update state text ketika nilai textarea berubah;
    />
  )
}

export default Editing
