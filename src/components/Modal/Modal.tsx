import { useCallback, useRef, useState } from "react";
import { List, Modal, message } from "antd";
import arrayMove from "array-move";
import ReactDOM from "react-dom";

import TitleModal from "./Title";
import TodoModal from "./Todo";
import { SortableList, SortableItem } from "../Sortable/Sortable";
import InputModal from "./Input";
import Actions from "./Actions";

import { saveNote, saveEditNote } from "../../appSlice";
import { onToggleShow, setCurrentNoteIndex, setTitleEdit } from "./modalSlice";
import { cleatTodos, sortTodos } from "./Todo/todoSlice";
import { useAppSelector, useAppDispatch } from "../../hook";

import "./style.scss";
import { ISort } from "../../interfaces/Note/types";
import { ITodo } from "../../interfaces/Modal/types";

const AddModal = () => {
  const itemListRef: any = useRef(null);

  const dispatch = useAppDispatch();
  const visible = useAppSelector((state) => state.modal.visibleModal);
  const todos = useAppSelector((state) => state.todo.todos);
  const currentNoteIndex = useAppSelector((state) => state.modal.currentNoteIndex);
  const isVisibleNote = useAppSelector((state) => state.note.isVisibleNote);

  const [localTitle, setLocalTitle] = useState<string>("");
  const [currentTodo, setCurrentTodo] = useState<ITodo | null>(null);
  const [todoTitle, setTodoTitle] = useState<string>("");

  const onCancel = () => {
    dispatch(onToggleShow(false));
    dispatch(cleatTodos());
    dispatch(setCurrentNoteIndex(null));
    dispatch(setTitleEdit("Новая заметка"));
    setTodoTitle("");
  };

  const saveEdit = useCallback((index: number | null) => {
      const data = {
        note: {
          id: Date.now(),
          title: localTitle,
          todos,
          isVisibleNote,
        },
        index
      };

      dispatch(saveEditNote(data));
      dispatch(setCurrentNoteIndex(null));
    }, [ dispatch, localTitle, todos, isVisibleNote ]);

  const save = useCallback(() => {
    const data = {
      id: Date.now(),
      title: localTitle,
      todos,
      isVisibleNote,
    };

    dispatch(saveNote(data));
  }, [ dispatch, localTitle, todos, isVisibleNote ]);

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

  const onSortEnd = ({ oldIndex, newIndex }: ISort) => dispatch(sortTodos(arrayMove(todos, oldIndex, newIndex)));

  return (
    <Modal
      title={<TitleModal title={localTitle} setTitleHandler={setLocalTitle} />}
      style={{ top: 20 }}
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
          onSortEnd={onSortEnd}
          useDragHandle
          helperClass="modal-list"
          getContainer={(): any => ReactDOM?.findDOMNode(itemListRef.current)?.parentElement}
        >
          <List
            dataSource={todos}
            renderItem={(item, index) => (
              <SortableItem
                index={index}
                key={item.id + index}
                ref={itemListRef}
              >
                <TodoModal
                  todo={item}
                  index={index}
                  setTodoTitleHandler={setTodoTitle}
                  setCurrentTodoHandler={setCurrentTodo}
                />
              </SortableItem>
            )}
          />
        </SortableList>
      )}
      <Actions />
    </Modal>
  );
};

export default AddModal;
