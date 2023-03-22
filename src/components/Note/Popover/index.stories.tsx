import { ComponentMeta, ComponentStory } from '@storybook/react';

import PopoverAnota from '.';

export default {
  title: 'Anota/Note/Popover',
  component: PopoverAnota,
} as ComponentMeta<typeof PopoverAnota>;

const Template: ComponentStory<typeof PopoverAnota> = (args) => {
  const { placement, trigger, zIndex, data } = args;

  return <PopoverAnota placement={placement} trigger={trigger} zIndex={zIndex} data={data} />;
};

export const Popover = Template.bind({});
Popover.args = {
  placement: 'bottomRight',
  trigger: 'click',
  zIndex: 999,
  title: '111',
};
