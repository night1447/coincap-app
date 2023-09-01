import { useEffect, useState } from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import getRoundingNumber from '../../utils/getRoundingNumber';
import { IHistory } from '../../models';
import { CoinService } from '../../services/CoinService';

import styles from './graphic.module.scss';

interface IGraphicElement {
  name: string;
  coin: number;
  amt: number;
}

interface GraphicProps {
  id: string;
  className?: string;
}

const addLeadingZero = (value: number) => (value < 10 ? `0${value}` : value);
const createGraphicData = (data: IHistory[]) => {
  const result: IGraphicElement[] = [];

  data.map((item) => {
    const date = new Date(item.time);
    const graphicElement: IGraphicElement = {
      name: `${addLeadingZero(date.getMonth() + 1)}-${addLeadingZero(
          date.getDay(),
      )}`,
      coin: getRoundingNumber(+item.priceUsd),
      amt: 0,
    };
    result.push(graphicElement);
  });
  return result;
};

export const Graphic = ({ id, className }: GraphicProps) => {
  const [graphicData, setGraphicData] = useState<IGraphicElement[]>([]);
  const history = CoinService().history({ id });
  useEffect(() => {
    if (history.data) {
      setGraphicData(createGraphicData(history.data));
    }
  }, [history.data]);
  return (
      <div className={`${styles.graphic} ${className || ''}`}>
        <ResponsiveContainer width='100%' height='100%'>
          <AreaChart data={graphicData}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Area
                type='monotone'
                dataKey='coin'
                stroke='var(--secondary-hover)'
                strokeWidth={4}
                fill='var(--secondary)'
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
  );
};
