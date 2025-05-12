// @mui material components
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

function ActionCell() {
  return (
    <SoftBox display="flex" alignItems="center">
      <SoftTypography variant="body1" color="success" sx={{ cursor: "pointer", lineHeight: 0 }}>
        <Tooltip title="Xem chi tiết" placement="top">
          <Icon>visibility</Icon>
        </Tooltip>
      </SoftTypography>
      <SoftBox mx={2}>
        <SoftTypography variant="body1" color="info" sx={{ cursor: "pointer", lineHeight: 0 }}>
          <Tooltip title="Cập nhật" placement="top">
            <Icon>edit</Icon>
          </Tooltip>
        </SoftTypography>
      </SoftBox>
      <SoftTypography variant="body1" color="error" sx={{ cursor: "pointer", lineHeight: 0 }}>
        <Tooltip title="Xóa" placement="left">
          <Icon>delete</Icon>
        </Tooltip>
      </SoftTypography>
    </SoftBox>
  );
}

export default ActionCell;
