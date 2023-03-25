import React,{ useState} from 'react';

import AddUsers from './components/Users/User';
import UserList from './components/Users/UserList';
import Wrapper from './components/Helper/Wrapper';

function App() {
  const [enteredValue,setenteredvalue] = useState([])

  const OnaddUserHandler = (uName,uAge) => {
     setenteredvalue((prevEnteredValue)=>{
      return [...prevEnteredValue, {name:uName,age:uAge, id: Math.random().toString()}]
     })
  }

  return (
    <Wrapper>
      <AddUsers onAddUser={OnaddUserHandler}/>
      <UserList users={enteredValue}></UserList>

    </Wrapper>
  );
}

export default App;
