let TodoList = ({ onTodoClick, todos }) => {

  return (
    <ul>
      { todos.map( todo => 
        <Todo key={todo.id} ...todo onClick={ () => onTodoClick(todo.id) } />
      )}
    </ul>
  )
}

export default TodoList;

