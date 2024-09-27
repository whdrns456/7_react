import { useState } from "react";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import styled from 'styled-components';

const navStyle = {
  display: 'flex',
  flexWrap: 'wrap'
}

function Menubar(){
    // styled(컴포넌트명)`css` 
    const MyLink = styled(Link)`
    background-color: teal;
    color: #eee;
    margin:10px;
    padding: 10px;
    text-decoration: none;
    border-radius: 8px;
    
    &:hover{
      color: teal;
       background-color: #eee;
    }
    `
    return (
     <nav style={navStyle}>
        <MyLink to='/'>HOME</MyLink>
        <MyLink to='/cc'>TEST</MyLink>
        <MyLink to='/fc'>TEST2</MyLink>
        <MyLink to='/us'>useState</MyLink>
        <MyLink to='/ue'>useEffect</MyLink>
        <MyLink to='/re'>useref</MyLink>
        <MyLink to='/uc'>useContext</MyLink>
        <MyLink to='/um'>useMemo</MyLink>
        <MyLink to='/ub'>useCallback</MyLink>
      </nav>
    )
}


export default Menubar;