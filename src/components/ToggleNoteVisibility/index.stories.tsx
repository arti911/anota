import { Meta, Story } from "@storybook/react";
import ToggleNoteVisibility from ".";

export default {
  title: "Anota/Buttons/ToggleNoteVisibility",
  component: ToggleNoteVisibility,
} as Meta;

const Template: Story = () => <ToggleNoteVisibility />;

export const ToggleNoteVisibilityBtn = Template.bind({});