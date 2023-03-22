import { ComponentMeta, ComponentStory } from '@storybook/react';

import InputModal from '.';

export default {
  title: 'Anota/Components/Input',
  component: InputModal,
} as ComponentMeta<typeof InputModal>;

const Template: ComponentStory<typeof InputModal> = (args) => {
  const { todoTitle, currentTodo, onChangeTodo, onChangeCurrentTodo } = args;

  return (
    <InputModal
      todoTitle={todoTitle}
      currentTodo={currentTodo}
      onChangeTodo={onChangeTodo}
      onChangeCurrentTodo={onChangeCurrentTodo}
    />
  );
};

export const Input = Template.bind({});
Input.args = {
  todoTitle: 'Название',
  currentTodo: {
    id: 0,
    title: 'Текущее название',
    isCheck: false,
  },
};
