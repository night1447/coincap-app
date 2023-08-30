import express, {Application} from 'express'
import * as trpcExpress from '@trpc/server/adapters/express'
import {appRouter} from "./router";
import cors from 'cors';
import dotenv from "dotenv";

dotenv.config();
const app: Application = express();
app.use(cors());
app.use('/api', trpcExpress.createExpressMiddleware({
    router: appRouter
}))


const PORT: number = Number(process.env.PORT) || 3000;
app.listen(PORT, () => {
    console.log(`server running on Port: ${PORT}`);
})
