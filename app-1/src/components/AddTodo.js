import {useState} from 'react';

const AddTodo = (props) => {
    const [newTodo, setNewTodo] = useState('');

    return(
        <div>
            <input value={newTodo} onChange={(e)=>{
                setNewTodo(e.target.value)
            }}/>
            <input type="submit" onClick={()=>{
                props.addNewTodo(newTodo);
                setNewTodo('')
            }}/>
        </div>
    )
}
export default AddTodo