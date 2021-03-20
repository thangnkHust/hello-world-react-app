import './App.css';
import TodoItem from './components/TodoItem';

var todoItems = [
  {title: 'Di choi', isDone: true},
  {title: 'Di hoc', isDone: false},
  {title: 'Di an', isDone: false}
]

console.log(todoItems);

function App() {
  return (
    <div className="App">
        <h2>Todo List</h2>
        {
          todoItems.length > 0 && todoItems.map((item, index) => {
            return <TodoItem key={index} item={item}/>
          })
        }
        {
          todoItems.length === 0 && "Nothing here"
        }
    </div>
  );
}

export default App;
