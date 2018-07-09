import React, { PureComponent } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends PureComponent {
  render() {
    const { isAuthorized, component: Component, ...rest } = this.props;

    return isAuthorized ? (
      <Route {...rest} render={props => <Component {...props} />} />
    ) : (
      <Redirect to="/login" />
    );
  }
}

export default AuthHOC(PrivateRoute);
