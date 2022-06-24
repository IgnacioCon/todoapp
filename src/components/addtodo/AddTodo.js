import {useState} from 'react'

const AddTodo = ({onAdd}) => {

  const [text, setText] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if(!text) {
      alert('Todo can\'t be empty!')
      return
    }

    onAdd(text)
    setText('')
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="addTodo">
        <input 
          type="text" 
          placeholder="New Todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>Submit</button>
      </div>
    </form>
  )
}

export default AddTodo;