import { ComponentMeta, ComponentStory } from '@storybook/react';

import TodoModal from '.';

export default {
  title: 'Anota/Components/Todo',
  component: TodoModal,
} as ComponentMeta<typeof TodoModal>;

const Template: ComponentStory<typeof TodoModal> = (args) => {
  const { todo, index, onChangeTodoTitle, onEditTodo } = args;

  return <TodoModal todo={todo} index={index} onChangeTodoTitle={onChangeTodoTitle} onEditTodo={onEditTodo} />;
};

export const Todo = Template.bind({});
Todo.args = {
  todo: {
    id: 0,
    title: 'Номер 1',
    isCheck: false,
  },
  index: Date.now(),
};
