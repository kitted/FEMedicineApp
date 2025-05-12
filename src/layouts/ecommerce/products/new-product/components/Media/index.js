// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftDropzone from "components/SoftDropzone";

function Media() {
  return (
    <SoftBox>
      <SoftTypography variant="h5">Media</SoftTypography>
      <SoftBox mt={3}>
        <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
          <SoftTypography component="label" variant="caption" fontWeight="bold">
            Product Image
          </SoftTypography>
        </SoftBox>
        <SoftDropzone options={{ addRemoveLinks: true }} />
      </SoftBox>
    </SoftBox>
  );
}

export default Media;
