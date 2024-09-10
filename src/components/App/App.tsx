import { Navigate, Route, Routes } from 'react-router-dom';
import { InnerLayout } from 'components/InnerLayout';

import { MainPage } from 'pages/MainPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<InnerLayout />}>
        <Route index element={<MainPage />} />
      </Route>
      <Route path="*" element={<Navigate to='/' />} />
    </Routes>
  );
};

