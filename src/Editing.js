import { useState, useEffect } from 'react'

const Editing = () => {
  const [text, setText] = useState('') // <--- state
  const [seconds, setSeconds] = useState(0) // <--- kita buat state baru = seconds

  useEffect(function () {
    console.log('sinkronisasi ke local storage')
    if (text.length) localStorage.setItem('edit-text', text)
  }, [text])

  useEffect(function () {
    setText(localStorage.getItem('edit-text'))

    // kita tangkap id interval ke dalam variabel `intervalId`
    const intervalId = setInterval(() => {
      setSeconds(second => second + 1) // increment seconds
    }, 1000) // <--- jalankan setiap 1000 milidetik (1 detik)

    // ------ CLEAN UP FUNCTION ---------//
    // fungsi ini hanya akan dipanggil setelah komponen unmounted
    return function () {
      clearInterval(intervalId) // <--- panggil clearInterval di sini
    }
    // ---------------------------------//
  }, [])

  return (
    <>
      Waktu: {Math.floor(seconds / 60)} menit {seconds % 60} detik
      <br/>
      <textarea
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
      />
    </>
  )
}

export default Editing
