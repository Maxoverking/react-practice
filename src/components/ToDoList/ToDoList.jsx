import css from './ToDoList.module.css'

export const ToDoList = ({todos,onDelete,onChecked}) => {
    const todosComplited = todos.filter(todo => todo.complited);
    return (
        <div className={css.todo_container}>
            < ul className={css.item }> 
            <div>
            <span>Общее кол-во:{todos.length }</span>
            <br />
            <span>Выполненные: {todosComplited.length }</span>
          </div>
            {todos.map(({id,text,complited}) =>
            
                <li key={id} className={css.list}>
                    <input 
                    type="checkbox" 
                    checked={complited}
                    onChange={()=>onChecked(id)}/>
                    <p>{text}</p>
                    <button
                        type="button"
                        
                        onClick={()=>onDelete(id)}
                    >Delete</button>
                </li>
            )}
        </ul >
        </div>
       
    )  
}