// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// NewProduct page components
import FormField from "layouts/ecommerce/products/new-product/components/FormField";

function Socials() {
  return (
    <SoftBox>
      <SoftTypography variant="h5" fontWeight="bold">
        Socials
      </SoftTypography>
      <SoftBox mt={2}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormField type="text" label="shoppify handle" placeholder="@soft" />
          </Grid>
          <Grid item xs={12}>
            <FormField type="text" label="facebook account" placeholder="https://..." />
          </Grid>
          <Grid item xs={12}>
            <FormField type="text" label="instagram account" placeholder="https://..." />
          </Grid>
        </Grid>
      </SoftBox>
    </SoftBox>
  );
}

export default Socials;
