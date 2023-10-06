import { Col } from "antd";
import type { Meta, StoryObj } from "@storybook/react";

import HeaderNote from ".";

const meta = {
  title: "components/Note/Header",
  component: HeaderNote,
  decorators: [
    (Elem) => (
      <Col className="note" xs={24} sm={24} md={12} lg={8} xl={6}>
        <Elem />
      </Col>
    ),
  ],
} satisfies Meta<typeof HeaderNote>;

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Название"
  },
  argTypes: {
    onClick: {
      action: "click"
    },
    onConfirm: {
      action: "confirm"
    }
  }
};
