import React, { useCallback, useState } from 'react';
import produce from "immer";
import { LoginURL } from "../../common/CommonURL";
import { dataCreate } from "../../common/CommonFunction";

//Todo Join 구성하기 post

//DEFINE NAME 선언하기
const NAME_DEFINE = {
  EMAIL: 'email',
  USERNAME: 'username',
  PASSWORD: 'password',
  CONFIRM_PASSWORD: 'confirm_password',
};

//초기값 지정
const initialState = {
  email: '',
  username: '',
  password: '',
  confirm_password: '',
};

const Join = () => {

  //useState값으로 상태관리
  const [joinForm, setJoinForm] = useState(initialState);
  console.log(joinForm)

  //서버로 데이터 요청
  const onJoin = () => {

    const url = LoginURL;

    const sendObject = {
      email: joinForm.email,
      username: joinForm.username,
      password: joinForm.password,
    };

    dataCreate(url , sendObject);
  }

  //input에서 change가 일어날때 발생할 함수
  const handleChange = useCallback((e) => {
    const {name, value} = e.target;
    console.log(name);
    console.log(value);
    setJoinForm(produce(joinForm, draft => {
      draft[name] = value;
    }));
  }, [joinForm]);

  return (
    <div>
      <h1>회원가입</h1>
      <div>
        <input type="text"
               name={NAME_DEFINE.USERNAME}
               onChange={handleChange}
               value={joinForm.username}
               placeholder='id를 입력해주세요'
        />
      </div>
      <div>
        <input type="email"
               name={NAME_DEFINE.EMAIL}
               onChange={handleChange}
               value={joinForm.email}
               placeholder='email을 입력해주세요'
        />
      </div>
      <div>
        <input type="password"
               name={NAME_DEFINE.PASSWORD}
               onChange={handleChange}
               value={joinForm.password}
               placeholder='password를 입력해주세요'
        />
      </div>
      {/*<div>*/}
      {/*  <input type="password"*/}
      {/*         name={NAME_DEFINE.CONFIRM_PASSWORD}*/}
      {/*         onChange={handleChange}*/}
      {/*         value={joinForm.confirm_password}*/}
      {/*         placeholder='password를 입력해주세요'*/}
      {/*  />*/}
      {/*</div>*/}
      <button onClick={onJoin}>Join</button>
    </div>
  );
};

export default Join;
