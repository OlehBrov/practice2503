import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import css from './ListStudy.module.css';

const ListItem = ({ todo }) => 
  <li className={css.listStudy}>
    <p>{todo.task}</p>
    <div>
      <button>
        <AiFillEdit />
      </button>
      <button>
        <AiFillDelete />
      </button>
    </div>
  </li>;
;

export const ListStudy = ({ todos }) => {
    if (!todos.length) {
        return
    }
    return <ul>{
        todos.map((todo) => {
            return <ListItem todo={todo} key={todo.id} />
        })}
</ul >
        
};
