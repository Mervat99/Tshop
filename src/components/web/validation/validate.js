import * as yup from 'yup'


export const  registerSchema = yup.object({
    userName : yup.string().required("user Name is required").min(3,"it must be at least 3 char ").max(30,"max is 30 char"),
    email:yup.string().required("email is required") ,
    password : yup.string().required("password is required").min(3,"it must be at least 3 char ").max(30,"max is 30 char")
});