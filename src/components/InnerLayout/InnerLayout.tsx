import React from 'react'; 
import { Outlet } from 'react-router-dom';

import { Navigation } from './components/Navigation';
import S from './InnerLayout.module.scss'

export const InnerLayout:React.FC = () => {

  return (
    <div className={S.wrapper}>
    <header className={S.header}>
      <Navigation />
    </header>
    <main className={S.main}>
      <Outlet />
    </main>
    <footer className={S.footer}></footer>
  </div>
 );
}
