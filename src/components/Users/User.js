import React, {useState, useRef} from "react";

import Card from '../UI/Card';

import Button from '../UI/Button'

import classes from './User.module.css';

import ErrorModal from "../UI/ErrorModal";

import Wrapper from "../Helper/Wrapper";

const AddUsers = props => {
    // const [enteredUserName,setenteredUserName]= useState('')
    // const [enteredAge,setenteredAge] = useState('')

    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const collegeNameRef = useRef();

    const [error,setError] = useState()

    const addUsersHandler = (event) =>{
        event.preventDefault();
        const enteredName = nameInputRef.current.value
        const enteredUserAge= ageInputRef.current.value
        const userCollegeName= collegeNameRef.current.value
        if(enteredName.trim().length ===0 || enteredUserAge.trim().length === 0){
            setError({
                title: "Invalid Input",
                message: "Please enter a valid name and age(non empty value)"
            })
            return;
        }
        if(+enteredUserAge < 1){
            setError({
                title: "Invalid age",
                message: "Please enter age (age>0)"
            })
            return;
        }
        // console.log(enteredName,enteredUserAge,userCollegeName)
        props.onAddUser(enteredName,enteredUserAge,userCollegeName)
        // setenteredAge('');
        // setenteredUserName('');
        nameInputRef.current.value= '';
        ageInputRef.current.value= '';
        collegeNameRef.current.value='';
    }

    // const userNameHandler = (event) => {
    //     setenteredUserName(event.target.value)
    // }
    // const userAgeHandler = (event) => {
    //     setenteredAge(event.target.value)
    // }

    const errorHandler = () => {
        setError(null);
    }


    return (
        <React.Fragment>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
        <Card className={classes.input}>
         <form onSubmit={addUsersHandler}>
            <label htmlFor="UserName">Username</label>
            <input 
               id="UserName"
               type="text" 
            //    value={enteredUserName} 
            //    onChange={userNameHandler}
               ref={nameInputRef}
               ></input>
            <label htmlFor="age">Age(years)</label>
            <input 
               id="age" 
               type="number" 
            //    value={enteredAge} 
            //    onChange={userAgeHandler}
               ref={ageInputRef}
               ></input>
            <label htmlFor="collegeName">College Name</label>  
            <input 
               id='collegeName'
               type='text' 
               ref={collegeNameRef}
               ></input>

            <Button type="submit">Add User</Button>
         </form>
        </Card>
        </React.Fragment>
    )

}

export default AddUsers;