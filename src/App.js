
import './App.css';
import {useState} from 'react' ;
import UserList from './Components/UserList';
import {Switch, Route} from 'react-router-dom' ;
import Profile from './Components/Profile';

function App() {
  const [listOfUser, setListOfUser] = useState (['Hello']) ;
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
      <UserList listOfUser={listOfUser} setListOfUser={setListOfUser}/>
      </Route>
      <Route  path='/profile/:id' render={(props) => <Profile listOfUser={listOfUser} {...props}/>} />
      </Switch>
    </div>
  );
}

export default App;
