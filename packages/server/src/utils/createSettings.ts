import {ISettings} from "../models";

export const createSettings = (settings?: ISettings) => {
    let offset: number = settings?.offset || +(process.env.BASE_OFFSET || 0);
    let limit: number = settings?.limit || +(process.env.BASE_LIMIT || 0);
    const ids: string = settings?.ids?.length ? `&ids=${settings.ids.join(',')}` : '';
    const step = settings?.step || +(process.env.BASE_STEP || 0);
    if (settings?.page) {
        offset = (settings.limit || +(process.env.BASE_LIMIT || 0)) + (settings.page - 1) * step;
        limit = step;
    }
    return `?limit=${limit}&offset=${offset}${ids}`;
};
