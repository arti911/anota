import { Meta, Story } from "@storybook/react";

import TodoModal from ".";

import { ITodoComponent } from "./interface";

export default {
  title: "Anota/Components/Todo",
  component: TodoModal,
} as Meta;

const Template: Story<ITodoComponent> = (args) => <TodoModal {...args} />;

export const Todo = Template.bind({});
Todo.args = {
  todo: {
    id: 0,
    title: "Номер 1",
    isCheck: false,
  },
  index: Date.now(),
  handlers: {}
};
