import {useState, useEffect } from 'react';

function Home() {
  const [time, setTime] = useState(new Date());

  const formatDate = time.toLocaleDateString('ko-KR',{
    year: '2-digit',
    month: '2-digit',
    day: '2-digit'
  });
  useEffect(() => {
  // useEffect : 사이드 이펙트란 데이터 가져오기, 구독 설정, 수동 DOM 조작
  // 타이머 설정등 컴포넌트의 렌더링 결과와는 직접적인 관련이 없는 작업을 의미 
    const id = setInterval(() => {
      setTime(new Date());
      console.log('확인용');
    }, []);
    return (() => clearInterval(id))
  }, ); 
  // 빈 배열 컴포넌트가 처음 마운트(렌더링)될 때만 한 번 실행 
  // 이후 컴포넌트가 업데이트가 되더라도 다시 실행되지 않는다. 
  
  return (
    <div>
      <h1>현재 시간</h1>
      <span>{formatDate}</span><br />
      <span>{time.toLocaleTimeString('ko-KR',{
  })}</span>
    </div>
  )
}

export default Home;