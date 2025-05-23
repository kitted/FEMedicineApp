// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Checkbox from "@mui/material/Checkbox";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

function IdCell({ id, checked }) {
  return (
    <SoftBox display="flex" alignItems="center">
      <Checkbox defaultChecked={checked} />
      <SoftBox ml={1}>
        <SoftTypography variant="caption" fontWeight="medium" color="text">
          {id}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
}

// Setting default value for the props of IdCell
IdCell.defaultProps = {
  checked: false,
};

// Typechecking props for the IdCell
IdCell.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool,
};

export default IdCell;
