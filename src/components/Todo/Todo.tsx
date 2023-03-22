import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, List, Checkbox, Popconfirm } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { useCallback } from 'react';

import { SOLUTION } from 'components/Actions/constants';
import DragHandle from 'components/DragHandle';
import { useAppDispatch, useAppSelector } from 'hook';

import { ITodo } from 'interfaces';
import { checkTodo, removeTodo, toggleEdit } from 'slices/todoSlice';

interface TodoProps {
  todo: ITodo;
  index: number;
  onChangeTodoTitle: (value: string) => void;
  onEditTodo: (value: ITodo) => void;
}

const TodoModal = (props: TodoProps) => {
  const { todo, index, onChangeTodoTitle, onEditTodo } = props;
  const dispatch = useAppDispatch();

  const { todos } = useAppSelector((state) => state.todo);

  const edit = useCallback(() => {
    dispatch(toggleEdit(true));
    onChangeTodoTitle(todo.title);
    onEditTodo(todo);
  }, [dispatch, onEditTodo, onChangeTodoTitle, todo]);

  const confirm = useCallback(() => {
    dispatch(removeTodo(index));
    // message.success(`${todo.title} успешно удален!`);
  }, [dispatch, index]);

  const actions = [
    <Button shape="circle" icon={<EditOutlined />} type="primary" onClick={edit} key="button" />,
    <Popconfirm
      title={`Удалить ${todo.title}?`}
      okText={SOLUTION.YES}
      cancelText={SOLUTION.NO}
      onConfirm={confirm}
      key="popconfirm"
    >
      <Button shape="circle" icon={<DeleteOutlined />} danger />
    </Popconfirm>,
  ];

  const onCheck = (event: CheckboxChangeEvent): void => {
    const elements = event.target as HTMLInputElement;

    dispatch(
      checkTodo({
        index,
        todo: {
          ...todos[index],
          isCheck: elements.checked,
        },
      })
    );
  };

  return (
    <List.Item className="modal-list__item" actions={actions}>
      <DragHandle />
      <Checkbox checked={todo.isCheck} onChange={onCheck}>
        {todo.title}
      </Checkbox>
    </List.Item>
  );
};

export default TodoModal;
