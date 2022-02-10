import { Meta, Story } from "@storybook/react";

import Copy from ".";

import { isCompleted, list } from "../Actions/constants";

import { ICopy } from "./interface";

export default {
  title: "Anota/Buttons/Copy",
  component: Copy,
} as Meta;

const Template: Story<ICopy> = (args) => <Copy {...args} />;

export const CopyBtn = Template.bind({});
CopyBtn.args = {
  isCompleted,
  className: "actions__btn actions__btn--copy",
  handlers: {
    copyableSettings: {
      text: list.map((item) => item.title).join(";"),
    },
  },
};
