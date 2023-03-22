import { ComponentMeta, ComponentStory } from '@storybook/react';

import Actions from '.';

export default {
  title: 'Anota/Components/ActionsNote',
  component: Actions,
} as ComponentMeta<typeof Actions>;

const Template: ComponentStory<typeof Actions> = () => <Actions />;

export const ActionsNote = Template.bind({});
