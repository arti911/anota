import { Col } from "antd";
import { Meta, Story } from "@storybook/react";

import HeaderNote from ".";

import { IHeaderNote } from "./interface";

// import { createFakeData } from "../../../fakeData";

export default {
  title: "Anota/Note/Header",
  component: HeaderNote,
  decorators: [
    (Elem) => (
      <Col className="note" xs={24} sm={24} md={12} lg={8} xl={6}>
        <Elem />
      </Col>
    ),
  ],
} as Meta;

const Template: Story<IHeaderNote> = (args) => <HeaderNote {...args} />;
export const Header = Template.bind({});
Header.args = {
  title: "Название",
  contentPopover: {
    data: {
      title: "111"
    },
    clickHandler: () => console.log("Редактировать"),
    confirmHandler: () => console.log("Удалить"),
  },
};
