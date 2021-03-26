import './TodoItem.css';
import classNames from 'classnames';

function TodoItem(props){
  // const item = props.item
  // if(item.isDone){
  //   className += ' TodoItem-done'
  // }
  console.log(props);
  return(
    <div className={classNames('TodoItem')}>
      {
        props.todos.filter(item => item.text).map((item) => {
          return <p>{item.text}</p>
        })
      }
    </div>
  )
}

export default TodoItem;