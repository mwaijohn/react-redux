import React from 'react'
import {useDispatch} from 'react-redux';
//import the actions
import {addTodo} from '../redux/todoslice'

function AddTodos() {
    const [value, setValue] = React.useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(value){
            dispatch(
                addTodo({
                    title: value
                })
            )
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <br />
            <label>Enter To do title</label>
            <br />
            <input onChange={(event) => setValue(event.target.value)}
                type={"text"} name="title" />
            <br />
            <br />
            <input type={"submit"} value="submit" />
        </form>
    )
}

export default AddTodos