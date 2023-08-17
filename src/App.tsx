import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";
type TodoListType = {
  id: string
  title: string
  filter: FilterValuesType
}
export type TaskType = {
  id: string
  title: string
  isDone: boolean
}
type TasksRootType = {
  [key: string]: Array<TaskType>
}

function App() {
  let todolistID1 = v1();
  let todolistID2 = v1();

  let [todolists, setTodolists] = useState<Array<TodoListType>>([
    {id: todolistID1, title: 'What to learn', filter: 'all'},
    {id: todolistID2, title: 'What to buy', filter: 'all'},
  ])

  let [tasks, setTasks] = useState<TasksRootType>({
    [todolistID1]: [
      {id: v1(), title: "HTML&CSS", isDone: true},
      {id: v1(), title: "JS", isDone: true},
      {id: v1(), title: "ReactJS", isDone: false},
      {id: v1(), title: "Rest API", isDone: false},
      {id: v1(), title: "GraphQL", isDone: false},
    ],
    [todolistID2]: [
      {id: v1(), title: "HTML&CSS2", isDone: true},
      {id: v1(), title: "JS2", isDone: true},
      {id: v1(), title: "ReactJS2", isDone: false},
      {id: v1(), title: "Rest API2", isDone: false},
      {id: v1(), title: "GraphQL2", isDone: false},
    ]
  });

  function removeTodoList(todolistId: string) {
    setTodolists(todolists.filter(t => t.id !== todolistId))
  }

  function removeTask(todolistId: string, id: string) {
    setTasks({...tasks, [todolistId]: tasks[todolistId].filter(t => t.id !== id)})
  }

  function addTask(todolistId: string, title: string) {
    let task = {id: v1(), title: title, isDone: false};
    setTasks({...tasks, [todolistId]: [task, ...tasks[todolistId]]})
  }

  function changeStatus(todolistId: string, id: string, isDone: boolean) {
    setTasks({...tasks, [todolistId]: tasks[todolistId].map(t => t.id === id ? {...t, isDone} : t)});
  }

  function getFilteredTasks(todolistId: string) {
    switch (todolists.filter(tl => tl.id === todolistId)[0].filter) {
      case "active":
        return tasks[todolistId].filter(t => !t.isDone)
      case "completed":
        return tasks[todolistId].filter(t => t.isDone)
      default:
        return tasks[todolistId]

    }
  }

  function changeFilter(todolistId: string, filter: FilterValuesType) {
    setTodolists(todolists.map(tl => tl.id === todolistId ? {...tl, filter} : tl))
  }

  const renderedTodolists = todolists.map(tl => {
    return <Todolist key={tl.id}
                     removeTodoList={removeTodoList}
                     todolistId={tl.id}
                     title={tl.title}
                     tasks={getFilteredTasks(tl.id)}
                     removeTask={removeTask}
                     changeFilter={changeFilter}
                     addTask={addTask}
                     changeTaskStatus={changeStatus}
                     filter={tl.filter}
    />
  })

  return (
    <div className="App">
      {renderedTodolists}
    </div>
  );
}

export default App;
