//Todo 공통적으로 사용할 공통함수

//서버로 데이터 생성 요청
import axios from "axios";

export const dataCreate = async (url , sendObject) => {
  try {
    let res = await axios.post(url, sendObject);
    console.log(res);
    console.log(res.data.access);
    console.log(res.status)
  } catch (e) {
    console.log(e);
  } finally {
    // loading
  }
};

//localStorage에 토큰 저장
export const setToken = localStorage.setItem();
export const getToken = localStorage.getItem();
