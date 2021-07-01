import { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, List, message } from "antd";

import TitleModal from "./Title";
import TodoModal from "./Todo";
import InputModal from "./Input";

import { saveNote, saveEditNote } from "../../appSlice";
import { onToggleShow, setCurrentNoteIndex, setTitleEdit } from "./modalSlice";
import { cleatTodos } from "./Todo/todoSlice";

const AddModal = () => {
  const dispatch = useDispatch();
  const visible = useSelector((state) => state.modal.visibleModal);
  const todos = useSelector((state) => state.todo.todos);
  const currentNoteIndex = useSelector((state) => state.modal.currentNoteIndex);

  const [localTitle, setLocalTitle] = useState("");
  const [currentTodo, setCurrentTodo] = useState(null);
  const [todoTitle, setTodoTitle] = useState("");

  const onCancel = () => {
    dispatch(onToggleShow(false));
    dispatch(cleatTodos());
    dispatch(setCurrentNoteIndex(null));
    dispatch(setTitleEdit("Новая заметка"));
  };

  const saveEdit = useCallback((index) => {
    const data = {
      note: {
        id: Date.now(),
        title: localTitle,
        todos
      },
      index
    };

    dispatch(saveEditNote(data));
    dispatch(setCurrentNoteIndex(null));
  }, [ dispatch, localTitle, todos ]);

  const save = useCallback(() => {
    const data = {
      id: Date.now(),
      title: localTitle,
      todos
    };

    dispatch(saveNote(data));
  }, [ dispatch, localTitle, todos ]);

  const onSaveNote = useCallback(() => {
    if (todos.length > 0) {
      Number.isFinite(currentNoteIndex) ? saveEdit(currentNoteIndex) : save();

      dispatch(onToggleShow(false));
      dispatch(setTitleEdit("Новая заметка"));
      dispatch(cleatTodos());
    } else {
      message.warning("Добавьте контент в заметку!");
    }
  }, [ dispatch, save, saveEdit, todos, currentNoteIndex ]);

  return (
    <Modal
      title={<TitleModal title={localTitle} setTitleHandler={setLocalTitle} />}
      visible={visible}
      cancelText={<></>}
      destroyOnClose={true}
      onOk={onSaveNote}
      onCancel={onCancel}
    >
      <InputModal
        todoTitle={todoTitle}
        currentTodo={currentTodo}
        setTodoTitleHandler={setTodoTitle}
        setCurrentTodoHandler={setCurrentTodo}
      />
      <List
        dataSource={todos}
        renderItem={(item, index) => (
          <TodoModal
            todos={todos}
            todo={item}
            index={index}
            setTodoTitleHandler={setTodoTitle}
            setCurrentTodoHandler={setCurrentTodo}
          />
        )}
      ></List>
    </Modal>
  );
};

export default AddModal;
