import { useState } from "react";
import Title from "../../components/Title";
import { useEffect } from "react";

/*
    * useEffect
        :컴포넌트가 렌더링될 떄 특정 작업을 수행할 수 있도록 해주는 리액트 훅 
        클래스명 컴포넌트의 생명주기 메소드의 역할을 한다. 

    - 컴포넌트가 마운트되었을 때 (처음 랜더링 되었을 때)
    - 언마운트 되었을 때 (사라질 때)
    - 업데이트 되었을 때  (특정 상태, props가 바뀌었을 때)

    - 사용법 
    useEffect(함수,[]); 
    - 첫 번째 인자(함수) : 특정 작업을 수행할 내용 
    - 두 번째 인자([]) : 배열 형태(의존성 배열)
    + 생략된 경우 : 마운트 시점, 
    + 빈 배열 : 처음 마운트 시점에서만,  
    + [state] : 업데이트 시점 

    useEffect((=>{
        // 처음 랜더링 시점     
    ),[]}
*/
function UseEffectHook(){
    const [count, setCount] = useState(0);
    const [name , setName] = useState('임수진');

    const changeName = (e) => {
        const ch = e.target.value;
        console.log(changeName);
        setName(ch);
    }
    const increase = () => {
        setCount(count + 1);
    }

    useEffect(()=>{
        // 랜더링 되었을 떄 의존 배열이 없을 떄 state가 변경될 떄마다 실행
        // componentDidMount, componentDidUpdate의 역할 
        console.log("의존성 없는 useEffect");
    });

    useEffect(()=>{
        // 랜더링 되었을 떄 한번만 실행 최초 마운트
        // componentDidMount의 역할
        console.log("빈 배열을 의존성 배열로 가지는 useEffect");
    }, []);

    useEffect(()=>{
        console.log(`${name} :: [name] 이라는 의존성 배열을 가지는 useEffect`);
        // 랜더링 되었을 떄 , name이라는 상태(state)가 변경되었을 때마다 실행
        // componentDidMount, componentDidUpdate 

    }, [name]);

    useEffect(()=>{
        // 사라질 때 실행 
        // componentWillUnMount
        return()=>{
            console.log(`${name} :: 을 리턴하는 useEffect`);
        }
    },[name]);


    return (
        <>
            <Title Title="useEffect"/>
            <div>
                <p>
                    {name} 강사님 존경합니다. <br/>
                    <input type="text" onKeyUp={changeName}/>
                </p>

                <p>{count}번 클릭</p>
                <button onClick={increase}>+</button>
            </div>


        </>
    )



}

export default UseEffectHook;