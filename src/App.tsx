import React, {useEffect, useRef, useState} from 'react';
import './App.css';


type TasksType = {
  userId: number
  id: number
  title: string
  completed: boolean
}

export default function App() {
  const [tasks, setTasks] = useState<TasksType[]>([])
  // const [value, setValue] = useState("")
  let value = useRef<HTMLInputElement>(null)

  const giveMeData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setTasks(json))
  }

  useEffect(() => {
    giveMeData()
  }, [])

  const showTasksHandler = () => {
    giveMeData()
  }

  const hideTasksHandler = () => {
    setTasks([])
  }

  const addTaskHandler = () => {
    if (!value) return
    if (value.current) {
      setTasks([{
        "userId": 1,
        "id": tasks.length + 1,
        "title": value.current.value,
        "completed": false
      }, ...tasks])
      value.current.value = ""
    }
  }

  console.log(tasks)
  return (
    <div className="App">
      <button onClick={showTasksHandler}>+</button>
      <button onClick={hideTasksHandler}>-</button>
      <div>
        <input type="text" ref={value}/>
        <button onClick={addTaskHandler}>Add
        </button>
      </div>
      <ol>
        {tasks.map(el => {
          return (
            <li key={el.id}>
              <span>{el.id} - </span>
              <span>{el.userId} - </span>
              <span>{el.title} - </span>
              <input type="checkbox" checked={el.completed}/>
            </li>
          )
        })}
      </ol>

    </div>
  );
}