import ToDoList from './components/toDoList/ToDoList';
import Header from './components/Header/Header';

class App extends React.Component {
  
  componentDidMount() {

  };
  render() {
    <div className="App">
      <div className="wrapper">
        <Header />
        <ToDoList />
      </div>
    </div>
  };
}

export default App;
