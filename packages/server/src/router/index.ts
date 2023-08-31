import {trpc} from "../lib/trpc";
import {coinRouter} from "./coinRouter";


export const appRouter = trpc.router({
    coins: coinRouter
})
export type AppRouter = typeof appRouter;
