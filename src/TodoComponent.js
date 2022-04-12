import { useReducer } from 'react'

function reducer (todos, action) {
  switch (action.type) {
    case 'ADD_TODO': {
      const nextId = todos.length ? todos[todos.length - 1].id + 1 : 1
      return [...todos, {
        id: nextId,
        completed: false,
        ...action.todo
      }]
    }

    case 'REMOVE_TODO':
      return todos.filter(todo => todo.id !== action.id)

    case 'UPDATE_TODO':
      return todos.map(todo => todo.id === action.todo.id ? action.todo : todo)

    case 'TOGGLE_COMPLETED':
      return todos.map(todo => todo.id === action.id ? { ...todo, completed: !todo.completed } : todo)

    default:
      return todos
  }
}

const TodoComponent = props => {
  const [todos, dispatch] = useReducer(reducer, [])

  return <div>

        <button onClick={e => dispatch({
          type: 'ADD_TODO',
          todo: {
            title: 'Belajar hooks'
          }
        })}> ADD TODO </button>

        <button onClick={e => dispatch({
          type: 'REMOVE_TODO',
          id: 1 // <--- sesuai ID todo yang ingin dihapus
        })}> REMOVE TODO </button>

        <button onClick={e => dispatch({
          type: 'UPDATE_TODO',
          todo: {
            id: 1, // <--- sesuai todo yang ingin diupdate
            title: 'Judul todo baru'
            // ... dst data lainnya
          }
        })}> UPDATE TODO </button>

        <button onClick={e => dispatch({
          type: 'TOGGLE_COMPLETED',
          id: 1 // <---- sesuai ID todo yang ingin di _toggle_
        })}> TOGGLE </button>

        {console.log(todos[0])}
    </div>
}

export default TodoComponent
