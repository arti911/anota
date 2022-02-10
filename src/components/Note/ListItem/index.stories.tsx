import { Meta, Story } from "@storybook/react";

import ListItem from ".";

import { IListItem } from "./interface";

export default {
  title: "Anota/Note/ListItem",
  component: ListItem,
} as Meta;

const Template: Story<IListItem> = (args) => <ListItem {...args} />;

export const ListItemDefault = Template.bind({});
ListItemDefault.args = {
  title: "Гражданская война",
  isCheck: false,
};
