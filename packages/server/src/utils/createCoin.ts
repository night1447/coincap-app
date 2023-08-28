import {ICurrency} from "../models";
import getRoundingNumber from "./getRoundingNumber";
import {checkPrice} from "./checkPrice";

export const createCoin = (coin: ICurrency): ICurrency => {
    return {
        ...coin,
        marketCapUsd: getRoundingNumber(coin.marketCapUsd),
        maxSupply: getRoundingNumber(coin.maxSupply || 0),
        priceUsd: checkPrice(coin.priceUsd),
        supply: getRoundingNumber(coin.supply),
        volumeUsd24Hr: getRoundingNumber(coin.volumeUsd24Hr),
        vwap24Hr: getRoundingNumber(coin.vwap24Hr),
        changePercent24Hr: getRoundingNumber(coin.changePercent24Hr),
    }
}

export const createCoins = (coins: ICurrency[]) => {
    return coins.map(item => createCoin(item))
}
