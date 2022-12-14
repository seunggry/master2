import React from "react";
import {useRecoilValue, useRecoilState} from "recoil";
import {categoryState, toDoSelector, toDoState, Categories, newCategoryState} from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import styled from "styled-components";
import CreateCategory from "./CreateCategory";
import NewCategroy from "./NewCategroy";

const ToDoListWrap = styled.div`
    margin: 0 auto;
    width: 720px;
`;

const Title = styled.h1`
    font-size: 48px;
    font-weight: 700;
    margin: 20px;
`;

const SelectWrap = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;
  
    select{
      margin-right: 2%;
      padding: 0 20px;
      width: 30%;
      height: 60px;
      font-size: 20px;
      border: none;
      border-radius: 10px;
    }
`;

function ToDoList() {
    const toDos = useRecoilValue(toDoSelector);
    const newCategory = useRecoilValue(newCategoryState)
    const [category, setCategory] = useRecoilState(categoryState);
    const onInput = (event:React.FormEvent<HTMLSelectElement>) => {
        setCategory(event.currentTarget.value as any);
    }
    return (
        <ToDoListWrap>
            <Title>To Dos</Title>
            <hr/>
            <SelectWrap>
                <select value={category} onInput={onInput}>
                    <option value={Categories.TO_DO}>To Do</option>
                    <option value={Categories.DOING}>Doing</option>
                    <option value={Categories.DONE}>Done</option>
                    {newCategory?.map((newCategory) => (
                       <NewCategroy key={newCategory.id} {...newCategory}/>
                    ))}
                </select>
                <CreateCategory/>
            </SelectWrap>
            <CreateToDo />
            {toDos?.map((toDo) => (
                <ToDo key={toDo.id} {...toDo}/>
            ))}
        </ToDoListWrap>
    );
}

export default ToDoList;