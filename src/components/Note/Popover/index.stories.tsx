import { Meta, Story } from "@storybook/react";

import PopoverAnota from "./Popover";

import { IPopover } from "./interface";

export default {
  title: "Anota/Note/Popover",
  component: PopoverAnota,
} as Meta;

const Template: Story<IPopover> = (args) => <PopoverAnota {...args} />;

export const Popover = Template.bind({});
Popover.args = {
  placement: "bottomRight",
  trigger: "click",
  zIndex: 999,
  content: {
    data: {
      title: "111",
    },
    clickHandler: () => console.log("Редактировать"),
    confirmHandler: () => console.log("Удалить"),
  },
};
