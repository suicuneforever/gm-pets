import axios from 'axios';
import React, { FC } from 'react';
import { QueryClient, QueryClientProvider, ReactQueryDevtools } from 'react-query';
import GlobalStyles from './globalStyles.css';
import Home from './screens/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PetProfile from './screens/petProfile/PetProfile';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pet/:petId" element={<PetProfile />} />
        </Routes>
        <ReactQueryDevtools />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
