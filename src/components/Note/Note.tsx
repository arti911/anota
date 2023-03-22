import { EyeOutlined } from '@ant-design/icons';
import { Button, List } from 'antd';
import classname from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import './style.scss';

import FooterNote from './Footer';
import HeaderNote from './Header';
import ListItem from './ListItem';

import { ITodo } from 'interfaces';
import { removeNote } from 'slices/appSlice';
import { onToggleShow, setCurrentNoteId, setTitleEdit } from 'slices/modalSlice';
import { setVisibleNote } from 'slices/noteSlice';
import { editTodos } from 'slices/todoSlice';

export interface NoteProps {
  id: number;
  title: string;
  todos: ITodo[];
  isVisibleNote: boolean;
  // index?: number;
}

const Note = (props: NoteProps) => {
  const { title, id, isVisibleNote, todos } = props;

  const dispatch = useDispatch();

  const [showNote, setShowNote] = useState(!isVisibleNote);
  const [height, setHeight] = useState(0);

  const cardContentRef = useRef<HTMLDivElement>(null);

  const rootClass = classname('note__card', {
    'note__card--flip': showNote,
  });

  useEffect(() => {
    if (cardContentRef.current) {
      setHeight(cardContentRef.current?.offsetHeight);
    }
  }, []);

  const toggleShowNote = () => setShowNote(!showNote);
  const showModal = () => {
    onToggleShow(true);
    setTitleEdit(title);
    setCurrentNoteId(id);
    setVisibleNote(isVisibleNote);
    editTodos(todos);
  };

  const confirmRemoveNote = () => dispatch(removeNote(id));

  const contentForPopover = {
    title,
    onClick: showModal,
    onConfirm: confirmRemoveNote,
  };

  return (
    <div className={rootClass} style={{ minHeight: `${height}px` }}>
      <div className="note__wrapper note__wrapper--front" ref={cardContentRef}>
        <List
          dataSource={todos}
          renderItem={(item) => (
            <ListItem isSort onChange={() => 1} title={item.title} isCheck={item.isCheck} key={item.id} />
          )}
          header={<HeaderNote title={title} contentPopover={contentForPopover} />}
          footer={<FooterNote todos={todos} isVisibleNote={isVisibleNote} onClick={toggleShowNote} />}
        />
      </div>

      <Button
        className="note__wrapper note__wrapper--back"
        type="text"
        size="large"
        icon={<EyeOutlined />}
        onClick={toggleShowNote}
      />
    </div>
  );
};

export default Note;
