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
          جسم كامل
        </SoftTypography>
        <SoftBadge variant="contained" color="info" badgeContent="معتدل" />
      </SoftBox>
      <SoftBox pb={3} px={3}>
        <SoftTypography variant="body2" color="text" fontWeight="regular">
          ما يهم هو الأشخاص الذين أوقدوه. والناس الذين يشبهونهم مستاءون منه.
        </SoftTypography>
      </SoftBox>
    </Card>
  );
}

export default FullBody;
