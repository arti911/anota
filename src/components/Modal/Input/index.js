import { Input, Button, Row } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { DEFAULT_TODO } from "../../../constants";

import { saveTodo, saveEditTodo, toggleEdit } from "../Todo/todoSlice";

import "./style.scss";

const InputModal = (props) => {
  const dispatch = useDispatch();

  const isEdit = useSelector((state) => state.todo.isEdit);

  const onChangeTodoTitle = useCallback(
    ({ target }) => {
      props.setTodoTitleHandler(target.value);
    },
    [props]
  );

  const save = useCallback(() => {
    const data = {
      ...DEFAULT_TODO,
      id: Date.now(),
      title: props.todoTitle
    };

    dispatch(saveTodo(data));
  }, [ dispatch, props ]);

  const saveEdit = useCallback(() => {
    const data = {
      ...props.currentTodo,
      title: props.todoTitle
    };

    dispatch(saveEditTodo(data));
  }, [ dispatch, props ]);

  const onSaveTodo = useCallback(() => {
    if (isEdit) {
      saveEdit();
      dispatch(toggleEdit(false));
    } else {
      save()
    }

    props.setTodoTitleHandler("");
  }, [props, isEdit, dispatch, save, saveEdit]);

  const onClose = useCallback(() => {
    props.setTodoTitleHandler("");
    props.setCurrentTodoHandler(null);
    dispatch(toggleEdit(false));
  }, [props, dispatch]);

  return (
    <Row className="anota-row" gutter={[16, 16]}>
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
