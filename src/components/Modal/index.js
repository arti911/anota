import { useCallback, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, message } from "antd";
import arrayMove from "array-move";
import ReactDOM from "react-dom";

import TitleModal from "./Title";
import SortableList from "./SortableList";
import InputModal from "./Input";

import { saveNote, saveEditNote } from "../../appSlice";
import { onToggleShow, setCurrentNoteIndex, setTitleEdit } from "./modalSlice";
import { cleatTodos, sortTodos } from "./Todo/todoSlice";

import "./style.scss";

const AddModal = () => {
  const itemListRef = useRef(null);

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
    setTodoTitle("");
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
      setTodoTitle("");
    } else {
      message.warning("Добавьте контент в заметку!");
    }
  }, [ dispatch, save, saveEdit, todos, currentNoteIndex ]);

  const onSortEnd = ({ oldIndex, newIndex }) => dispatch(sortTodos(arrayMove(todos, oldIndex, newIndex)));

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
      {todos.length > 0 && (
        <SortableList
          itemRef={itemListRef}
          todos={todos}
          setTodoTitleHandler={setTodoTitle}
          setCurrentTodoHandler={setCurrentTodo}
          onSortEnd={onSortEnd}
          useDragHandle
          helperClass="modal-list"
          getContainer={() => ReactDOM.findDOMNode(itemListRef.current).parentElement}
        />
      )}
    </Modal>
  );
};

export default AddModal;
