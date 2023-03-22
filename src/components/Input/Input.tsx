import { CloseOutlined } from '@ant-design/icons';
import { Input, Button, Row } from 'antd';
import { SyntheticEvent } from 'react';

import DEFAULT_TODO from '../../constants';

import { useAppDispatch, useAppSelector } from 'hook';
import { ITodo, ITodoCurrent } from 'interfaces';
import { saveTodo, saveEditTodo, toggleEdit } from 'slices/todoSlice';

import './style.scss';

const SEPARATOR = ';';

interface InputModalProps extends ITodoCurrent {
  onChangeTodo: (value: string) => void;
  onChangeCurrentTodo: (value: ITodo | null) => void;
}

const InputModal = (props: InputModalProps) => {
  const { todoTitle, currentTodo, onChangeTodo, onChangeCurrentTodo } = props;

  const dispatch = useAppDispatch();

  const { isEdit } = useAppSelector((state) => state.todo);

  const onChangeTodoTitle = (event: SyntheticEvent) => {
    const element = event.target as HTMLInputElement;

    onChangeTodo(element.value);
  };

  const save = (todo = '', index = 0) => {
    dispatch(
      saveTodo({
        ...DEFAULT_TODO,
        id: Date.now() + index,
        title: todo.trim(),
      })
    );
  };

  const saveEdit = () => {
    if (currentTodo !== null) {
      dispatch(
        saveEditTodo({
          ...currentTodo,
          title: todoTitle.trim(),
        })
      );
    }
  };

  const onSaveEditinTodo = () => {
    saveEdit();
    dispatch(toggleEdit(false));
    onChangeTodo('');
  };

  const onSaveTodo = () => {
    todoTitle
      .trim()
      .split(SEPARATOR)
      .filter((item) => item.trim() !== '')
      .forEach((item, index) => save(item, index));

    onChangeTodo('');
  };

  const onClose = () => {
    onChangeTodo('');
    onChangeCurrentTodo(null);
    dispatch(toggleEdit(false));
  };

  return (
    <Row className="anota-row">
      <Input placeholder="Добавьте пункт" onChange={onChangeTodoTitle} value={todoTitle} />
      <Button type="primary" disabled={todoTitle.length === 0} onClick={isEdit ? onSaveEditinTodo : onSaveTodo}>
        {isEdit ? 'Сохранить изменения' : 'Добавить'}
      </Button>
      <Button icon={<CloseOutlined />} type="text" onClick={onClose} />
    </Row>
  );
};

export default InputModal;
