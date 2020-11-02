import React from 'react';
import NoticeList from "./components/notice/NoticeList";
import { Route, Switch } from 'react-router-dom';
import NoticeDetail from "./components/notice/NoticeDetail";
import NewNotice from "./components/notice/NewNotice";
import Login from "./components/auth/Login";
import Join from "./components/auth/Join";


//todo react-router 세팅하기

//NoticeList
//NoticeDetail
//NoticeNew
//회원가입
//로그인

const App = () => {
  return (
    <>
      {/*Router 경로*/}
      <Switch>
        <Route component={NoticeList} path={'/'} exact/>
        <Route component={NoticeDetail} path={'/noticeDetail'}/>
        <Route component={NewNotice} path={'/newNotice'}/>
        <Route component={Login} path={'/login'}/>
        <Route component={Join} path={'/join'}/>
      </Switch>
    </>
  );
};

export default App;
