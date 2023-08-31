import {ISettings} from "../models";

export const createSettings = (settings?: ISettings) => {
    let offset: number = settings?.offset || +(process.env.BASE_OFFSET || 0);
    let limit: number = settings?.limit || +(process.env.BASE_LIMIT || 0);
    const ids: string = settings?.ids?.length ? `&ids=${settings.ids.join(',')}` : '';
    if (settings?.step && settings?.page) {
        offset = (settings.limit || +(process.env.BASE_LIMIT || 0)) + (settings.page - 1) * settings.step;
        limit = settings.step;
    }
    return `?limit=${limit}&offset=${offset}${ids}`;
};
