import React, { lazy, Suspense, useEffect } from 'react';
import { GET_STATS } from '../../api';
import Head from '../../Components/Head/Head';
import useFetch from '../../Hooks/useFetch';
import Loading from '../../Helper/Loading';
import Error from '../../Helper/Error';

const UserStatsGraphs = lazy(() => import('./UserStatsGraphs'));

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    async function getData() {
      const { url, options } = GET_STATS();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (!data) return null;
  else {
    return (
      <Suspense fallback={<div></div>}>
        <Head title="Estatísticas" /> <UserStatsGraphs data={data} />
      </Suspense>
    );
  }
};

export default UserStats;
