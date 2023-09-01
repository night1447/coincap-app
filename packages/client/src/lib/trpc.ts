import { createTRPCReact } from '@trpc/react-query';
import { AppRouter } from 'server/src';

export const trpc = createTRPCReact<AppRouter>();

