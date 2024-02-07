# 리액트로 게시판 형식의 애플리케이션을 구현하기.

1.  ### **웰컴 페이지**

![1](https://github.com/kiitos2/works_with_react/assets/92902244/7a4c0076-6649-4b06-a0a2-aadd043ebcb2)



2.  ### **내비게이션 영역에서 목록을 클릭하면 목록에 해당하는 상세 보기가 출력한 모습**

![2](https://github.com/kiitos2/works_with_react/assets/92902244/9a1dddac-1825-4b10-afa8-fbb7d7031ce5)



3.  ### **새 게시글 추가**

![3](https://github.com/kiitos2/works_with_react/assets/92902244/c8ee0be6-fb8d-4006-897a-1d1b2d4c40b8)



4.  ### **추가된 글의 상세 보기 페이지로 이동한 모습**

![4](https://github.com/kiitos2/works_with_react/assets/92902244/598f0eb2-bf8a-4471-9f92-67048809f8ce)



5.  ### **제목과 내용을 수정하고 Update 버튼을 클릭하면 상세 보기 페이지로 이동한 모습**

![5](https://github.com/kiitos2/works_with_react/assets/92902244/801b81bc-d006-44ae-98da-a7d751d3854f)



6.  ### **게시글이 삭제된 모습**

![6](https://github.com/kiitos2/works_with_react/assets/92902244/fb354166-8ef4-4135-afea-bd67fb157e0b)




#### <기본 지식 목록>

# React 설치 수정 배포
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
   (이 serve는 Node.js 기반의 웹 서버이며, 가지고 있는 옵션 중에 -s 옵션을 추가하면 사용자가 들어오는 경로 상관없이, index.html 파일을  서비스하게 해준다. 그리고  build 폴더 지정하여 해당 폴더 안의 index.html 파일을 서비스한다.)
- 터미널에서 접속할 수 있는 주소를 ctrl + 클릭하면, 실제 서비스된 배포판을 웹 브라우저를 통해 볼 수 있다.


# function Header(props) { return () }      <= 컴포넌트 (사용자 정의 태그)
컴포넌트 안의 내용을 변경하면 컴포넌트를 사용하는 모든 곳에서 동시에 수정되는 폭발적인 효과가 있다. 이런 리액트의 본질 덕분에 여러 태그들을 하나의 독립된 부품으로 만들 수 있으며, 이런 부품들로 인해 더 적은 복잡도로 소프트웨어를 개발할 수 있다.


# 리액트에서는 속성을 PROP 이라고 부른다.
props => 함수(컴포넌트)의 매개변수
아무 이름이 상관이 없지만 사람들이 모두 props로 사용하기 때문에 다른 이름을 붙일 이유가 없음.


# console.log('props', props) 
개발자 도구의 콘솔을 통해 확인한 결과,
('props', props)은 각각 문자열 형식의 props와 함수의 props 매개변수로 들어온 객체를 출력하였음. (ex. 객체의 title이 REACT.)


# return문
- return문 안의 코드 내용은 리턴값으로 HTML 코드를 반환한다.
- return문 안에서 값을 출력하려면 {props.title} 과 같이 중괄호로 감싸줘야 한다.
- 중괄호 안의 정보는 일반적인 문자열이 아니라 표현식으로 취급하고 해석돼서 props.title에 해당하는 값이 출력된다.


# const
const로 변수 선언 => 나중에 변수의 값을 변경 못 하게 하려고.. (상수 역할)


# &lt;Nav topics={topics}&gt;&lt;/Nav&gt;
&lt;Nav&gt; 태그의 props로 여러 개의 객체들이 담은 배열의 값이 저장된 topics변수를 전달. (왼쪽 topics가 복제품인 객체가 됨.)

&lt;Nav topics='topics'&gt;&lt;/Nav&gt; => 단순한 문자열로 전달
-> 문자열이 아닌 배열 안의 데이터를 있는 그대로 전달하려면 중괄호로 감싸야 한다.


# props.topics
for(let i=0; i<props.topics.length; i++) ...
=> 아래 &lt;Nav&gt;태그의 왼쪽 topics가 배열객체로 올라옴.

let t = props.topics[i]; 
=> 인덱스 0부터 원소의 크기만큼 반복적으로 배열의 객체 값을 저장.
    lis.push(&lt;li key={t.id}&gt;&lt;a href={'/read/'+ t.id}&gt;{t.title}&lt;/a&gt;&lt;/li&gt;);
=> 배열에서 꺼내온 값을 출력.
결과적으로 &lt;li&gt;&lt;a href="/read/1"&gt;html&lt;/a&gt;&lt;/li&gt; 코드를 원소의 횟수만큼 반복함.

# lis.push(&lt;li key={t.id}&gt; ...
Each child in a list should have a unique "key" prop. 라는
오류 메시지를 콘솔에서 확인하였음.
이는 동적으로 만든 각각의 &lt;li&gt;태그는 key라는 props를 가지고 있어야 하고, key라는 props의 값은 반복문 안에서 고유해야 한다고 하는 내용이다. 참고로 key 값은 애플리케이션 전체가 아니라 반복문 내에서만 고유하면 된다.
자동으로 생성하는 태그의 경우 리액트가 태그들을 추적하기 위해서 근거가 필요하고, 그 근거로써 key라는 약속된 prop을 부여한다고 이해하면 될 것 같다.

# 이벤트
event.preventDefault();
=> &lt;a&gt; 태그의 기본 동작 방지 (페이지 이동 X)

props.onChnageMode();
=> &lt;Header&gt;에 props로 전달된 onChangeMode의 함수를 호출

&lt;a&gt; 태그는 순수한 HTML과 똑같지 않고, 유사 HTML이다. Header 컴포넌트 함수 안에 코드를 작성하면 리액트 개발 환경이 최종적으로 브라우저가 이해할 수 있는 HTML로 변환하기 때문이다.


# onClick={function(event)}
onClick 이벤트에 콜백 함수로 들어간 함수가 호출될 때 리액트는 event 객체를 첫 번째 파라미터로 주입한다. 이 이벤트 객체는 이벤트 상황을 제어할 수 있는 여러 가지 정보와 기능이 들어가 있다.


# 화살표 함수로 이벤트 축약하기
<a href="/" onClick={function(event){
     event.preventDefault(); 
    }}><br />
 <a href="/" onClick={(event)=>{
     event.preventDefault();
     }}><br />
<br />
onChnageMode={function() {
  alert('Header');
}}<br />
onChnageMode={() => {
  alert('Header');
}}


# onClick={event=>{ event.preventDefault(); props.onChnageMode(event.target.id); }}
- 파라미터가 (event) 하나일 때는 괄호 생략이 가능하다
- onChangeMode는 id 값이 필요하므로 함수를 호출할 때 id 값을 주입해야 한다.

- event.target -> target은 이벤트를 유발한 태그 &lt;a&gt; 태그를 가리킨다.
(event.target.id 이벤트를 유발한 태그가 가지고 있는 id 값이다.)


