import { useState } from "react";
import styled from "styled-components";
import { IoLockClosed } from "react-icons/io5";

const InsertInput = styled.input`
    border: none; 
    border-radius: 50px 0px 0px 50px;
    background-color: tomato;
    height: 40px;
    min-width: 250px;
    box-sizing: border-box;
`
const InsertBtn = styled.button`
    width: 40px; 
    height: 40px; 
    border: none;
    cursor: pointer;
    border-radius: 0px 50px 50px 0px;
    background-color: red;
    color: white;
    font-size: 25px
    line-height: 10px
`
const InsertContainer = styled.div`
    width: 100%;
    display: inline-flex;
    justify-content: center;
`
const InsertItem = (props) =>{
    const [todoItem, setTodoItem] = useState('');
    const addTodo = () =>{
        props.addItem(todoItem); // App 컴포넌트에서 setList todoItem
        setTodoItem('');
    }
    return(
        <InsertContainer >
        <InsertInput value={todoItem} placeholder="할일 입력" onChange={(e)=>{setTodoItem(e.target.value)}}/>
        <InsertBtn onClick={addTodo}>
        <IoLockClosed/>
        </InsertBtn>
        </InsertContainer>
)
}
export default InsertItem;