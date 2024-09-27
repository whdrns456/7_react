// import { Component } from "react";
import { useState, useEffect} from 'react';

function Clicker(){
    const [count, setCount] = useState(0);
 
    useEffect(()=>{
        document.title = '이게맞나:' + count;
    })

    const increase =()=>{
        setCount(count + 1);
    }

    return(
        // 반드시 요소(Element) 하나만 리턴해야 함! 
        <div>
        <p>클릭 횟수 : {count} </p>
         <button onClick={()=>{
         setCount(count + 1);
        }}> + 클릭</button>

        <button onClick={()=>{
            setCount(count - 1);
        }}>
            - 클릭
        </button>

        <button onClick={increase}>+ 변수 사용</button>
        </div>
    );
}
/*
class Clicker extends Component{
}
*/
export default Clicker;

