import { useEffect } from "react";
import { useState } from "react";




function Memo(){
const [txt, setTxt] = useState('');
const [count, setCount] = useState(0);




/*useEffect(()=>{
},txt)*/

const txtInputValue = (e) =>{
        setTxt(e.target.value);
}
const inputCount = (e) =>{
    setCount(txt.target.value.length);
}
return(
    <div>
        <br />
        <textarea type="text" onKeyUp={txtInputValue}/>
        <span>글자수 표기 {txt.length}</span> <br />
        <br />
        <span>공백 제외 글자수 표기 {txt.trim().length}</span>
    </div>

)


}


export default Memo;