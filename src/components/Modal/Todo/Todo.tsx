import { Button, List, Checkbox, Popconfirm, message } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../hook";

import DragHandle from "../../DragHandle";

import { checkTodo, removeTodo, toggleEdit } from "./todoSlice";
import { SOLUTION } from "../Actions/constants";
import { ISortTodo } from "../../../interfaces/Modal/types";

const TodoModal = ({
  todo,
  index,
  setTodoTitleHandler,
  setCurrentTodoHandler
}: ISortTodo) => {
  const dispatch = useAppDispatch();

  const todos = useAppSelector((state) => state.todo.todos);

  const edit = useCallback(() => {
    dispatch(toggleEdit(true));
    setTodoTitleHandler(todo.title);
    setCurrentTodoHandler(todo);
  }, [dispatch, todo, setTodoTitleHandler, setCurrentTodoHandler]);

  const confirm = useCallback(() => {
    dispatch(removeTodo(index));
    message.success(`${todo.title} успешно удален!`);
  }, [dispatch, index, todo]);

  const actions = [
    <Button
      shape="circle"
      icon={<EditOutlined />}
      type="primary"
      onClick={edit}
    ></Button>,
    <Popconfirm
      title={`Удалить ${todo.title}?`}
      okText={SOLUTION.YES}
      cancelText={SOLUTION.NO}
      onConfirm={confirm}
    >
      <Button shape="circle" icon={<DeleteOutlined />} danger={true}></Button>
    </Popconfirm>
  ];

  const onCheck = useCallback(
    (event) => {
      dispatch(
        checkTodo({
          index,
          todo: {
            ...todos[index],
            isCheck: event.target.checked
          }
        })
      );
    },
    [dispatch, todos, index]
  );

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
