import { ComponentMeta, ComponentStory } from '@storybook/react';

import SelectAll from '.';

export default {
  title: 'Anota/Buttons/SelectAll',
  component: SelectAll,
} as ComponentMeta<typeof SelectAll>;

const Template: ComponentStory<typeof SelectAll> = (args) => {
  const { onSelect } = args;
  return <SelectAll onSelect={onSelect} />;
};

export const SelectAllBtn = Template.bind({});
