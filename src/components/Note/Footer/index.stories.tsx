import { List, Col } from "antd";
import { Meta, Story } from "@storybook/react";

import FooterNote from ".";
import { IFooterNote } from "./interface";

export default {
  title: "Anota/Note/Footer",
  component: FooterNote,
  decorators: [
    (Elem) => (
        <Col
        className="note"
        xs={24}
        sm={24}
        md={12}
        lg={8}
        xl={6}
      >
        <List footer={<Elem />} />
      </Col>
    ),
  ],
} as Meta;

const Template: Story<IFooterNote> = (args) => <FooterNote {...args} />;
export const Footer = Template.bind({});
Footer.args = {
  todos: [
    {
      id: Date.now(),
      title: "Пункт 1",
      isCheck: false,
    },
    {
      id: Date.now() + 1,
      title: "Пункт 2",
      isCheck: true,
    },
    {
      id: Date.now() + 2,
      title: "Пункт 3",
      isCheck: false,
    },
  ],
  isVisibleNote: false,
  clickHandler: () => console.log(1),
};
