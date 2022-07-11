import { Meta, Story } from "@storybook/react";

import Logo from ".";

export default {
  title: "Anota/Components/Logo",
  component: Logo,
} as Meta;

const Template: Story<any> = () => <Logo />;

export const LogoDefault = Template.bind({});
