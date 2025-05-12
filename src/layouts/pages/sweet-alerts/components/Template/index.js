// prop-types is a library for type checking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

function Template({ title, action }) {
  return (
    <Card>
      <SoftBox p={3} textAlign="center">
        <SoftBox mb={2}>
          <SoftTypography variant="body2" color="text">
            {title}
          </SoftTypography>
        </SoftBox>
        <SoftButton variant="gradient" color="info" onClick={action}>
          try me!
        </SoftButton>
      </SoftBox>
    </Card>
  );
}

// Typechecking props for the Template
Template.propTypes = {
  title: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default Template;
