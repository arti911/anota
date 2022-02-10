import { useCallback, useRef, useState } from "react";
import { List, Modal, message, Empty } from "antd";
import { arrayMove } from "react-sortable-hoc";
import ReactDOM from "react-dom";

import TitleModal from "../Title";
import TodoModal from "../Todo";
import { SortableList, SortableItem } from "../Sortable/Sortable";
import InputModal from "../Input";
import Actions from "../Actions";

import { saveNote, saveEditNote } from "../../slices/appSlice";
import { onToggleShow, setCurrentNoteId, setTitleEdit } from "../../slices/modalSlice";
import { cleatTodos, sortTodos } from "../../slices/todoSlice";
import { useAppSelector, useAppDispatch } from "../../hook";

import "./style.scss";
import { ISort } from "../Note/interface";
import { ITodo } from "../../interfaces/modal.interface";

const AddModal = () => {
  const itemListRef: any = useRef(null);

  const dispatch = useAppDispatch();

  const { visibleModal, currentNoteId } = useAppSelector((state) => state.modal);
  const { todos } = useAppSelector((state) => state.todo);
  const { isVisibleNote } = useAppSelector((state) => state.note);

  const [localTitle, setLocalTitle] = useState<string>("");
  const [currentTodo, setCurrentTodo] = useState<ITodo | null>(null);
  const [todoTitle, setTodoTitle] = useState<string>("");

  const onCancel = () => {
    dispatch(onToggleShow(false));
    dispatch(cleatTodos());
    dispatch(setCurrentNoteId(null));
    dispatch(setTitleEdit("Новая заметка"));
    setTodoTitle("");
  };

  const saveEdit = useCallback((idNote: number | null) => {
      const data = {
        note: {
          id: Date.now(),
          title: localTitle,
          todos,
          isVisibleNote,
        },
        idNote
      };

      dispatch(saveEditNote(data));
      dispatch(setCurrentNoteId(null));
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
      Number.isFinite(currentNoteId) ? saveEdit(currentNoteId) : save();

      dispatch(onToggleShow(false));
      dispatch(setTitleEdit("Новая заметка"));
      dispatch(cleatTodos());
      setTodoTitle("");
    } else {
      message.warning("Добавьте контент в заметку!");
    }
  }, [ dispatch, save, saveEdit, todos, currentNoteId ]);

  const onSortEnd = ({ oldIndex, newIndex }: ISort) => {
    const newTodos = arrayMove(todos, oldIndex, newIndex);
    dispatch(sortTodos(newTodos));
  };

  const handlers = {
    setLocalTitle,
    setTodoTitle,
    setCurrentTodo,
  };

  return (
    <Modal
      title={<TitleModal title={localTitle} handlers={handlers} />}
      style={{ top: 20 }}
      visible={visibleModal}
      cancelText={<></>}
      destroyOnClose={true}
      onOk={onSaveNote}
      onCancel={onCancel}
    >
      <InputModal
        todoTitle={todoTitle}
        currentTodo={currentTodo}
        handlers={handlers}
      />
      {todos.length > 0 ? (
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
                key={item.id}
                ref={itemListRef}
              >
                <TodoModal
                  todo={item}
                  index={index}
                  handlers={handlers}
                />
              </SortableItem>
            )}
            footer={<Actions />}
          />
        </SortableList>
      ) : (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      ) }
    </Modal>
  );
};

export default AddModal;
