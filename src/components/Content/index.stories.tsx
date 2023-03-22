import { ComponentMeta, ComponentStory } from '@storybook/react';

import ContentAnota from '.';

export default {
  title: 'Anota/Components/Content',
  component: ContentAnota,
} as ComponentMeta<typeof ContentAnota>;

const Template: ComponentStory<typeof ContentAnota> = () => <ContentAnota />;

export const ContentApp = Template.bind({});
