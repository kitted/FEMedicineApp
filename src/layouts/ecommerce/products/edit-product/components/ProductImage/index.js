// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

// Images
const sofa =
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80";

function ProductImage() {
  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox p={3}>
        <SoftTypography variant="h5" fontWeight="bold">
          Product Image
        </SoftTypography>
        <SoftBox
          component="img"
          src={sofa}
          alt="Product Image"
          borderRadius="lg"
          shadow="lg"
          width="100%"
          my={3}
        />
        <SoftBox display="flex">
          <SoftBox mr={1}>
            <SoftButton variant="gradient" color="info" size="small">
              edit
            </SoftButton>
          </SoftBox>
          <SoftButton variant="outlined" color="dark" size="small">
            remove
          </SoftButton>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default ProductImage;
