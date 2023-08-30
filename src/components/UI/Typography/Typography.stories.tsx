import '../../../index.css';
import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
    component: Typography,
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const First: Story = {
    args: {
        type: 'h1',
        children: 'Title',
    },
};
export const Second: Story = {
    args: {
        type: 'h2',
        children: 'Title',
    },
};
export const Third: Story = {
    args: {
        type: 'h2',
        children: 'Title',
    },
};

export const Paragraph: Story = {
    args: {
        type: 'p',
        children: 'Paragraph',
    },
};

export const WithStyle: Story = {
    args: {
        type: 'h3',
        children: 'With style',
        sx: { color: 'var(--accent)', border: '1px solid black', padding: '10px' },
    },
};
