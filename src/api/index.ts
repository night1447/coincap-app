import axios from 'axios';
import { ICurrency, IHistory } from '../models';
import getRoundingNumber from '../utils/getRoundingNumber.ts';

type IInterval =
    | 'm1'
    | 'm5'
    | 'm15'
    | 'm30'
    | 'h1'
    | 'h2'
    | 'h6'
    | 'h12'
    | 'd1';

interface ISettings {
  limit?: number;
  offset?: number;
  page?: number;
  step?: number;
  ids?: string[];
}

const BASE_LIMIT = 60;
const BASE_OFFSET = 0;
const createSettings = (settings?: ISettings) => {
  let offset: number = settings?.offset || BASE_OFFSET;
  let limit: number = settings?.limit || BASE_LIMIT;
  const ids: string = settings?.ids?.length ? `&ids=${settings.ids.join(',')}` : '';
  if (settings?.step && settings?.page) {
    offset = (settings.limit || BASE_LIMIT) + (settings.page - 1) * settings.step;
    limit = settings.step;
  }
  return `?limit=${limit}&offset=${offset}${ids}`;
};

const $api = {
  baseURL: 'https://api.coincap.io/v2/assets',
  createCoin(coin: ICurrency): ICurrency {
    return {
      ...coin,
      marketCapUsd: getRoundingNumber(coin.marketCapUsd),
      maxSupply: getRoundingNumber(coin.maxSupply || 0),
      priceUsd: +(+coin.priceUsd).toPrecision(2),
      supply: getRoundingNumber(coin.supply),
      volumeUsd24Hr: getRoundingNumber(coin.volumeUsd24Hr),
      vwap24Hr: getRoundingNumber(coin.vwap24Hr),
      changePercent24Hr: getRoundingNumber(coin.changePercent24Hr),
    };
  },
  createCoins(coins: ICurrency[]) {
    return coins.map(item => {
      return this.createCoin(item);
    });
  },
  async getHistory(id: string, interval?: IInterval): Promise<IHistory[]> {
    try {
      const response = await axios.get(
          `${this.baseURL}/${id}/history?interval=${interval || 'h12'}`,
      );
      return response.data.data;
    } catch (e) {
      throw new Error('Error in request');
    }
  },
  async getCoin(id: string): Promise<ICurrency> {
    try {
      const response = await axios.get(`${this.baseURL}/${id}`);
      return this.createCoin(response.data.data);
    } catch (e) {
      throw new Error('Error in request');
    }
  },
  async getCoins(settings?: ISettings): Promise<ICurrency[]> {
    try {
      const response = await axios.get(
          `${this.baseURL}${createSettings(settings)}`,
      );
      return this.createCoins(response.data.data);
    } catch (e) {
      throw new Error('Error in request');
    }
  },
};

export default $api;
