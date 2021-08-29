import { Button, Popconfirm, Typography } from "antd";
import {
  EyeOutlined,
  EyeInvisibleOutlined,
  DeleteOutlined,
  ReloadOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import { useCallback, useState } from "react";

import { setVisibleNote } from "../../Note/noteSlice";
import { checkTodo, sortTodos } from "../Todo/todoSlice";
import { ACTION_TYPE, SOLUTION } from "./constants";

import { useAppDispatch, useAppSelector } from "../../../hook";

import "./style.scss";

const { Text } = Typography;

const Actions = () => {
  const dispatch = useAppDispatch();

  const todos = useAppSelector((state) => state.todo.todos);
  const isVisibleNote = useAppSelector((state) => state.note.isVisibleNote);

  const [ actionType, setActionType ] = useState<string | null>(null);

  const isCompleted = todos.some((item) => item.isCheck);

  const completeTodo = todos.filter((item) => item.isCheck);
  const notCompleteTodo = todos.filter((item) => !item.isCheck);

  const onToggleVisibleNote = useCallback(() => {
    dispatch(setVisibleNote(!isVisibleNote));
  }, [dispatch, isVisibleNote]);

  const toggleTodos = useCallback((index: number, isCheck: boolean) => {
    dispatch(checkTodo({
      index,
      todo: {
        ...todos[index],
        isCheck,
      }
    }));
  }, [ dispatch, todos ]);

  const removeTodos = useCallback(() => {
    const newTodos = todos.filter((item) => !item.isCheck);
    
    dispatch(sortTodos(newTodos));
  }, [ todos, dispatch ]);

  const onActionTodos = useCallback(() => {
    completeTodo.forEach((todo) => {
      const index = todos.findIndex((item) => item.id === todo.id);
  
      actionType === ACTION_TYPE.RESET ? toggleTodos(index, false) : removeTodos();
    });
  }, [ toggleTodos, removeTodos, completeTodo, todos, actionType ]);

  const onCheckAllTodos = useCallback(() => {
    notCompleteTodo.forEach((todo) => {
      const index = todos.findIndex((item) => item.id === todo.id);

      toggleTodos(index, true);
    });
  }, [ notCompleteTodo, todos, toggleTodos ]);

  const copyableSettings = {
    text: completeTodo.map((item) => item.title).join(";"),
  };

  return (
    <div className="actions">
      <figure className="actions__item">
        <Button
            type="primary"
            icon={isVisibleNote ? <EyeInvisibleOutlined /> : <EyeOutlined />}
            onClick={onToggleVisibleNote}
            shape="circle"
            size="large"
          />
        <figcaption>
          <Text>{isVisibleNote ? "Скрыть" : "Показать"}</Text>
        </figcaption>
      </figure>

      <figure className="actions__item">
        <Button
          disabled={!isCompleted}
          type="primary"
          className="actions__btn actions__btn--copy"
          shape="circle"
          size="large"
        >
          <Text copyable={copyableSettings} />
        </Button>
        <figcaption>
          <Text disabled={!isCompleted}>Скопировать</Text>
        </figcaption>
      </figure>

      <figure className="actions__item">
        <Button
          type="primary"
          icon={<CheckOutlined />}
          shape="circle"
          size="large"
          onClick={onCheckAllTodos}
        >

        </Button>
        <figcaption>
          <Text>Выбрать всё</Text>
        </figcaption>
      </figure>

      <figure className="actions__item">
        <Popconfirm
          title={`Вы действительно хотите сбросить отметки у ${completeTodo.map((item) => item.title).join(", ")}?`}
          okText={SOLUTION.YES}
          cancelText={SOLUTION.NO}
          onConfirm={onActionTodos}
        >
          <Button
            disabled={!isCompleted}
            type="primary"
            icon={<ReloadOutlined />}
            onClick={() => setActionType(ACTION_TYPE.RESET)}
            shape="circle"
            size="large"
          />
        </Popconfirm>
        <figcaption>
          <Text disabled={!isCompleted}>Сбросить</Text>
        </figcaption>
      </figure>

      <figure className="actions__item">
        <Popconfirm
          title={`Вы действительно хотите удалить ${completeTodo.map((item) => item.title).join(", ")}?`}
          okText={SOLUTION.YES}
          cancelText={SOLUTION.NO}
          onConfirm={onActionTodos}
        >
          <Button
            danger
            disabled={!isCompleted}
            type="primary"
            icon={<DeleteOutlined />}
            onClick={() => setActionType(ACTION_TYPE.REMOVE)}
            shape="circle"
            size="large"
          />
        </Popconfirm>
        <figcaption>
          <Text disabled={!isCompleted}>Удалить</Text>
        </figcaption>
      </figure>
    </div>
  );
};

export default Actions;
