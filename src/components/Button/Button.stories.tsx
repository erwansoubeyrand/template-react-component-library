import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const PrimaryButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryButton.args = {
  type: 'primary',
  size: 'medium',
  label: 'Primary button',
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  type: 'secondary',
  size: 'medium',
  label: 'Secondary button',
  onClick: () => console.log('click secondary button'),
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  disabled: true,
  type: 'primary',
  size: 'medium',
  label: 'Disabled button',
};
