import { Button, Popconfirm, Typography } from "antd";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { removeNote } from "../../../appSlice";
import {
  onToggleShow,
  setTitleEdit,
  setCurrentNoteIndex
} from "../../Modal/modalSlice";
import { editTodos } from "../../Modal/Todo/todoSlice";

const { Text } = Typography;

const PopoverNote = (props) => {
  const dispatch = useDispatch();

  const confirm = useCallback(
    () => dispatch(removeNote(props.noteId)),
    [props.noteId, dispatch]
  );

  const onShowModal = useCallback(() => {
    dispatch(editTodos(props.noteTodos));
    dispatch(setTitleEdit(props.noteTitle));
    dispatch(onToggleShow(true));
    dispatch(setCurrentNoteIndex(props.index));
  }, [dispatch, props]);

  return (
    <>
      <Button type="text" block={true} onClick={onShowModal}>
        <Text type="success">Редактировать</Text>
      </Button>
      <Popconfirm
        title={`Удалить ${props.noteTitle}`}
        okText="Да"
        cancelText="Нет"
        onConfirm={confirm}
      >
        <Button type="text" block={true}>
          <Text type="danger">Удалить</Text>
        </Button>
      </Popconfirm>
    </>
  );
};

export default PopoverNote;
