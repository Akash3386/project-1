import React,{ useState} from 'react';

import AddUsers from './components/Users/User';
import UserList from './components/Users/UserList';

function App() {
  const [enteredValue,setenteredvalue] = useState([])

  const OnaddUserHandler = (uName,uAge) => {
     setenteredvalue((prevEnteredValue)=>{
      return [...prevEnteredValue, {name:uName,age:uAge, id: Math.random().toString()}]
     })
  }

  return (
    <div>
      <AddUsers onAddUser={OnaddUserHandler}/>
      <UserList users={enteredValue}></UserList>

    </div>
  );
}

export default App;
