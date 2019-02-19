import React, { Component, Suspense, lazy } from 'react';
import { Redirect, Route, RouteProps, Switch } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner';
import { Col, Row } from 'antd';

const TitlesList = lazy(() => import('./pages/titles'));
const TitleForm = lazy(() => import('./pages/titleForm'));
const Navbar = lazy(() => import('./pages/layout/navigation/Navbar'));

class AppRouter extends Component {
  render() {
    const DefaultContainer = () => (
      <div className="container">
        <Row className="App-wrapper">
          <Col span={4}>
            <Navbar />
          </Col>
          <Col span={20}>
            <Route exact path="/" component={TitlesList} />
            <Route exact path="/title/:id" component={TitleForm} />
          </Col>
        </Row>
      </div>
    );

    return (
      <div>
        <Suspense fallback={<LoadingSpinner />}>
          <Switch>
            <Route component={DefaultContainer} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default AppRouter;
