import {useForm} from "react-hook-form";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {categoryState, newCategoryState, toDoState} from "../atoms";
import styled from "styled-components";

interface IForm {
    toDo: string;
}

const Form = styled.form`
    margin-top: 50px;
    width: 100%;
  
    input{
      padding: 0 20px;
      width: calc(100% - 90px);
      height: 60px;
      font-size: 20px;
      vertical-align: middle;
      border: none;
      border-radius: 10px;
    }
`;

const Button = styled.button`
    margin-left: 10px;
    width: 80px;
    height: 60px;
    background-color: ${(props) => props.theme.accentColor};
    font-size: 20px;
    font-weight: 500;
    color: #fff;
    border: none;
    border-radius: 10px;
`;

function CreateToDo() {
    const setToDos = useSetRecoilState(toDoState);
    const category = useRecoilValue(categoryState);
    const { register, handleSubmit, setValue } = useForm<IForm>();
    const handleValid = ({toDo}:IForm) => {
        setToDos(oldToDos => [{text: toDo, id: Date.now(), category: category}, ...oldToDos]);
        setValue("toDo", "");
    }
    return (
        <Form onSubmit={handleSubmit(handleValid)}>
            <input
                {...register("toDo", {required: "Please write a To Do"})}
                placeholder="Write a to do"
            />
            <Button>Add</Button>
        </Form>
    )
}

export default CreateToDo;