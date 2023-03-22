import { ComponentMeta, ComponentStory } from '@storybook/react';
import { List, Col } from 'antd';

import FooterNote from '.';

export default {
  title: 'Anota/Note/Footer',
  component: FooterNote,
  decorators: [
    (Elem) => (
      <Col className="note" xs={24} sm={24} md={12} lg={8} xl={6}>
        <List footer={<Elem />} />
      </Col>
    ),
  ],
} as ComponentMeta<typeof FooterNote>;

const Template: ComponentStory<typeof FooterNote> = (args) => {
  const { todos, isVisibleNote, onClick } = args;

  return <FooterNote todos={todos} isVisibleNote={isVisibleNote} onClick={onClick} />;
};
export const Footer = Template.bind({});
Footer.args = {
  todos: [
    {
      id: Date.now(),
      title: 'Пункт 1',
      isCheck: false,
    },
    {
      id: Date.now() + 1,
      title: 'Пункт 2',
      isCheck: true,
    },
    {
      id: Date.now() + 2,
      title: 'Пункт 3',
      isCheck: false,
    },
  ],
  isVisibleNote: false,
};
