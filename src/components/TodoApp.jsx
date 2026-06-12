import { useEffect, useState } from "react";
import "../styles/todoapp.css"
export default function TodoApp() {
    const DEFAULT_TODOS = [
        {id:1,text:"Learn React", completed:false},
        {id:2,text:"Learn CSS", completed:false},
    ];

    const [todos, setTodos] = useState(getDataFromLocalStorage)
    const [input, setInput] = useState("")
    const [editInput, setEditInput] = useState("")
    const [editId, setEditId] = useState(null)

    useEffect(()=>{
        saveToLocalStorage(todos)
    },[todos])

    function getDataFromLocalStorage() {
        const savedTodos = localStorage.getItem("my-todos")
        return savedTodos ? JSON.parse(savedTodos) : DEFAULT_TODOS
    }

    function saveToLocalStorage(data) {
        localStorage.setItem("my-todos",JSON.stringify(data))
    }

    function handleAdd(e){
        e.preventDefault();
        if(input.trim() === ""){
            return alert("Please enter a data")
        }

        setTodos([...todos,{id:Date.now(),text:input,completed:false}])
        setInput("")
    }

    function handleDelete(id) {
        setTodos(todos.filter(text => text.id !== id))
    }


    return(
        <div className="todo-container">
            <h2 className="todo-header">My Tasks</h2>
            <form className="input-group" onSubmit={handleAdd}>
                <input 
                type="text" 
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                className="todo-input" 
                />
                <button className="add-btn" type="submit">Add</button>
            </form>
            <ul className="todo-list">
                {
                    todos.map(todo=>(
                        <li className="todo-item" key={todo.id}>
                        <span className="todo-text">{todo.text}</span>
                        <div>
                            <button className="edit-btn">Edit</button>
                            <button className="delete-btn" onClick={()=>handleDelete(todo.id)}>Delete</button>
                        </div>
                        
                        </li>
                    ))
                }
                
            </ul>
        </div>
    )
}
