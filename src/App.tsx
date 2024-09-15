import React, { Suspense, lazy, FunctionComponent } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// React-Query
import { QueryClient, QueryClientProvider } from 'react-query';

// Components
const SiteList = lazy(() => import('./components/sites/site-list'));
const SiteDetail = lazy(() => import('./components/sites/site-detail'));
const ClientList = lazy(() => import('./components/clients/client-list'));
import LazyLoader from './components/common/lazy-loader';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const queryClient = new QueryClient();

const App: FunctionComponent = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Suspense fallback={<LazyLoader show delay={500} />}>
            <Routes>
              <Route path="/" element={<SiteList />} />
              <Route path="/sites/:id" element={<SiteDetail />} />
              <Route path="/clients" element={<ClientList />} />
            </Routes>
          </Suspense>
        </Router>
      </QueryClientProvider>
    </LocalizationProvider>
  );
};

export default App;
