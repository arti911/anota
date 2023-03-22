import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Col } from 'antd';

import Note from '.';

export default {
  component: Note,
  title: 'Anota/Note/Note',
  decorators: [
    (Elem) => (
      <Col className="note" xs={24} sm={24} md={12} lg={8} xl={6}>
        <Elem />
      </Col>
    ),
  ],
} as ComponentMeta<typeof Note>;

const Template: ComponentStory<typeof Note> = (args) => {
  const { id, title, todos, isVisibleNote } = args;

  return <Note id={id} title={title} todos={todos} isVisibleNote={isVisibleNote} />;
};

export const Default = Template.bind({});
Default.args = {
  id: 0,
  title: 'Marvel',
  todos: [
    {
      id: 1,
      title: 'Гражданская война',
      isCheck: false,
    },
    {
      id: 2,
      title: 'Удивительный Человек-паук',
      isCheck: true,
    },
  ],
  isVisibleNote: false,
};
