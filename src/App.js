import './App.css';
import TrafficLight from './components/TrafficLight';
import TodoList from './containers/TodoList';

var todoItems = [
  { title: 'Di choi', isDone: true },
  { title: 'Di hoc', isDone: false },
  { title: 'Di an', isDone: false }
]

// console.log(todoItems);

function App() {
  return (
    <div className="App">
      <h2 style={{ textAlign: 'center' }}>Todo List</h2>
      <TodoList />
      {/* {
          todoItems.length > 0 && todoItems.map((item, index) => {
            return <TodoItem key={index} item={item}/>
          })
        }
        {
          todoItems.length === 0 && "Nothing here"
        } */}
      <hr />
      <TrafficLight />
    </div>
  );
}

export default App;
