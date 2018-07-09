import React, { PureComponent } from 'react';
import { Switch, withRouter, Route, Link } from 'react-router-dom';
import { AuthorizeProvider } from 'components/AuthorizeProvider';
import PrivateRoute from '../PrivateRoute';
import Public from '../Public';
import Login from '../Login';
import Private from '../Private';

export class App extends PureComponent {
  render() {
    return (
      <AuthorizeProvider>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/login">Войти</Link>
              </li>
              <li>
                <Link to="/private">Секретная страница</Link>
              </li>
              <li>
                <Link to="/">Главная</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute path="/private" component={Private} />
            <Route exact path="/" component={Public} />
          </Switch>
        </div>
      </AuthorizeProvider>
    );
  }
}

// это важно!
// необходимо использовать этот хок(withRouter), потому что при использовании нескольких контекстов
// реакт-роутер теряет свой контекст. Причина — использование старого апи.
export default withRouter(App);
