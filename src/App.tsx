import React from 'react';
import './App.css';
import {SupperButton} from "./components/SuperButton";
import {SuperTodoList} from "./components/SuperTodoList";

export type TaskType = {
  id: number
  title: string
  isDone: boolean
}

function App() {
  const tasks: TaskType[] = [
    {id: 1, title: "HTML&CSS", isDone: true},
    {id: 2, title: "JS", isDone: true},
    {id: 3, title: "ReactJS", isDone: false}
  ]
  return (
    <div>
      <div>
        {/*<SupperButton title={"super button"} callBack={() => console.log('hi')}/>*/}
        <SupperButton callBack={() => console.log('hi')} color={'red'}>red</SupperButton>
        <SupperButton callBack={() => console.log('hi')} disabled>disabled</SupperButton>
        <SupperButton callBack={() => console.log('hi')} color={'secondary'}>secondary</SupperButton>
      </div>

      <SuperTodoList tasks={tasks}>
        <SupperButton callBack={() => console.log('hi')} disabled>red</SupperButton>
        <h3>Raise for glorious victory</h3>
      </SuperTodoList>

      <SuperTodoList tasks={tasks}>
        <SupperButton callBack={() => console.log('hi')} color={'red'}>red</SupperButton>
        <SupperButton callBack={() => console.log('hi')} disabled>disabled</SupperButton>
        <input type="text"/>
        <input type="text"/>
        <h3>Raise for glorious victory</h3>
      </SuperTodoList>

      <SuperTodoList tasks={tasks}>
        <SupperButton callBack={() => console.log('hi')} color={'primary'}>red</SupperButton>
        <input type="text"/>
        <h3>Raise for glorious victory</h3>
      </SuperTodoList>

    </div>
  );
}

export default App;
