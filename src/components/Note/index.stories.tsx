import { Story, Meta } from "@storybook/react";
import { Col } from "antd";

import { INote } from "./interface";

import Note from ".";

export default {
  component: Note,
  title: "Anota/Note/Note",
  decorators: [
    (Elem) => (
      <Col className="note" xs={24} sm={24} md={12} lg={8} xl={6}>
        <Elem />
      </Col>
    ),
  ],
} as Meta;

const Template: Story<INote> = (args) => <Note {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 0,
  title: "Marvel",
  todos: [
    {
      id: 1,
      title: "Гражданская война",
      isCheck: false,
    },
    {
      id: 2,
      title: "Удивительный Человек-паук",
      isCheck: true,
    },
  ],
  isVisibleNote: false,
};
