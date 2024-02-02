// npm start 명령어를 실행하면 Create React App 도구는
// index.js(입구 파일)를 찾고, 이 안의 코드대로 동작하게 된다.

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // 같은 디렉터리에 있는 App.js로부터 <App /> 태그가 import 됨.
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( // public 폴더의 index.html 파일 참고
  <React.StrictMode>
    <App /> {/* => UI 전체를 보여주는 태그 */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
