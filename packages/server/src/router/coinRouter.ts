import {trpc} from '../lib/trpc';
import {z} from 'zod';
import axios from "axios";
import {ICurrency, IHistory, ISettings} from "../models";
import {createSettings} from "../utils/createSettings";
import {createCoin, createCoins} from "../utils/createCoin";


const settings = z.custom<ISettings>();
const history = z.custom<IHistory>()
export const coinRouter = trpc.router({
    getCoins: trpc.procedure.input(settings).query(async (settings): Promise<ICurrency[]> => {
        try {
            const response = await axios.get(
                `${process.env.BASE_URL}${createSettings(settings.input)}`,
            );
            return createCoins(response.data.data);
        } catch (e) {
            throw new Error('Error in request');
        }
    }),
    getHistory: trpc.procedure.input(history).query(async (settings): Promise<IHistory[]> => {
            try {
                const response = await axios.get(
                    `${process.env.BASE_URL}/${settings.input.id}/history?interval=${settings.input.interval || 'h12'}`,
                );
                return response.data.data;
            } catch (e) {
                throw new Error('Error in request');
            }
        },
    ),
    getCoin: trpc.procedure.input(z.object({id: z.string()})).query(async (settings): Promise<ICurrency> => {
        try {
            const response = await axios.get(`${process.env.BASE_URL}/${settings.input.id}`);
            return createCoin(response.data.data);
        } catch (e) {
            throw new Error('Error in request');
        }
    },),
});
