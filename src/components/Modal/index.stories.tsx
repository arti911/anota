import { ComponentMeta, ComponentStory } from '@storybook/react';

import AddModal from '.';

export default {
  title: 'Anota/Components/Modal',
  component: AddModal,
} as ComponentMeta<typeof AddModal>;

const Template: ComponentStory<typeof AddModal> = () => <AddModal />;

export const Modal = Template.bind({});
