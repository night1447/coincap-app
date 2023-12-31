import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

import '../../../index.css';

const meta: Meta<typeof Button> = {
    component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;
export const Default: Story = {
    args: {
        children: 'Button',
        variant: 'default',
    },
};
export const Accent: Story = {
    args: {
        children: 'Button',
        variant: 'accent',
    },
};
export const Error: Story = {
    args: {
        children: 'Button',
        variant: 'error',
    },
};

export const Success: Story = {
    args: {
        children: 'Button',
        variant: 'success',
    },
};
export const Circle: Story = {
    args: {
        children: 'Button',
        variant: 'accent',
        isCircle: true,
    },
};
export const Close: Story = {
    args: {
        variant: 'close',
        srOnly: 'close button',
    },
};

