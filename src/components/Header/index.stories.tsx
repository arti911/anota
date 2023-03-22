import { ComponentMeta, ComponentStory } from '@storybook/react';

import Header from '.';

export default {
  title: 'Anota/Components/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const HeaderApp = Template.bind({});
