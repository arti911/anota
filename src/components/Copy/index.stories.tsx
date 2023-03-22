import { ComponentMeta, ComponentStory } from '@storybook/react';

import Copy from '.';

import { list } from 'components/Actions/constants';

export default {
  title: 'Anota/Buttons/Copy',
  component: Copy,
} as ComponentMeta<typeof Copy>;

const Template: ComponentStory<typeof Copy> = (args) => {
  const { isCompleted, settings } = args;
  return <Copy isCompleted={isCompleted} settings={settings} />;
};

export const CopyBtn = Template.bind({});
CopyBtn.args = {
  isCompleted: true,
  className: 'actions__btn actions__btn--copy',
  settings: {
    text: list.map((item) => item.title).join(';'),
  },
};
