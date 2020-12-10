import React from 'react';

//Todo Login 구성하기 pust , localStorage

const Login = () => {
  return (
    <div>
      <h1>로그인</h1>
      <div>
        <input type="text" placeholder='id를 입력해주세요'/>
      </div>
      <div>
        <input type="password" placeholder='password를 입력해주세요'/>
      </div>
      <button>Login</button>
    </div>
  );
};

export default Login;
