// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

function Header() {
  return (
    <SoftBox display="flex" justifyContent="space-between" alignItems="center">
      <SoftBox>
        <SoftBox mb={1}>
          <SoftTypography variant="h6" fontWeight="medium">
            Order Details
          </SoftTypography>
        </SoftBox>
        <SoftTypography component="p" variant="button" fontWeight="regular" color="text">
          Order no. <span sx={{ fontWeight: "bold" }}>241342</span> from
          <span sx={{ fontWeight: "bold" }}>23.02.2021</span>
        </SoftTypography>
        <SoftTypography component="p" variant="button" fontWeight="regular" color="text">
          Code: <span sx={{ fontWeight: "bold" }}>KF332</span>
        </SoftTypography>
      </SoftBox>
      <SoftButton variant="gradient" color="secondary">
        invoice
      </SoftButton>
    </SoftBox>
  );
}

export default Header;
