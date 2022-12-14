import {useForm} from "react-hook-form";
import {useSetRecoilState} from "recoil";
import {newCategoryState} from "../atoms";
import styled from "styled-components";

interface IForm {
    newCategory: string;
}

const Form = styled.form`
    position: relative;
    width: 68%;
  
    input{
      padding: 0 90px 0 20px;
      width: 100%;
      height: 60px;
      font-size: 20px;
      vertical-align: middle;
      border: none;
      border-radius: 10px;
    }
`;

const Button = styled.button`
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    margin-left: 10px;
    width: 80px;
    height: 60px;
    background-color: #222;
    font-size: 20px;
    font-weight: 500;
    vertical-align: middle;
    color: #fff;
    border: none;
    border-radius: 10px;
`;

const Desc = styled.p`
    position: absolute;
    padding-top: 8px;
    opacity: 0.4;
  
`;

function CreateCategory() {
    const setCategory = useSetRecoilState(newCategoryState);
    const { register, handleSubmit, setValue, formState : {errors} } = useForm<IForm>();
    const handleValid = ({newCategory}:IForm) => {
        setCategory((oldCategory) => [{text: newCategory, id: Date.now()}, ...oldCategory]);
        setValue("newCategory", "");
    }
    return (
        <Form onSubmit={handleSubmit(handleValid)}>
            <input
                {...register("newCategory", {minLength: {value: 3, message: "Your Category is too short"}})}
                placeholder="Write a to newCategory"
            />
            <Desc>{errors?.newCategory?.message}</Desc>
            <Button>Add</Button>
        </Form>
    )
}

export default CreateCategory;