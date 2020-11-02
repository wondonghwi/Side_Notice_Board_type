import React from 'react';

const Join = () => {
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
        <button>Join</button>
    </div>
  );
};

export default Join;
