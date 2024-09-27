import {useContext} from "react";
import {ResultContext} from "../useContext/UseContextHook";

function ResultArea({data}){
    const ctx = useContext(ResultContext);

    return(
        <div>
            <h3>props로 전달된 데이터 : {data}</h3>
            <h3>context로 전달된 데이터 : {ctx}</h3>
        </div>
    )
    }
    export default ResultArea;