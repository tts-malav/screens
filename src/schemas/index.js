import * as yup from "yup";

// const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 char, 1 uppercase letter, 1 lowercase letter, 1 numeric digit

export const basicSchema = yup.object().shape({
    gstno: yup
        .string()
        .required("Please enter a valid email")

    // password: yup
    //     .string()
    //     .min(5)
    //     .matches(passwordRules, {message: "Please enter stronger password"})
    //     .required("Required")
});