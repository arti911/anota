import { ComponentMeta, ComponentStory } from '@storybook/react';

import ToggleNoteVisibility from '.';

export default {
  title: 'Anota/Buttons/ToggleNoteVisibility',
  component: ToggleNoteVisibility,
} as ComponentMeta<typeof ToggleNoteVisibility>;

const Template: ComponentStory<typeof ToggleNoteVisibility> = () => <ToggleNoteVisibility />;

export const ToggleNoteVisibilityBtn = Template.bind({});
