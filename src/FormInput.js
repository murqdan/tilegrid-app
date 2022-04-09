import * as React from 'react'
import InputText from './InputText'

const FormInput = () => {
  const [name, setName] = React.useState('')

  const handleSubmit = event => {
    event.preventDefault()
    // sent to server
    alert(name)
  }

  return <form onSubmit={handleSubmit}>
    <InputText label='Name' value={name} onChange={(e) => setName(e.target.value)} />
    <input type='submit' value='Submit' />
  </form>
}

export default FormInput
