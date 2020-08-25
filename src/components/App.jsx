import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/App.css';
import MainPage from './MainPage';
import Tuolo from './Tuolo';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import { Layout } from 'antd';

const NotFound = () => <h1>Page Not Found</h1>;

function App() {
  const App = () => (
    <div>
      <Layout>
        <AppHeader />
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={MainPage} />
          <Route path="/tuolotec" component={Tuolo} />
          <Route path="/consultoria" component={Tuolo} />
          <Route path="/cursos" component={Tuolo} />
          <Route path="/jobs" component={Tuolo} />
          <Route path="/blog" component={Tuolo} />
          <Route component={NotFound} />
        </Switch>
        <AppFooter />
      </Layout>
    </div>
  );
  return (
    <Switch>
      <App />
    </Switch>
  );
}

export default App;
