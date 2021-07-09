// write your custom hook here to control your checkout form
import { useState } from 'react'

const useForm =(initialValue) => {

    const [values, setValues] = useState(initialValue)

    const handleChanges = e => {
        if(e.target && e.target.name){
            setValues({
                ...values,
                [e.target.name]: e.target.value
            })

        } 
    }
    const clearForm = e => {
        e.preventDefault();
        setValues(initialValue)
    }
    return ([values, handleChanges, clearForm]);
 }
export default useForm;