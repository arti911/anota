import { useState } from "react";

import { checkTodo, sortTodos } from "../../slices/todoSlice";
import { ACTION_TYPE } from "./constants";

import { useAppDispatch, useAppSelector } from "../../hook";

import "./style.scss";

const Actions = () => {
  const dispatch = useAppDispatch();

  const { todos } = useAppSelector((state) => state.todo);

  const [ typeAction, setTypeAction ] = useState<string | null>(null);

  const isCompleted = todos.some((item) => item.isCheck);

  const completeTodo = todos.filter((item) => item.isCheck);
  const notCompleteTodo = todos.filter((item) => !item.isCheck);

  const toggleTodos = (index: number, isCheck: boolean) => {
    dispatch(checkTodo({
      index,
      todo: {
        ...todos[index],
        isCheck,
      }
    }));
  };

  const removeTodos = () => {
    const newTodos = todos.filter((item) => !item.isCheck);
    
    dispatch(sortTodos(newTodos));
  };

  const todosAction = () => {
    completeTodo.forEach((todo) => {
      const index = todos.findIndex((item) => item.id === todo.id);
  
      typeAction === ACTION_TYPE.RESET ? toggleTodos(index, false) : removeTodos();
    });
  };

  const selectAll = () => {
    notCompleteTodo.forEach((todo) => {
      const index = todos.findIndex((item) => item.id === todo.id);

      toggleTodos(index, true);
    });
  };

  const copyableSettings = {
    text: completeTodo.map((item) => item.title).join(";"),
  };

  const handlers = {
    selectAll,
    setTypeAction,
    todosAction,
    copyableSettings,
  };

  return (
    <div className="actions">
      <figure className="actions__item" />
    </div>
  );
};

export default Actions;
