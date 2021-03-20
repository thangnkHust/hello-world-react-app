import './TodoItem.css';

function TodoItem(props){
  const item = props.item
  let className = 'TodoItem'
  if(item.isDone){
    className += ' TodoItem-done'
  }
  return(
    <div className={className}>
      <p>{item.title}</p>
    </div>
  )
}

export default TodoItem;