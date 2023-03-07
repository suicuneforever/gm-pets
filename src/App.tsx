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
      <Home />
    </QueryClientProvider>
  );
};

export default App;
