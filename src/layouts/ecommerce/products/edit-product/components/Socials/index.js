// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// EditProduct page components
import FormField from "layouts/ecommerce/products/edit-product/components/FormField";

function Socials() {
  return (
    <Card>
      <SoftBox p={3}>
        <SoftTypography variant="h5" fontWeight="bold">
          Socials
        </SoftTypography>
        <SoftBox mt={1}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormField type="text" label="shoppify handle" defaultValue="@soft" />
            </Grid>
            <Grid item xs={12}>
              <FormField type="text" label="facebook account" defaultValue="https://..." />
            </Grid>
            <Grid item xs={12}>
              <FormField type="text" label="instagram account" defaultValue="https://..." />
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default Socials;
