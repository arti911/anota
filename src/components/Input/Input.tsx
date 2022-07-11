import { Input, Button, Row } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { SyntheticEvent } from "react";

import { DEFAULT_TODO } from "../../constants";

import { saveTodo, saveEditTodo, toggleEdit } from "../../slices/todoSlice";
import { useAppDispatch, useAppSelector } from "../../hook";

import "./style.scss";

import { ITodoCurrent } from "../../interfaces/modal.interface";

const SEPARATOR = ";";

const InputModal = (props: ITodoCurrent) => {
  const dispatch = useAppDispatch();

  const { isEdit } = useAppSelector((state) => state.todo);

  const onChangeTodoTitle = (event: SyntheticEvent) => {
    const element = event.target as HTMLInputElement;  

    props.handlers.setTodoTitle(element.value);
  };

  const save = (todo: string = "", index: number = 0) => {
    const data = {
      ...DEFAULT_TODO,
      id: Date.now() + index,
      title: todo.trim(),
    };

    dispatch(saveTodo(data));
  };

  const saveEdit = () => {
    if (props.currentTodo !== null) {
      const data = {
        ...props.currentTodo,
        title: props.todoTitle.trim()
      };
  
      dispatch(saveEditTodo(data));
    }
  };

  const onSaveEditinTodo = () => {
    saveEdit();
    dispatch(toggleEdit(false));
    props.handlers.setTodoTitle("");
  };

  const onSaveTodo = () => {
    props.todoTitle
      .trim()
      .split(SEPARATOR)
      .filter((item) => item.trim() !== "")
      .map((item, index) => save(item, index));

      props.handlers.setTodoTitle("");
  };

  const onClose = () => {
    props.handlers.setTodoTitle("");
    props.handlers.setCurrentTodo(null);
    dispatch(toggleEdit(false));
  };

  return (
    <Row className="anota-row">
      <Input
        placeholder="Добавьте пункт"
        onChange={onChangeTodoTitle}
        value={props.todoTitle}
      />
      <Button
        type="primary"
        disabled={props.todoTitle.length === 0}
        onClick={isEdit ? onSaveEditinTodo : onSaveTodo}
      >
        {isEdit ? "Сохранить изменения" : "Добавить"}
      </Button>
      <Button icon={<CloseOutlined />} type="text" onClick={onClose}></Button>
    </Row>
  );
};

export default InputModal;
