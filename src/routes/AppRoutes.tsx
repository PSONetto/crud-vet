import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Layout from '../components/layout';
import Home from '../pages/home';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
