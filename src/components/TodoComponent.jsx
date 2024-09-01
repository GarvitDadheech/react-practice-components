import { useState } from 'react'

function TodoComponent() {
 const [todos,setTodos] = useState([
  {
  title: "learn solidity",
  description: "abc",
  isCompleted: true
  },
  {
    title: "learn webdev",
    description: "abc",
    isCompleted: false
  }
  ])

  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");

  function onTitleChange(event) {
    setTitle(event.target.value);
  }
  function onDesChange(event) {
    setDescription(event.target.value);
  }

  function onClickHandler() {
    const newTodo = {
      title: title,
      description: description,
      isCompleted: false
    }
    setTodos([...todos,newTodo]);
    setTitle('');
    setDescription('');
  }

  return (
    <>
    <div className='input-taker'>
      <label for="title">Title: </label>
      <input type="text" id="title"  value={title}  onChange={onTitleChange}/>
      <label for="des">Descritption: </label>
      <input type="text" id="des" value={description} onChange={onDesChange}/>
    </div>
    <button onClick={onClickHandler}>Add todo</button>
    <div className='todo-list'>
      <h1>Todo List</h1>
      <ul>
          {todos.map((todo) => (
            <li>
              <h2>{todo.title}</h2>
              <h3>{todo.description}</h3>
            </li>
          ))}
      </ul>
    </div>
    </>
  )
}

export default TodoComponent
