import {useState} from 'react';

const List = (props) => {
    return (
        <div id='list'>
            {props.todos.map(el=>{
                return <div id='todoItems'><h3>{el.name}</h3><button onClick={
                   ()=> props.completeTodo(el.id)
                }>complete</button></div>
            })}
        </div>
    )
}
export default List;

