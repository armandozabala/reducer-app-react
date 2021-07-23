import React, { useReducer } from 'react'

import './styles.css';
import { todoReducer } from './todoReducer';


const initialState = [{
     id: new Date().getTime(),
     desc: 'Aprender React',
     done: false
}];




const TodoApp = () => {


    const [ todos, dispatch ] = useReducer(todoReducer, initialState)
    
    console.log(todos);

    const handleSubmit = (e) => {
        e.preventDefault();

       const newTodo = {
           id: new Date().getTime(),
           desc: 'Nueva tarea',
           done: false
       }

       const action = {
            type: 'add',
            payload: newTodo
       }


       dispatch(action);

    }

    return (
        <div>
            <h1>TodoApp ( { todos.length }  ) </h1>
            <hr></hr>
            <div className="row">
                    <div className="col-7">
                        <ul>
                            {
                                todos.map( (todo,i) => (
                                    <li key={todo.id}
                                        className="list-group-item">
                                            <p className="text-center"> {i + 1}. {todo.desc} </p> 
                                            <button className="btn btn-danger">
                                                Borrar
                                            </button>
                                        </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="col-5">
                                <h4>Agregar TODO</h4>
                                <hr></hr>
                                <form onSubmit={ handleSubmit}>
                                     <input type="text"
                                            className="form-control"
                                            name="description"
                                            placeholder="Aprender..."
                                            autoComplete="off"
                                     />
                                     <button className="btn btn-outline-primary mt-1 btn-block" type="submit">
                                            Agregar
                                     </button>
                                </form>
                    </div>  
            </div>

        </div>
    )
}

export default TodoApp
