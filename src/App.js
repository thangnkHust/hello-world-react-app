import './App.css';
import TrafficLight from './components/TrafficLight';
import TodoList from './containers/TodoList';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card card-white">
            <div className="card-body">
              <TodoList />
            </div>
          </div>
        </div>
      </div>
      <TrafficLight />
    </div>
  );
}

export default App;
