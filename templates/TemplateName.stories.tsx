import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import TemplateName from ".";

export default {
  title: "TemplateName",
  component: TemplateName,
} as ComponentMeta<typeof TemplateName>;

export const Template: ComponentStory<typeof TemplateName> = (args) => (
  <TemplateName {...args} />
);

const Default = Template.bind({});

Default.args = {};
