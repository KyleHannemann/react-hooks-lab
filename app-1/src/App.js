import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import List from './components/List'
import AddTodo from './components/AddTodo'

function App() {
  const [todo, setTodo] = useState([]);
  const [id, setId] = useState(1)
  function addNewTodo(newtodo){
    const newTodo = {
      name: newtodo,
      id: id 
    }
    setId(id + 1)
    setTodo([...todo, newTodo]);
    console.log(todo)
  }
  function completeTodo(id){
    let newTodos = todo.filter(el=>el.id !== id);
    setTodo(newTodos)
  }
  return (
    <div id="container">
      <AddTodo addNewTodo={addNewTodo}/>
      <List todos={todo} completeTodo={completeTodo}/>
    </div>
    
  );
}

export default App;
