import * as yup from 'yup';

export const contactsSchema = yup.object({
  name: yup.string().required('Please enter first and last name'),
  number: yup.string().length(9).required('Please enter phone number'),
});
