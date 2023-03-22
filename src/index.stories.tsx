import { ComponentMeta, ComponentStory } from '@storybook/react';

import App from './App';

export default {
  title: 'Anota/Layouts/Main',
  component: App,
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = () => <App />;

export const Main = Template.bind({});
