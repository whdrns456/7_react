import { useMemo } from "react";


function MemoView(props){
   const count = props.num;
 //  const text = props.text;

   const {num, text} = props;
    const getNumber = (number) =>{
        console.log("숫자가 변경되었습니다. 계산하여 적용");

        return num * 7;
    }

    
    const getText = (text) => {
        console.log("글자가 변경되었습니다.");
        return text + "**";
    }
    // const numberValue = getNumber(num);
    // const textValue = getText(text);

    /**
     *  useMemo를 사용하지 않은 경우 
     *  
     * useMemo 사용 : 
     * Memoization 기법을 사용한 리액트 훅 
     * -> 한번 연산된 결과를 기억해두고, 다시 동일한 값이 입력되었을 때 기억해둔 데이터를 반환하는 기법 
     * 
     * 
     */
    
    /*
        useMemo(calculateValue, dependencies)
        cal... : 캐싱하려고 하는 값을 계산하는 함수 
        dependencies : calc.. 함수 내에서 참조된 모든 값들의 목록(의존성 배열)
    */
   const numberValue = useMemo(()=> getNumber(num),[num]);
   const textValue = useMemo(()=> getText(text),[text]);

    
   return(
    <div>
            <h3>{numberValue }</h3>
            <h3>{textValue}</h3>
         </div>
    )

}
export default MemoView