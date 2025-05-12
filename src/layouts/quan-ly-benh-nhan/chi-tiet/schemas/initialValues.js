import checkout from "./form";

const {
  formField: { username, age, sex, address },
} = checkout;

const initialValues = {
  [username.name]: "",
  [age.name]: "",
  [sex.name]: "",
  [address.name]: "",
};

export default initialValues;
