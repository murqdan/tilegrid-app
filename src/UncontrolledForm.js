import * as React from 'react'

const UncontrolledForm = () => {
  const inputName = React.useRef(null)

  const handleSubmit = event => {
    event.preventDefault()
    // kirim data form
    alert(inputName.current.value)
  }

  return (
  <form onSubmit={handleSubmit}>
    <label>
        Name: <input type='text' ref={inputName} defaultValue='alex' />
        {/* Catatan: Untuk <input type='checkbox'> and <input type='radio'> kita bisa pakai defaultChecked,
        sedangkan <select> and <textarea> kita bisa menggunakan defaultValue. */}
    </label>
    <input type='submit' value='Submit' />
  </form>
  )
}

export default UncontrolledForm
