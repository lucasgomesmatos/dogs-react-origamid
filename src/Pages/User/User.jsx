import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Feed from '../../Components/Feed/Feed';
import Head from '../../Components/Head/Head';
import NotFound from '../../Helper/NotFound';
import { UserContext } from '../../UserContext';
import UserHeader from './UserHeader';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';

export const User = () => {
  const { data } = useContext(UserContext);

  return (
    <section className="container">
      <Head title="Minha Conta" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};
