import { Button, List } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import classname from "classnames";

import "./style.scss";

import HeaderNote from "./Header";
import FooterNote from "./Footer";
import ListItem from "./ListItem";

import { INote } from "./interface";

import { editTodos } from "../../slices/todoSlice";
import { onToggleShow, setCurrentNoteId, setTitleEdit } from "../../slices/modalSlice";
import { removeNote } from "../../slices/appSlice";
import { setVisibleNote } from "../../slices/noteSlice";

interface IOpenCurrentNote {
  onToggleShow: () => void;
  setTitleEdit: () => void;
  setCurrentNoteId: () => void;
  setVisibleNote: () => void;
  editTodos: () => void;
}

const Note = (props: INote) => {
  const openCurrentNote: IOpenCurrentNote = {
    onToggleShow: () => onToggleShow(true),
    setTitleEdit: () => setTitleEdit(props.title),
    setCurrentNoteId: () => setCurrentNoteId(props.id),
    setVisibleNote: () => setVisibleNote(props.isVisibleNote),
    editTodos: () => editTodos(props.todos),
  };

  const dispatch = useDispatch();

  const [ showNote, setShowNote ] = useState(!props.isVisibleNote);
  const [ height, setHeight ] = useState(0);

  const cardContentRef: any = useRef(null);

  const rootClass = classname("note__card", {
    "note__card--flip": showNote,
  });

  useEffect(() => {
    setHeight(cardContentRef?.current?.firstElementChild.offsetHeight);
  }, []);
  
  const toggleShowNote = () => setShowNote(!showNote);
  const showModal = () => Object.values(openCurrentNote).map((fn) => dispatch(fn()));
  const confirmRemoveNote = () => dispatch(removeNote(props.id));

  return (
    <div className={rootClass} style={{ minHeight: `${height}px` }}>
      <div className="note__wrapper note__wrapper--front" ref={cardContentRef}>
        <List
          dataSource={props.todos}
          renderItem={(item) => (<ListItem title={item.title} isCheck={item.isCheck} key={item.id} />)}
          header={<HeaderNote title={props.title} onClick={showModal} onConfirm={confirmRemoveNote} />}
          footer={<FooterNote todos={props.todos} isVisibleNote={props.isVisibleNote} clickHandler={toggleShowNote} />}
        />
      </div>
      <div className="note__wrapper note__wrapper--back" onClick={toggleShowNote}>
        <Button type="text" size="large" icon={<EyeOutlined />} />
      </div>
    </div>
  );
};

export default Note;
