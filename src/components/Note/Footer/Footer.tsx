import { EyeOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import { ITodo } from 'interfaces';

interface FooterNoteProps {
  todos: ITodo[];
  isVisibleNote: boolean;
  onClick: () => void;
}

const FooterNote = (props: FooterNoteProps) => {
  const { todos, isVisibleNote, onClick } = props;

  return (
    <>
      <div />
      <div style={{ textAlign: 'center' }}>
        Done {todos.filter((item) => item.isCheck).length} of&nbsp; {todos.length}
      </div>
      <div>{!isVisibleNote && <Button type="text" icon={<EyeOutlined />} onClick={onClick} />}</div>
    </>
  );
};

export default FooterNote;
