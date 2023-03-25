import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import css from './ListStudy.module.css';

const ListItem = ({ todo, deleteTodo }) => 
  <li className={css.listStudy}>
    <p>{todo.task}</p>
    <div>
      <button>
        <AiFillEdit />
      </button>
      <button onClick={()=> deleteTodo(todo.id)}>
        <AiFillDelete />
      </button>
    </div>
  </li>;
;

export const ListStudy = ({ todos, deleteTodo }) => {
    if (!todos.length) {
        return
    }
    return <ul>{
        todos.map((todo) => {
            return <ListItem todo={todo} key={todo.id} deleteTodo={deleteTodo} />
        })}
</ul >
        
};
