import { Meta, Story } from "@storybook/react";
import { SyntheticEvent } from "react";

import InputModal from ".";

import { ITodoCurrent } from "../../interfaces/modal.interface";

export default {
  title: "Anota/Components/Input",
  component: InputModal,
} as Meta;

const Template: Story<ITodoCurrent> = (args) => <InputModal {...args} />;

export const Input = Template.bind({});
Input.args = {
  todoTitle: "Название",
  currentTodo: {
    id: 0,
    title: "Текущее название",
    isCheck: false,
  },
  handlers: {
    setTodoTitleHandler: (event: SyntheticEvent) => console.log("---event", event),
  }
};
