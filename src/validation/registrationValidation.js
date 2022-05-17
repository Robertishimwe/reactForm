import * as yup from 'yup';

export const nameSchema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
});

export const emailSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
});

export const passwordSchema = yup.object().shape({
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