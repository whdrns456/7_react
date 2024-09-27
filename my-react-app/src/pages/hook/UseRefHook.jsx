import { useRef,useState } from "react";
import Title from "../../components/Title"

const UseRefHook = () => {
    const[name, setName] = useState("아이유");
    const[gender, setGender] = useState('여자');

    const changeName = (e) =>{
        setName(e.target.value);
    }

    const changeGender = (e) =>{
        setGender(e.target.value);
    }

    const handlerReset= ()=>{
        setName("");
        setGender("남자");

        nameInput.current.focus();

    }
    const nameInput = useRef();

    const handlerSubmit = (e) =>{
        alert(`${name} 님의 성별은 ${gender} 입니다.`);
         e.preventDefault(); 
        // 기존 이벤트를 막는 방법(=> 제출 x)
        // 새로고침을 방지하고 제출한 값이 변경되지 않은 채 작업을 진행할 수 있다.
    }
    return (
        <>
            <Title Title="UseRef"/>
            <form onSubmit={handlerSubmit}>
            이름 : 
            <input type="text" value={name} onChange={changeName}
            ref={nameInput}
            />

            <br />
            성별 : 
            <select name="" id="" value={gender} onChange={changeGender}>
                    <option>남자</option>
                    <option>여자</option>
            </select>

            <br/><br/>

            <button type="submit">제출</button>
            <button type="reset" onClick={handlerReset}>초기화</button>
            </form>
        </>
    );
}
export default UseRefHook;