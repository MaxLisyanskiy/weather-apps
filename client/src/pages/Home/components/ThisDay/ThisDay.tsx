import React from 'react';

import s from './ThisDay.module.scss';
import GlobalSvgSelector from "../../../../assets/icons/global/GlobalSvgSelector";
import {Weather} from "../../../../store/types/types";

interface Props {
    weather: Weather
};

export const ThisDay = ({weather}: Props) => {
  return (
      <div className={s.this__day}>
        <div className={s.top__block}>
          <div className={s.top__block_wrapper}>
            <div className={s.this__temp}>{weather.main.temp.toFixed()}°</div>
            <div className={s.this__day_name}>Сегодня</div>
          </div>
          <GlobalSvgSelector id="sun" />
        </div>
        <div className={s.bottom__block}>
          <div className={s.this__time}>
            Время: <span>21:54</span>
          </div>
          <div className={s.this__city}>
            Город: <span>Санкт-Петербург</span>
          </div>
        </div>
      </div>
  );
};
