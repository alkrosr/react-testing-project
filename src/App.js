import React from 'react';
import Layout from './hoc/Layout/Layout'
import {Route, Switch} from 'react-router-dom'
import Testing from './containers/Testing/Testing'
import TestingList from './containers/TestingList/TestingList'
import Auth from './containers/Auth/Auth'
import TestingCreator from './containers/TestingCreator/TestingCreator'

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/testing-creator" component={TestingCreator} />
        <Route path="/testing/:id" component={Testing} />
        <Route path="/" component={TestingList} />
      </Switch>
    </Layout>
  );
}

export default App;
