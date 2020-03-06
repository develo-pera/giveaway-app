import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Switch, Redirect } from 'react-router-dom';

import BaseRoute from './BaseRoute';

import Home from '../containers/home/home';

import ScrollToTop from '../components/common/scroll-to-top/ScrollToTop';

import HOME from './Paths';

const Routes = () => (
  <ScrollToTop>
    <Switch>
      <BaseRoute
        exact
        path={HOME}
        component={Home}
      />
      <Redirect from="*" to={HOME} />
    </Switch>
  </ScrollToTop>
);

Routes.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(Routes);
