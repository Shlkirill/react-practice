import React from 'react'
import Header from './components/Header/Header';
import ToDoListContainer from './components/toDoList/ToDiListContainer';

class App extends React.Component {

  render() {
    return (
      <div className="App">
          <ToDoListContainer />
      </div>
    )
  };
}

export default App;
