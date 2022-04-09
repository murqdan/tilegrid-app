import * as React from 'react'
import InputText from './InputText'

// const FormMultiple = () => {
//   const [name, setName] = React.useState('')
//   const [email, setEmail] = React.useState('')
//   const [phone, setPhone] = React.useState('')

//   const handleSubmit = event => {
//     event.preventDefault()
//     // sent to server
//     alert(`
//         name: ${name}
//         email: ${email}
//         phone: ${phone}
//     `)
//   }

//   return <form onSubmit={handleSubmit}>
//     <InputText label='Name' value={name} onChange={(e) => setName(e.target.value)} />
//     <InputText label='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
//     <InputText label='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
//     <input type='submit' value='Submit' />
//   </form>
// }

const FormMultiple = () => {
  // state form memiliki 3 item data yaitu name, phone, dan email
  const [form, setForm] = React.useState({
    name: '',
    phone: '',
    email: ''
  })

  const handleSubmit = event => {
    event.preventDefault()
    // sent to server
    alert(
      `
      Nama: ${form.name}
      Email: ${form.email}
      Phone: ${form.phone}
    `)
  }

  return (
    <form onSubmit={handleSubmit}>
        <InputText label='Name' value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <InputText label='Phone' value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        <InputText label='Email' value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input type='submit' value='Submit' />
    </form>
  )
}

export default FormMultiple
