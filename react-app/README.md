React 기초: 설치 수정 배포
1. 설치
- Create React App 공식 홈페이지에서 설치 방법을 참고 (https://create-react-app.dev/).
- Node.js를 설치 (공홈에서 설치 설치 파일 다운로드).
- 터미널에서 npx create-react-app 입력하고 이어서 디렉터리 이름을 입력.
	=> npx create-react-app .
	여기서 점(.)은 현재 디렉터리를 의미하는 약속된 기호이다.
- npm start 입력하면 웹 브라우저가 나오면서 설치가 완료된다.

2. 수정
- npm start 명령어를 실행하면 Create React App 도구는 index.js(입구 파일)를 찾고, 이 안의 코드대로 동작하게 된다. 그중에서 <App />태그는 UI 전체를 보여주는 태그이다. <App /> 태그는 App.js에서 온 것이다. App.js 안의 App 함수의 코드를 수정하면서 전체 UI를 디자인할 수 있다.

3. 배포
- npm run build 명령어를 터미널에 입력하여 빌드를 시작.
   (이때 build 폴더가 생성되고 index.html 파일을 의존하는 다른 파일들도 존재하게 된다.)
- 다시 npm run build 명령어를 입력.
- serve -s build 명령어 입력.
   (이 serve는 Node.js 기반의 웹 서버이며, 가지고 있는 옵션 중에 -s 옵션을 추가하면 사용자가 들어오는 경로 상관없이, index.html 파일을  서비스하게 해준다. 그리고  build 폴더 지정을 하여 해당 폴더 안의 index.html 파일을 서비스 실행한다.)
- 접속할 수 있는 주소 클릭하면, 실제 서비스된 배포판을 웹 브라우저를 통해 볼 수 있다.
