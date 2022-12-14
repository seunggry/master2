import React from "react";
import {useRecoilValue, useRecoilState} from "recoil";
import {categoryState, toDoSelector, toDoState, Categories, newCategoryState} from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import styled from "styled-components";
import CreateCategory from "./CreateCategory";
import NewCategroy from "./NewCategroy";

const Title = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;
`;

function ToDoList() {
    const toDos = useRecoilValue(toDoSelector);
    const newCategory = useRecoilValue(newCategoryState)
    const [category, setCategory] = useRecoilState(categoryState);
    const onInput = (event:React.FormEvent<HTMLSelectElement>) => {
        setCategory(event.currentTarget.value as any);
    }
    return (
        <div>
            <h1>To Dos</h1>
            <hr/>
            <Title>
                <select value={category} onInput={onInput}>
                    <option value={Categories.TO_DO}>To Do</option>
                    <option value={Categories.DOING}>Doing</option>
                    <option value={Categories.DONE}>Done</option>
                    {newCategory?.map((newCategory) => (
                       <NewCategroy key={newCategory.id} {...newCategory}/>
                    ))}
                </select>
                <CreateCategory/>
            </Title>
            <CreateToDo />
            {toDos?.map((toDo) => (
                <ToDo key={toDo.id} {...toDo}/>
            ))}
        </div>
    );
}

export default ToDoList;