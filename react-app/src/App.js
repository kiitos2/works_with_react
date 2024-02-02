import './App.css'; // 이 페이지의 디자인을 수정하는 파일

function Header(props) { // <= 컴포넌트 (사용자 정의 태그)
  console.log(props)
  return ( // 리턴값으로 HTML 코드를 반환
    <header>
      <h1><a href="/">{props.title}</a></h1> 
    </header> // 
  )
}

function Nav(props) {
  const lis = []
  for(let i=0; i<props.topics.length; i++) { // => 아래 <Nav>태그의 왼쪽 topics가 배열객체로 올라옴.
    let t = props.topics[i]; // 인덱스 0부터 원소의 크기만큼 반복적으로 배열의 객체 값을 저장.
    lis.push(<li key={t.id}><a href={'/read/'+ t.id}>{t.title}</a></li>);
  } // => <li><a href="/read/1">html</a></li>
  console.log({lis})
  return (
    <nav>
      <ol> 
          {lis}
      </ol>
    </nav>
     
  )
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
       {props.body}
    </article>
  )
}



function App() { // 화면을 구성하는 함수
  const topics = [ // 여러 개의 객체를 담은 배열 초기화
    {id:1, title:'html', body:'html is...'},
    {id:2, title:'css', body:'css is...'},
    {id:3, title: 'js', body:'js is...'}
  ]
  return ( 
    <div>
      <Header title="WEB"></Header>
      <Nav topics={topics}></Nav> 
      <Article title="Welcome" body="Hello, WEB"></Article>
    </div>
  );
}

export default App;
