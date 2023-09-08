// validationSchemas.js
import * as Yup from 'yup';

// Validation schema for UserDetails

const isAbove18 = (date) => {
  const today = new Date();
  const birthDate = new Date(date);
  const age = today.getFullYear() - birthDate.getFullYear();

  return age >= 18;
};
export const userDetailsSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phoneNumber: Yup.string().matches(/^\d{11}$/, 'Invalid phone number').required('Phone number is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  dob: Yup.date()
    .nullable()
    .required('Date of birth is required')
    .test('is-above-18', 'You must be above 18 years old', (value) => isAbove18(value)), 
  image: Yup.mixed()
    .test('fileType', 'Invalid file type. Only JPEG and PNG are allowed.', (value) => {
      if (!value) return true; // Skip validation if no file is selected
      return ['image/jpeg', 'image/png'].includes(value.type);
    })
    .test('fileSize', 'File size is too large. Max allowed size is 2MB.', (value) => {
      if (!value) return true; // Skip validation if no file is selected
      return value.size <= 2 * 1024 * 1024; // 2MB in bytes
    }),
});

// Validation schema for StoreDetails
export const storeDetailsSchema = Yup.object().shape({
  storeName: Yup.string().required('Store Name is required'),
  storePhoneNumber: Yup.string().matches(/^\d{11}$/, 'Invalid phone number').required('Store phone number is required'),
  
});

// Validation schema for BankDetails
export const bankDetailsSchema = Yup.object().shape({
  cardName: Yup.string().required('Name on Card is required'),
  cardNumber: Yup.string().matches(/^[0-9]{16}$/, 'Invalid card number').required('Card Number is required'),
  cvv: Yup.string().matches(/^[0-9]{3}$/, 'Invalid CVV').required('CVV is required'),
  expiryDate: Yup.string().matches(/^(0[1-9]|1[0-2])\/[0-9]{2}$/, 'Invalid expiry date').required('Expiry date is required'),
  
});
