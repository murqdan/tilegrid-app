/*
function Hello (props) {
  return `Hello ${props.name}!`
}
*/

/*
function Hello (props) {
  const { name } = props
  return `Hello ${name}!`
}
*/

/*
function Hello ({ name }) {
  return `Hello ${name}!`
}
*/

function Hello ({ name, gretting }) {
  return `Hello ${name}, ${gretting}!`
}

// nilai default pada props
Hello.defaultProps = {
  name: 'anonim'
}

export default Hello
