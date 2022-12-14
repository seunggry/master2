import {useForm} from "react-hook-form";
import {useSetRecoilState} from "recoil";
import {newCategoryState} from "../atoms";

interface IForm {
    newCategory: string;
}

function CreateCategory() {
    const setCategory = useSetRecoilState(newCategoryState);
    const { register, handleSubmit, setValue } = useForm<IForm>();
    const handleValid = ({newCategory}:IForm) => {
        setCategory((oldCategory) => [{text: newCategory, id: Date.now()}, ...oldCategory]);
        setValue("newCategory", "");
    }
    return (
        <form onSubmit={handleSubmit(handleValid)}>
            <input
                {...register("newCategory")}
                placeholder="Write a to newCategory"
            />
            <button>Add</button>
        </form>
    )
}

export default CreateCategory;