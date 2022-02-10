import { Meta, Story } from "@storybook/react";

import FooterAnota from ".";

export default {
  title: "Anota/Components/Footer",
  component: FooterAnota,
} as Meta;

const Template: Story<any> = () => <FooterAnota />;

export const FooterApp = Template.bind({});
