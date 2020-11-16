import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

//코드스플리팅
const NoticeList = loadable(() => import('./components/notice/NoticeList'));
const NoticeDetail = loadable(() => import('./components/notice/NoticeDetail'));
const Login = loadable(() => import('./components/auth/Login'));
const Join = loadable(() => import('./components/auth/Join'));

const App = () => {
  return (
    <>
      {/*Router 경로*/}
      <Switch>
        <Route component={NoticeList} path={'/'} exact/>
        <Route component={NoticeDetail} path={'/noticeDetail'}/>
        <Route component={NoticeDetail} path={'/newNotice'}/>
        <Route component={Login} path={'/login'}/>
        <Route component={Join} path={'/join'}/>
      </Switch>
    </>
  );
};

export default App;
