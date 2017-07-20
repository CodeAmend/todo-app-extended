let AddTodoForm = ({ onSubmit }) => {

  let input;

  return (
    <form onSubmit={ e => { onSubmit(input.value) } }>
      <input ref={ node => { input = node } } />
      <button type="submit">Add Todo</button>
    </form>
  )
}

export default AddTodoForm;

