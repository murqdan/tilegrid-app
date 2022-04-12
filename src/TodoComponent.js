import { useReducer } from 'react'

function reducer (todos, action) {
  switch (action.type) {
    // -------------------------
    case 'ADD_TODO': {
      const nextId = todos.length ? todos[todos.length - 1].id + 1 : 1
      return [...todos, {
        id: nextId,
        completed: false,
        ...action.todo
      }]
    }
    // -------------------------

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
        {todos}
    </div>
}

export default TodoComponent
