import { useState } from "react";

function User(props){
    const user = props.user;
    return (
        <tr>
        <td>{user.name}</td>
        <td>{user.age}</td>
        <td>{user.gender}</td>
        <td>{user.phone}</td>
        </tr>
    )
}

function MyInput(props){
    const changeInputValue = (e) =>{
        const value = e.target.value;
        props.setData(value);
    }
    return (
        <input type={props.type} 
            placeholder={props.placeholder}
            value={props.data}
            onChange={changeInputValue}/>
    )
}

function UserList(){

    const [list, setList] = useState([
        {name : '기다운', age:30, gender:'남자', phone:'010-2725-0780'}, 
        {name : '카리나', age:30, gender:'남자', phone:'010-1725-0780'},
        {name : '아이유', age:30, gender:'남자', phone:'010-3725-0780'}

        // 필드 초기화 
]);

    const[name, setName] = useState('');
    const[age, setAge] = useState('');
    const[gender, setGender] = useState('');
    const[phone, setPhone] = useState(''); 

    // 상태값 초기화 
    
    const registUser = () => {
            //alert(name + ',' + age + "," + gender + "," + phone)
            const newUser = {name : name, age: age, gender: gender, phone: phone}
            list.push(newUser);

            setList([...list]) // 전개 연산자 : 새로운 배열로 복사하는 연산자.. 
            
            setName(''); // 렌더링을 시킬 때 다시 빈값으로 넣는다..
            setAge('');
            setGender('');
            setPhone('');
}
  
    return(
        <>
        <h1>회 원 정 보출 력</h1>
        <hr></hr>

        <div>
            <h3>회원 정보 등록</h3>
             <hr/>
            <MyInput type='text' placeholder='이름' data={name} setData={setName}/>
            <MyInput type='text' placeholder='나이' data={age} setData={setAge}/>
            <MyInput type='text' placeholder='성별' data={gender} setData={setGender}/>
            <MyInput type='text' placeholder='전화번호' data={phone} setData={setPhone}/>
            <br/>

            <button onClick={registUser}>등록</button>


        </div>
        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>나이</th>
                    <th>성별</th>
                    <th>연락처</th>
                </tr>
            </thead>
            <tbody>
                {
                list.map((item, index)=> // map list길이 만큼 반복문을 돌린다
                        <User key={'user' + index}  user={item}/>
                )
                }
            </tbody>

                <hr/>
        </table>
        </>
    )
}
export default UserList;