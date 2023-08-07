import axios from 'axios';
import { ICurrency, IHistory } from '../models';

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
  step?: number;
}

const BASE_LIMIT = 60;
const BASE_OFFSET = 0;
const createSettings = (settings?: ISettings) => {
  let offset: number = settings?.offset || BASE_OFFSET;
  let limit: number = settings?.limit || BASE_LIMIT;
  if (settings?.step && settings.offset) {
    offset = limit + settings.offset - settings.step;
    limit = settings.step;
  }
  return `?limit=${limit}&offset=${offset}`;
};

const $api = {
  baseURL: 'https://api.coincap.io/v2/assets',

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
      return response.data.data;
    } catch (e) {
      throw new Error('Error in request');
    }
  },
  async getCoins(settings?: ISettings): Promise<ICurrency[]> {
    try {
      const response = await axios.get(
          `${this.baseURL}${createSettings(settings)}`,
      );
      return response.data.data;
    } catch (e) {
      throw new Error('Error in request');
    }
  },
};

export default $api;
