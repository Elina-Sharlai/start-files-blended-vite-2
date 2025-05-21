import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import Text from '../Text/Text';
import style from './TodoListItem.module.css';

const TodoListItem = ({ data, number, onDelete, onEdit }) => {
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO #{number}
      </Text>
      <Text>{data.text}</Text>
      <button
        className={style.deleteButton}
        type="button"
        onClick={() => onDelete(data.id)}
      >
        <RiDeleteBinLine size={24} />
      </button>
      <button className={style.editButton} type="button">
        <RiEdit2Line size={24} onClick={() => onEdit(data.id)} />
      </button>
    </div>
  );
};

export default TodoListItem;
