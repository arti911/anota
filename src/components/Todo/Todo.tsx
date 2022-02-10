import { Button, List, Checkbox, Popconfirm, message } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useCallback } from "react";
import { CheckboxChangeEvent } from "antd/lib/checkbox";

import { useAppDispatch, useAppSelector } from "../../hook";

import DragHandle from "../DragHandle";

import { checkTodo, removeTodo, toggleEdit } from "../../slices/todoSlice";
import { SOLUTION } from "../Actions/constants";
import { ITodoComponent } from "./interface";

const TodoModal = (props: ITodoComponent) => {
  const dispatch = useAppDispatch();

  const { todos } = useAppSelector((state) => state.todo);

  const edit = useCallback(() => {
    dispatch(toggleEdit(true));
    props.handlers.setTodoTitle(props.todo.title);
    props.handlers.setCurrentTodo(props.todo);
  }, [ dispatch, props.todo, props.handlers ]);

  const confirm = useCallback(() => {
    dispatch(removeTodo(props.index));
    message.success(`${props.todo.title} успешно удален!`);
  }, [ dispatch, props.index, props.todo ]);

  const actions = [
    <Button
      shape="circle"
      icon={<EditOutlined />}
      type="primary"
      onClick={edit}
    ></Button>,
    <Popconfirm
      title={`Удалить ${props.todo.title}?`}
      okText={SOLUTION.YES}
      cancelText={SOLUTION.NO}
      onConfirm={confirm}
    >
      <Button shape="circle" icon={<DeleteOutlined />} danger={true}></Button>
    </Popconfirm>
  ];

  const onCheck = (event: CheckboxChangeEvent): void => {
    const elements = event.target as HTMLInputElement;

    dispatch(
        checkTodo({
          index: props.index,
          todo: {
            ...todos[props.index],
            isCheck: elements.checked,
          }
        })
      );
    };

  return (
    <List.Item className="modal-list__item" actions={actions}>
      <DragHandle />
      <Checkbox checked={props.todo.isCheck} onChange={onCheck}>
        {props.todo.title}
      </Checkbox>
    </List.Item>
  );
};

export default TodoModal;
