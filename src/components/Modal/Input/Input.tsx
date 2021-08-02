import { Input, Button, Row } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useCallback } from "react";

import { DEFAULT_TODO } from "../../../constants";

import { saveTodo, saveEditTodo, toggleEdit } from "../Todo/todoSlice";
import { useAppDispatch, useAppSelector } from "../../../hook";

import "./style.scss";

import { ITodoCurrent } from "../../../interfaces/Modal/types";

const SEPARATOR = ";";

const InputModal = (props: ITodoCurrent) => {
  const dispatch = useAppDispatch();

  const isEdit = useAppSelector((state) => state.todo.isEdit);

  const onChangeTodoTitle = useCallback(
    ({ target }) => {
      props.setTodoTitleHandler(target.value);
    },
    [props]
  );

  const save = useCallback((todo: string = "", index: number = 0) => {
    const data = {
      ...DEFAULT_TODO,
      id: Date.now() + index,
      title: todo.trim(),
    };

    dispatch(saveTodo(data));
  }, [ dispatch ]);

  const saveEdit = useCallback(() => {
    const data = {
      ...props.currentTodo,
      title: props.todoTitle.trim()
    };

    dispatch(saveEditTodo(data));
  }, [ dispatch, props ]);

  const onSaveEditinTodo = useCallback(() => {
    saveEdit();
    dispatch(toggleEdit(false));
    props.setTodoTitleHandler("");
  }, [ props, saveEdit, dispatch ]);

  const onSaveTodo = useCallback(() => {
    props.todoTitle
      .trim()
      .split(SEPARATOR)
      .filter((item) => item.trim() !== "")
      .map((item, index) => save(item, index));

      props.setTodoTitleHandler("");
  }, [ props, save ]);

  const onClose = useCallback(() => {
    props.setTodoTitleHandler("");
    props.setCurrentTodoHandler(null);
    dispatch(toggleEdit(false));
  }, [props, dispatch]);

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
