import Title from "../../../components/Title";
import ResultArea from "./ResultArea";
import { createContext, useState } from "react";

// Context 생성
export const ResultContext = createContext();

function UseContextHook() {
    const[hobby, setHobby] = useState('');
    const[result, setResult] = useState('');
    
    return (
        <div>
            {/* Context.Provider로 감싸기 */}
            <ResultContext.Provider value={result}>
                <Title Title="UseContextHook"/>

                <input type="text" placeholder="취미를 입력하라" 
                value={hobby} onChange={(e)=> {setHobby(e.target.value);}}/>
                
                <button onClick={()=>{
                   setResult(`취미는${hobby}입니다`)
                }}>결과보기</button>


                <ResultArea data="샘플"/>
            </ResultContext.Provider>
        </div>
    );
}

export default UseContextHook;