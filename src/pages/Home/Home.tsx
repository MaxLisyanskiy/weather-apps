import React from 'react';
import { ThisDayInfo } from './components/ThisDayInfo/ThisDayInfo';

import s from './Home.module.scss';

type Props = {};

export const Home = (props: Props) => {
  return (
    <div className={s.home}>
      <ThisDayInfo />
    </div>
  );
};
