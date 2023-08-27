import '../../../index.css';
import type { Meta, StoryObj } from '@storybook/react';

import { TextField } from './TextField';

const meta: Meta<typeof TextField> = {
    component: TextField,
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
    args: {
        variant: 'default',
        type: 'text',
        htmlFor: 'default',
        placeholder: 'Placeholder',
    },
};
export const Accent: Story = {
    args: {
        variant: 'accent',
        type: 'text',
        htmlFor: 'accent',
        placeholder: 'Placeholder',
    },
};
