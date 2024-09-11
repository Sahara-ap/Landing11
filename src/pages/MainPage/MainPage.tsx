import React from 'react'; 

import S from './_MainPage.module.scss'
import { Presentation } from './components/Presentation';

export const MainPage:React.FC = () => {

  return (
    <div className={S.wrapper}>
      <Presentation />
    </div>
 );
}
