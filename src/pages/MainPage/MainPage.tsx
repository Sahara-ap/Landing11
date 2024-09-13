import React from 'react'; 

import { Presentation } from './components/Presentation';
import { Order } from './components/Order';

import S from './_MainPage.module.scss'

export const MainPage:React.FC = () => {

  return (
    <div className={S.wrapper}>
      <Presentation />
      <Order />
    </div>
 );
}
