// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Wizard application components
import FormField from "layouts/applications/wizard/components/FormField";

function Address() {
  return (
    <SoftBox>
      <SoftBox width="80%" textAlign="center" mx="auto" mb={4}>
        <SoftBox mb={1}>
          <SoftTypography variant="h5" fontWeight="regular">
            Are you living in a nice area?
          </SoftTypography>
        </SoftBox>
        <SoftTypography variant="body2" fontWeight="regular" color="text">
          One thing I love about the later sunsets is the chance to go for a walk through the
          neighborhood woods before dinner
        </SoftTypography>
      </SoftBox>
      <SoftBox mt={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <FormField type="text" label="street name" placeholder="Eg. Soft" />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormField type="number" label="street number" placeholder="Eg. 221" />
          </Grid>
          <Grid item xs={12} md={7}>
            <FormField type="text" label="city" placeholder="Eg. Tokyo" />
          </Grid>
          <Grid item xs={12} md={5}>
            <FormField type="text" label="country" placeholder="Eg. Argentina" />
          </Grid>
        </Grid>
      </SoftBox>
    </SoftBox>
  );
}

export default Address;
