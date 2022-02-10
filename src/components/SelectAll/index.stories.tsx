import { Meta, Story } from "@storybook/react";

import SelectAll from ".";
import { ISelectAll } from "./interface";

export default {
  title: "Anota/Buttons/SelectAll",
  component: SelectAll,
} as Meta;

const Template: Story<ISelectAll> = (args) => <SelectAll {...args} />;

export const SelectAllBtn = Template.bind({});
SelectAllBtn.args = {
  handlers: {},
};
