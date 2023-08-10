import React from 'react';
import s from './SuperButton.module.css'

type PropsType = {
  title?: string
  callBack: () => void
  children?: React.ReactNode
  color?: string
  disabled?: boolean
}

export const SupperButton: React.FC<PropsType> = (props) => {
  const {color, disabled, title, callBack, children, ...otherProps} = props

  const buttonStyle = `
  ${s.button}
  ${color === 'red' ? s.red : color === 'secondary' ? s.secondary : s.default}
  ${disabled ? s.disabled : ''}
  `

  const onClickHandler = () => {
    callBack()
  }

  return (
    <button
      onClick={onClickHandler}
      className={buttonStyle}
    >{title || children}</button>
  );
}