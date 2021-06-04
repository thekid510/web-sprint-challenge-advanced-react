// write your custom hook here to control your checkout form
import { useState } from "react"


const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);

    const handleChanges = updatedValue => {
        setValues(updatedValue)
    const clearForm = e => {
        e.preventDefault();
        setValues(initialValues);
    };
    return [values, handleChanges, clearForm];
    }
}
export default useForm;