interface Props{
  title: string
  callBack: () => void
}

export const Button = (props: Props) => {
  const onClickHandler = () => {
    props.callBack()
  }

  return (
    <button onClick={onClickHandler}>{props.title}</button>
  )
}