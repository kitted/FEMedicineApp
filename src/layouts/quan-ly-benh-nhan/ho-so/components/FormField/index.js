// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// formik components
import { ErrorMessage, Field } from "formik";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";

function FormFieldPatient({ label, name, ...rest }) {
  return (
    <SoftBox mb={1.5}>
      <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
        <SoftTypography
          component="label"
          variant="caption"
          fontWeight="bold"
          textTransform="capitalize"
        >
          {label}
        </SoftTypography>
      </SoftBox>
      <Field {...rest} name={name} as={SoftInput} />
      <SoftBox mt={0.75}>
        <SoftTypography component="div" variant="caption" color="error">
          <ErrorMessage name={name} />
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
}

// typechecking props for FormField
FormFieldPatient.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FormFieldPatient;
