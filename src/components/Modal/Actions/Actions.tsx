import { Button, Popconfirm, Row, Col, Typography } from "antd";
import {
  EyeOutlined,
  EyeInvisibleOutlined,
  DeleteOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { useCallback, useState } from "react";

import { setVisibleNote } from "../../Note/noteSlice";
import { checkTodo, sortTodos } from "../Todo/todoSlice";
import { ACTION_TYPE, SOLUTION } from "./constants";

import { useAppDispatch, useAppSelector } from "../../../hook";

const { Text } = Typography;

const Actions = () => {
  const dispatch = useAppDispatch();

  const todos = useAppSelector((state) => state.todo.todos);
  const isVisibleNote = useAppSelector((state) => state.note.isVisibleNote);

  const [ actionType, setActionType ] = useState<string | null>(null);

  const isCompleted = todos.some((item) => item.isCheck);

  const completeTodo = todos.filter((item) => item.isCheck);

  const onToggleVisibleNote = useCallback(() => {
    dispatch(setVisibleNote(!isVisibleNote));
  }, [dispatch, isVisibleNote]);

  const resetTodos = useCallback((index) => {
    dispatch(checkTodo({
      index,
      todo: {
        ...todos[index],
        isCheck: false,
      }
    }));
  }, [ dispatch, todos ]);

  const removeTodos = useCallback(() => {
    const newTodos = todos.filter((item) => !item.isCheck);
    
    dispatch(sortTodos(newTodos));
  }, [ todos, dispatch ]);

  const onActionTodos = useCallback(() => {
    for (let todo of completeTodo) {
      const index = todos.findIndex((item) => item.id === todo.id);

      actionType === ACTION_TYPE.RESET ? resetTodos(index) : removeTodos();
    }
  }, [ resetTodos, removeTodos, completeTodo, todos, actionType ]);

  const copyableSettings = {
    text: completeTodo.map((item) => item.title).join(";"),
  };

  return (
    <Row gutter={[ 8, 8 ]} className="actions">
      <Col md={12} xs={24}>
        <Button
          type="primary"
          block={true}
          icon={isVisibleNote ? <EyeInvisibleOutlined /> : <EyeOutlined />}
          onClick={onToggleVisibleNote}
        >
          {isVisibleNote ? "Скрыть" : "Показать"}
        </Button>
      </Col>
      <Col md={12} xs={24}>
        <Button
          disabled={!isCompleted}
          type="default"
          block={true}
          className="actions__btn actions__btn--copy"
        >
          <Text copyable={copyableSettings}></Text>
        </Button>
      </Col>
      <Col md={12} xs={24}>
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
            block={true}
            onClick={() => setActionType(ACTION_TYPE.RESET)}
          >
            Сбросить
          </Button>
        </Popconfirm>
      </Col>
      <Col md={12} xs={24}>
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
            block={true}
            onClick={() => setActionType(ACTION_TYPE.REMOVE)}
          >
            Удалить
          </Button>
        </Popconfirm>
      </Col>
    </Row>
  );
};

export default Actions;
