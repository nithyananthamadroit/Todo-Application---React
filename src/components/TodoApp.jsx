import "../styles/todoapp.css"
export default function TodoApp() {
    const DEFAULT_TODOS = [
        {id:1,text:"Learn React", completed:false},
        {id:2,text:"Learn CSS", completed:false},
    ];
    return(
        <div className="todo-container">
            <h2 className="todo-header">My Tasks</h2>
            <form className="input-group">
                <input 
                type="text" 
                className="todo-input" 
                />
                <button className="add-btn">Add</button>
            </form>
            <ul className="todo-list">
                <li className="todo-item">
                    <span className="todo-text">Item1</span>
                    <button className="delete-btn">Delete</button>
                </li>
                <li className="todo-item">
                    <span className="todo-text">Item2</span>
                    <button className="delete-btn">Delete</button>
                </li>
            </ul>
        </div>
    )
}
