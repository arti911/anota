import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Col } from 'antd';

import HeaderNote from '.';

// import { createFakeData } from "../../../fakeData";

export default {
  title: 'Anota/Note/Header',
  component: HeaderNote,
  decorators: [
    (Elem) => (
      <Col className="note" xs={24} sm={24} md={12} lg={8} xl={6}>
        <Elem />
      </Col>
    ),
  ],
} as ComponentMeta<typeof HeaderNote>;

const Template: ComponentStory<typeof HeaderNote> = (args) => {
  const { title, contentPopover } = args;

  return <HeaderNote title={title} contentPopover={contentPopover} />;
};
export const Header = Template.bind({});
Header.args = {
  title: 'Название',
};
