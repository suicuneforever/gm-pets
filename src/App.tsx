import axios from 'axios';
import React, { FC } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import GlobalStyles from './globalStyles.css';
import Home from './screens/Home';

const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <div>Hello World</div>
      <Home />
    </QueryClientProvider>
  );
};

function getFeed() {
  return useQuery('feed', async () => {
    const { data } = await axios.get('http://localhost:3000/owners');
    return data;
  });
}

function Feed() {
  const feedQuery = getFeed();

  console.log(feedQuery);

  return <div>Feed</div>;
}

export default App;
