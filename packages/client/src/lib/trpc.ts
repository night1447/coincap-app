import { createTRPCReact } from '@trpc/react-query';
import { types } from 'server';

export const trpc = createTRPCReact<types.AppRouter>();

