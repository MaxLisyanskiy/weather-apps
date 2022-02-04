import React from 'react';

import s from './ThisDay.module.scss';
import GlobalSvgSelector from "../../../../assets/icons/global/GlobalSvgSelector";

type Props = {};

export const ThisDay = (props: Props) => {
  return (
      <div className={s.this__day}>
        <div className={s.top__block}>
          <div className={s.top__block_wrapper}>
            <div className={s.this__temp}>{Math.floor(10)}°</div>
            <div className={s.this__day_name}>Сегодня</div>
          </div>
          <GlobalSvgSelector id="sun" />
        </div>
        <div className={s.bottom__block}>
          <div className={s.this__time}>
            Время: <span>21:54</span>
          </div>
          <div className={s.this__city}>
            Время: <span>Санкт-Петербург</span>
          </div>
        </div>
      </div>
  );
};
