import * as Yup from "yup";

export const productFormSchema = Yup.object({
    title: Yup.string().required('Please  input title'),
    creator: Yup.string().required('Please  input creator'),
    createAt: Yup.string().required('Please  input create at'),
    description: Yup.string().required('Please  input description'),
});
