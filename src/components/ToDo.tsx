import React from "react";
import {Categories, IToDo, toDoState} from "../atoms";
import {useSetRecoilState} from "recoil";
import styled from "styled-components";

const LI = styled.li`
    margin-top: 20px;
  
    span{
      font-size: 24px;
    }
`;

const Button = styled.button`
    margin-left: 10px;
    width: 80px;
    height: 40px;
    font-size: 20px;
    color: ${(props) => props.theme.accentColor};
    background-color: transparent;
    border: 2px solid ${(props) => props.theme.accentColor};
    border-radius: 10px;
`;

function ToDo({text, category, id} : IToDo) {
    const setToDos = useSetRecoilState(toDoState);
    const onClick = (event:React.MouseEvent<HTMLButtonElement>) => {
        const {currentTarget : {name} } = event;
        setToDos((oldToDos) => {
            const targetIndex = oldToDos.findIndex(toDo => toDo.id === id);
            const newToDo = {text, id, category: name as any};
            console.log(newToDo);
            return [
                ...oldToDos.slice(0, targetIndex), newToDo, ...oldToDos.slice(targetIndex+1)
            ];
        })
    }
    return (
        <LI>
            <span>{text}</span>
            {category !== Categories.DOING && (
                <Button name={Categories.DOING} onClick={onClick}>Doing</Button>
            )}
            {category !== Categories.TO_DO && (
                <Button name={Categories.TO_DO} onClick={onClick}>To_Do</Button>
            )}
            {category !== Categories.DONE && (
                <Button name={Categories.DONE} onClick={onClick}>Done</Button>
            )}
        </LI>
    );
}

export default  ToDo;