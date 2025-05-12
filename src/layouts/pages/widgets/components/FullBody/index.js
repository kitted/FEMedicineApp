// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftBadge from "components/SoftBadge";

function FullBody() {
  return (
    <Card>
      <SoftBox
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        pt={3}
        mb={2}
        px={3}
      >
        <SoftTypography variant="body2" color="text" fontWeight="regular">
          Full Body
        </SoftTypography>
        <SoftBadge variant="contained" color="info" badgeContent="moderate" container />
      </SoftBox>
      <SoftBox pb={3} px={3}>
        <SoftTypography variant="body2" color="text" fontWeight="regular">
          What matters is the people who are sparked by it. And the people who are liked.
        </SoftTypography>
      </SoftBox>
    </Card>
  );
}

export default FullBody;
