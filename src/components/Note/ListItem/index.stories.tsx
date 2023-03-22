import { ComponentMeta, ComponentStory } from '@storybook/react';

import ListItem from '.';

export default {
  title: 'Anota/Note/ListItem',
  component: ListItem,
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = (args) => {
  const { title, isCheck, isSort, onChange } = args;
  return <ListItem title={title} isCheck={isCheck} isSort={isSort} onChange={onChange} />;
};

export const ListItemDefault = Template.bind({});
ListItemDefault.args = {
  title: 'Гражданская война',
  isCheck: false,
};
