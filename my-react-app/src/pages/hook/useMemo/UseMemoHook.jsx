import { useState } from "react";
import Title from "../../../components/Title";
import MemoView from "./MemoView";

function UseMemoHook(){
    const [num, setNum] = useState(0);
    const [text, setText] = useState('');
    

    const increase = () => {setNum(num + 1);}
    const decrease = () => {setNum(num - 1);}

    const changeText = (e) => {setText(e.target.value);}
    return(
        <div>
            <Title Title="UseMemo"/>
            <p>{num}</p>
            <button onClick={increase }>+</button>
            <button onClick={decrease}>-</button>
            <br />
            <input type="text" value={text} onChange={changeText}/>

            <MemoView num={num} text={text}/>
        </div>
    )

}
export default UseMemoHook;