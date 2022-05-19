import * as yup from 'yup';

export const registrationSchema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup
        .string()
        .min(6)
        .max(16)
        .required('Password is required')
        .matches(
            /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{4,}$/,
            'Password must contain Alpha, number & special cha'
        ),
});