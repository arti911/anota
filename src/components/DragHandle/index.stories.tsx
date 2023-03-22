import { ComponentMeta, ComponentStory } from '@storybook/react';

import DragHandle from '.';

export default {
  title: 'Anota/Components/DragHandle',
  component: DragHandle,
} as ComponentMeta<typeof DragHandle>;

const Template: ComponentStory<typeof DragHandle> = () => <DragHandle />;

export const DragHandleDefault = Template.bind({});
