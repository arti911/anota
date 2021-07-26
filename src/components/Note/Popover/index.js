import { Button, Popconfirm, Typography } from "antd";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { removeNote } from "../../../appSlice";
import { SOLUTION } from "../../Modal/Actions/constants";
import {
  onToggleShow,
  setTitleEdit,
  setCurrentNoteIndex
} from "../../Modal/modalSlice";
import { editTodos } from "../../Modal/Todo/todoSlice";
import { setVisibleNote } from "../noteSlice";

const { Text } = Typography;

const PopoverNote = (props) => {
  const dispatch = useDispatch();

  const confirm = useCallback(
    () => dispatch(removeNote(props.id)),
    [props.id, dispatch]
  );

  const onShowModal = useCallback(() => {
    dispatch(editTodos(props.todos));
    dispatch(setTitleEdit(props.title));
    dispatch(onToggleShow(true));
    dispatch(setCurrentNoteIndex(props.index));
    dispatch(setVisibleNote(props.isVisibleNote));
  }, [dispatch, props]);

  return (
    <>
      <Button type="text" block={true} onClick={onShowModal}>
        <Text type="success">Редактировать</Text>
      </Button>
      <Popconfirm
        title={`Удалить ${props.title}`}
        okText={SOLUTION.YES}
        cancelText={SOLUTION.NO}
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
