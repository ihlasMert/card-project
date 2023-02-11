import React, { useState } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import classes from '../Users/AddUser.module.css'

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState('')
  const [enteredAge, setEnteredAge] = useState('')

  const addUserHandler = (event) => {
    event.preventDefault()
    if (
      enteredUserName.trim().length === 0 ||
      enteredAge.trim().length === 0
    ) {
      return
    }
    if (+enteredAge <= 0) {
      return
    }

    console.log(enteredAge, enteredUserName)
    setEnteredAge('')
    setEnteredUserName('')
  }
  const userNameChangehandler = (event) => {
    setEnteredUserName(event.target.value)
  }
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          id='username'
          onChange={userNameChangehandler}
          value={enteredUserName}
        />
        <label htmlFor='username'>Age(years)</label>
        <input
          type='number'
          id='age'
          onChange={ageChangeHandler}
          value={enteredAge}
        />
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser
