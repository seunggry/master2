import React from "react";
import {IToDo, toDoState} from "../atoms";
import {useSetRecoilState} from "recoil";

function ToDo({text, id} : IToDo) {
    const setToDos = useSetRecoilState(toDoState);
    return (
        <option value={text}>{text}</option>
    );
}

export default  ToDo;