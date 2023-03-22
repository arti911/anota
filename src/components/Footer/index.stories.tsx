import { ComponentMeta, ComponentStory } from '@storybook/react';

import FooterAnota from '.';

export default {
  title: 'Anota/Components/Footer',
  component: FooterAnota,
} as ComponentMeta<typeof FooterAnota>;

const Template: ComponentStory<typeof FooterAnota> = () => <FooterAnota />;

export const FooterApp = Template.bind({});
