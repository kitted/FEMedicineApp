/* eslint-disable react/prop-types */
// @mui material components
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { PatientService } from "services/patientServices";

function ActionCell({ item, setDataTable }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const handleDelete = async () => {
  //   try {
  //     await PatientService.delete(item?._id);
  //     setDataTable((prev) => ({ ...prev, rows: prev.rows.filter((row) => row.id !== item._id) }));
  //     handleClose();
  //     toast.success("Xoá thông tin bệnh nhân thành công!");
  //   } catch (error) {
  //     toast.error("Xoá thất bại");
  //     console.log("🍕 ~ error:", error);
  //     handleClose();
  //   }
  // };

  return (
    <SoftBox display="flex" alignItems="center">
      <Link to={`/quan-ly-benh-nhan/benh-nhan/${item?._id}`}>
        <SoftTypography variant="body1" color="success" sx={{ cursor: "pointer", lineHeight: 0 }}>
          <Tooltip title="Xem chi tiết" placement="top">
            <Icon>visibility</Icon>
          </Tooltip>
        </SoftTypography>
      </Link>
      <Link to={`/quan-ly-benh-nhan/benh-nhan/${item?._id}/edit`}>
        <SoftBox ml={2}>
          <SoftTypography variant="body1" color="info" sx={{ cursor: "pointer", lineHeight: 0 }}>
            <Tooltip title="Sửa thông tin" placement="top">
              <Icon>edit</Icon>
            </Tooltip>
          </SoftTypography>
        </SoftBox>
      </Link>
      {/* <SoftBox ml={2}>
        <SoftTypography variant="body1" color="info" sx={{ cursor: "pointer", lineHeight: 0 }}>
          <Tooltip title="In" placement="top">
            <span>
              <IconPrint />
            </span>
          </Tooltip>
        </SoftTypography>
      </SoftBox> */}
      {/* <SoftBox ml={2} onClick={handleClickOpen}>
        <SoftTypography variant="body1" color="error" sx={{ cursor: "pointer", lineHeight: 0 }}>
          <Tooltip title="Xóa" placement="top">
            <Icon>delete</Icon>
          </Tooltip>
        </SoftTypography>
      </SoftBox> */}

      {/* <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Xóa Bộ môn?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Bạn có chắc chắn muốn xóa?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Hủy</Button>
          <Button onClick={handleDelete} autoFocus>
            Đồng ý
          </Button>
        </DialogActions>
      </Dialog> */}
    </SoftBox>
  );
}

export default ActionCell;

const IconPrint = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
    >
      <rect
        width="30"
        height="30"
        transform="translate(0.0499878 0.900024)"
        fill="url(#pattern0)"
      />
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_90_253" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_90_253"
          width="100"
          height="100"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};
