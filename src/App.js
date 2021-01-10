import React from 'react'
import Header from './components/Header/Header';
import ToDoListContainer from './components/toDoList/ToDiListContainer';
import { Route, Redirect, Switch } from 'react-router-dom';
import PracticeContainer from './components/Practice/PracticeContainer';

class App extends React.Component {

  render() {
    return (
      <div className="App">
          <Header />
        <Switch>  
          <Route path='/toDoList'> <ToDoListContainer /> </Route>
          <Route path='/practice'><PracticeContainer /></Route>
          <Route path='/*'><Redirect to={'/toDoList'} /></Route>
        </Switch>
      </div >
    )
  }
}

export default App;
