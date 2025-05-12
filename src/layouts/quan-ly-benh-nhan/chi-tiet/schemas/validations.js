import * as Yup from "yup";
import checkout from "./form";

const {
  formField: { username, age, sex, address },
} = checkout;

const validations = [
  Yup.object().shape({
    [username.name]: Yup.string().required(username.errorMsg),
    [age.name]: Yup.string().required(age.errorMsg),
    [sex.name]: Yup.string().required(sex.errorMsg),
    [address.name]: Yup.string().required(address.errorMsg),
  }),
];

export default validations;
