import { useEffect, useState } from "react"

export const useForm = (initialForm = {}, formValidations = {}) => {

    const [formState, setFormState] = useState(initialForm)

    const [formValidation, setFormValidation] = useState({})

    useEffect(() => {
        createValidators()
    }, [formState])


    const onInputChange = ({ target }) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [name]: value,
        })
    }

    // funcion para reset
    const onClickReset = () => {
        setFormState(initialForm)
    }

    const createValidators = () => {

        const formCheckedValue = {}

        for (const formField of Object.keys(formValidations)) {

            const [fn, errorMessage] = formValidations[formField]

            /* console.log(fn, errorMessage) */

            formCheckedValue[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage

        }

        setFormValidation(formCheckedValue)
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onClickReset,

        ...formValidation
    }
}