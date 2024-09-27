import CommentList from "../components/classComponent/CommentList";
import Title from "../components/Title"
import { Component } from "react";

class MyComponent extends Component{
    render(){
        return(
            <>
                <Title Title= "My Component"/>
            </>
        )
    }
} 
 function ClassComp(){
    return(
        <>
        <Title Title="Class Component"/>
        <MyComponent/>
        <CommentList/>
        </>
    )

}

export default ClassComp;