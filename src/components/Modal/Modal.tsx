import { List, Modal, Empty } from 'antd';
import { useCallback, useState } from 'react';
import { arrayMove } from 'react-sortable-hoc';

import Actions from 'components/Actions';

import InputModal from 'components/Input';

import { ISort } from 'components/Note/interface';

// import SortableItem from 'components/Sortable/components/SortableItem';
import SortableList from 'components/Sortable/components/SortableList';
import TitleModal from 'components/Title';

import TodoModal from 'components/Todo';

import { useAppSelector, useAppDispatch } from 'hook';
import { ITodo } from 'interfaces';
import { saveNote, saveEditNote } from 'slices/appSlice';
import { onToggleShow, setCurrentNoteId, setTitleEdit } from 'slices/modalSlice';
import { cleatTodos, sortTodos } from 'slices/todoSlice';

import './style.scss';

const AddModal = () => {
  // const itemListRef: any = useRef(null);

  const dispatch = useAppDispatch();

  const { visibleModal, currentNoteId } = useAppSelector((state) => state.modal);
  const { todos } = useAppSelector((state) => state.todo);
  const { isVisibleNote } = useAppSelector((state) => state.note);

  const [localTitle, setLocalTitle] = useState<string>('');
  const [currentTodo, setCurrentTodo] = useState<ITodo | null>(null);
  const [todoTitle, setTodoTitle] = useState<string>('');

  const onCancel = () => {
    dispatch(onToggleShow(false));
    dispatch(cleatTodos());
    dispatch(setCurrentNoteId(null));
    dispatch(setTitleEdit('Новая заметка'));
    setTodoTitle('');
  };

  const saveEdit = useCallback(
    (idNote: number | null) => {
      const data = {
        note: {
          id: Date.now(),
          title: localTitle,
          todos,
          isVisibleNote,
        },
        idNote,
      };

      dispatch(saveEditNote(data));
      dispatch(setCurrentNoteId(null));
    },
    [dispatch, localTitle, todos, isVisibleNote]
  );

  const save = useCallback(() => {
    const data = {
      id: Date.now(),
      title: localTitle,
      todos,
      isVisibleNote,
    };

    dispatch(saveNote(data));
  }, [dispatch, localTitle, todos, isVisibleNote]);

  const onSaveNote = useCallback(() => {
    if (todos.length > 0) {
      if (currentNoteId) {
        saveEdit(currentNoteId);
      } else {
        save();
      }

      dispatch(onToggleShow(false));
      dispatch(setTitleEdit('Новая заметка'));
      dispatch(cleatTodos());
      setTodoTitle('');
    } else {
      // message.warning('Добавьте контент в заметку!');
    }
  }, [dispatch, save, saveEdit, todos, currentNoteId]);

  const onSortEnd = ({ oldIndex, newIndex }: ISort) => {
    const newTodos = arrayMove(todos, oldIndex, newIndex);
    dispatch(sortTodos(newTodos));
  };

  const onChangeTitle = useCallback((value: string) => setLocalTitle(value), []);

  return (
    <Modal
      title={<TitleModal text={localTitle} onChange={onChangeTitle} />}
      style={{ top: 20 }}
      visible={visibleModal}
      cancelText={<div />}
      destroyOnClose
      onOk={onSaveNote}
      onCancel={onCancel}
    >
      <InputModal
        todoTitle={todoTitle}
        currentTodo={currentTodo}
        onChangeTodo={setTodoTitle}
        onChangeCurrentTodo={setCurrentTodo}
      />
      {todos.length > 0 ? (
        <SortableList
          onSortEnd={onSortEnd}
          useDragHandle
          helperClass="modal-list"
          // getContainer={(): any => ReactDOM?.findDOMNode(itemListRef.current)?.parentElement}
          renderItem={() => (
            <List
              dataSource={todos}
              renderItem={(item, index) => (
                // <SortableItem index={index} key={item.id}>
                <TodoModal todo={item} index={index} onChangeTodoTitle={setTodoTitle} onEditTodo={setCurrentTodo} />
                // </SortableItem>
              )}
              footer={<Actions />}
            />
          )}
        />
      ) : (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      )}
    </Modal>
  );
};

export default AddModal;
