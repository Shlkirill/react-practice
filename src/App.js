import React from 'react'
import Header from './components/Header/Header';
import ToDoListContainer from './components/toDoList/ToDiListContainer';
import { Route, Redirect } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Route path='/toDoList'> <ToDoListContainer /> </Route>
        <Route path='/*'><Redirect to = {'/toDoList'} /></Route>
      </div >
    )
  }
}

export default App;
