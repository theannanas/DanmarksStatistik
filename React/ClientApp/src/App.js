import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Befolkning from "./components/Befolkning";

export default () => (
  <Layout>
    <Route exact path='/' component={Befolkning} />
  </Layout>
);
