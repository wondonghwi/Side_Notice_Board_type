import React, { useCallback } from 'react';
import axios from 'axios';

const LOCAL_URL = 'http://localhost:8000';

const Join = () => {

  const onJoin = async () => {

    const sendObject = {
      email : '',
      username : '',
      password : '',
    };

    const sendString = JSON.stringify(sendObject);

    //데이터 생성 요청
    axios.post(`${LOCAL_URL}/v1/auth/sign-in/` , sendString);
  }

  return (
    <div>
        <h1>회원가입</h1>
        <div>
          <input type="text" placeholder='id를 입력해주세요'/>
        </div>
        <div>
          <input type="email" placeholder='email을 입력해주세요'/>
        </div>
        <div>
          <input type="password" placeholder='password를 입력해주세요'/>
        </div>
        <div>
          <input type="password" placeholder='password를 입력해주세요'/>
        </div>
        <button onClick={onJoin}>Join</button>
    </div>
  );
};

export default Join;
