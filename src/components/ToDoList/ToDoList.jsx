import css from './ToDoList.module.css'
import { ReactComponent as BinSvg } from '../icons/bin.svg';

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
                        className={css.btn}
                        onClick={()=>onDelete(id)}
                    >
                        <BinSvg 
                        //    className={css.icon} 
                        width='20' 
                        height='20'/>
                    </button>
                </li>
            )}
        </ul >
        </div>
       
    )  
}