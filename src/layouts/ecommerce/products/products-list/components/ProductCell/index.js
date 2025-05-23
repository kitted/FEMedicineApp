// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Checkbox from "@mui/material/Checkbox";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

function ProductCell({ image, name, checked }) {
  return (
    <SoftBox display="flex" alignItems="center">
      {/* <Checkbox defaultChecked={checked} /> */}
      <SoftBox mx={2} width="3.75rem">
        <SoftBox component="img" src={image} alt={name} width="100%" />
      </SoftBox>
      <SoftTypography variant="button" fontWeight="medium">
        {name}
      </SoftTypography>
    </SoftBox>
  );
}

// Setting default value for the props of ProductCell
ProductCell.defaultProps = {
  checked: false,
};

// Typechecking props for the ProductCell
ProductCell.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
};

export default ProductCell;
