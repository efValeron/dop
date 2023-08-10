import React from 'react';
import {TaskType} from "../App";

type PropsType = {
  tasks: TaskType[]
  children: React.ReactNode
}

export const SuperTodoList: React.FC<PropsType> = (props) => {
  const {children, tasks, ...otherProps} = props

  const onClickHandler = () => {

  }

  return (
    <div>
      <ol>
        {
          tasks.map(t => {
            return (
              <li key={t.id}>
                <span>{t.title}</span>
                <input type="checkbox" checked={t.isDone}/>
              </li>
            )
          })
        }
      </ol>
      {children}
    </div>
  );
}