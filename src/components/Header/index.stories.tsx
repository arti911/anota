import { Meta, Story } from "@storybook/react";

import Header from ".";

export default {
  title: "Anota/Components/Header",
  component: Header,
} as Meta;

const Template: Story<any> = () => <Header />;

export const HeaderApp = Template.bind({});
