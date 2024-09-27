import logo from './logo.svg';
import './App.css';
import Clicker from './components/Clicker';
import UserList from './components/UserList';

function Test(){  
  return(<p>여기는 테스트 컴포넌트입니다!</p>)
}

function App() {
  // [상태명,상태변경시 사용할 함수명] = useSatate(초기값);
  return (
    <div className="App">
      <header className="App-header">
        <Clicker/>
        <Test/>
        <UserList/>
        
      </header>
    </div>
  );
}
export default App;
