import { ComponentMeta, ComponentStory } from '@storybook/react';

import TitleModal from '.';

export default {
  title: 'Anota/Components/Title',
  component: TitleModal,
} as ComponentMeta<typeof TitleModal>;

const Template: ComponentStory<typeof TitleModal> = (args) => {
  const { text, onChange } = args;

  return <TitleModal text={text} onChange={onChange} />;
};

export const Title = Template.bind({});
Title.args = {
  text: 'Название 1',
};
