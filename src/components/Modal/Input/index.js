import { Input, Button, Row } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { DEFAULT_TODO } from "../../../constants";

import { saveTodo, saveEditTodo, toggleEdit } from "../Todo/todoSlice";

import "./style.scss";

const SEPARATOR = ";";

const InputModal = (props) => {
  const dispatch = useDispatch();

  const isEdit = useSelector((state) => state.todo.isEdit);

  const onChangeTodoTitle = useCallback(
    ({ target }) => {
      props.setTodoTitleHandler(target.value);
    },
    [props]
  );

  const save = useCallback((todo = "", index = 0) => {
    const data = {
      ...DEFAULT_TODO,
      id: Date.now() + index,
      title: todo === "" ? props.todoTitle.trim() : todo.trim(),
    };

    dispatch(saveTodo(data));
  }, [ dispatch, props ]);

  const saveEdit = useCallback(() => {
    const data = {
      ...props.currentTodo,
      title: props.todoTitle.trim()
    };

    dispatch(saveEditTodo(data));
  }, [ dispatch, props ]);

  const onSaveTodo = useCallback(() => {
    if (isEdit) {
      saveEdit();
      dispatch(toggleEdit(false));
    } else {

      if (props.todoTitle.includes(SEPARATOR)) {
        props.todoTitle.trim().split(SEPARATOR).filter((item) => item.trim() !== "").map((item, index) => save(item, index));
      } else {
        save()
      }

    }

    props.setTodoTitleHandler("");
  }, [props, isEdit, dispatch, save, saveEdit]);

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
        onClick={onSaveTodo}
      >
        {isEdit ? "Сохранить изменения" : "Добавить"}
      </Button>
      <Button icon={<CloseOutlined />} type="text" onClick={onClose}></Button>
    </Row>
  );
};

export default InputModal;
