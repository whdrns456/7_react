// 클래스형 컴포넌트 
import { Component } from "react";

class Comment extends Component{
    // 생성자 

    constructor(props){
        super(props);
        // 상태 초기화
        this.state = {};
    }

    componentDidMount(){
        // 처음 렌더링된 시점 
        console.log("component did mount");
    }

    componentDidUpdate(){
        // 상태가 변경되었을 떄 (업데이트)
        console.log("component did Update");
    }

    componentWillUnmount(){
        // 해당 컴포넌트가 사라졌을 때 (표시되지 않을 때)
        console.log("componentWillUnmount");
    }
        render(){
            return(
                <div>
                    <span>{this.props.value}</span>
                </div>
            )
        }
}
export default Comment;