import React, {useState} from "react";

import Card from '../UI/Card';

import Button from '../UI/Button'

import classes from './User.module.css';

import ErrorModal from "../UI/ErrorModal";

const AddUsers = props => {
    const [enteredUserName,setenteredUserName]= useState('')
    const [enteredAge,setenteredAge] = useState('')
    const [error,setError] = useState()

    const addUsersHandler = (event) =>{
        event.preventDefault();
        if(enteredUserName.trim().length ===0 || enteredAge.trim().length === 0){
            setError({
                title: "Invalid Input",
                message: "Please enter a valid name and age(non empty value)"
            })
            return;
        }
        if(+enteredAge < 1){
            setError({
                title: "Invalid age",
                message: "Please enter age (age>0)"
            })
            return;
        }
        console.log(enteredUserName,enteredAge)
        props.onAddUser(enteredUserName,enteredAge)
        setenteredAge('');
        setenteredUserName('');
    }

    const userNameHandler = (event) => {
        setenteredUserName(event.target.value)
    }
    const userAgeHandler = (event) => {
        setenteredAge(event.target.value)
    }

    const errorHandler = () => {
        setError(null);
    }


    return (
        <div>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
        <Card className={classes.input}>
         <form onSubmit={addUsersHandler}>
            <label htmlFor="UserName">Username</label>
            <input id="UserName"type="text" value={enteredUserName} onChange={userNameHandler}></input>
            <label htmlFor="age">Age(years)</label>
            <input id="age" type="number" value={enteredAge} onChange={userAgeHandler}></input>
            <Button type="submit">Add User</Button>
         </form>
        </Card>
        </div>
    )

}

export default AddUsers;