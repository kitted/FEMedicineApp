import { useEffect, useState } from "react";

// formik components
import { Formik, Form } from "formik";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { useNavigate, useParams } from "react-router-dom";
import formPatient from "./schemas/form";
import initialValues from "./schemas/initialValues";
import validations from "./schemas/validations";
import { toast } from "react-toastify";
import Info from "./components/Info";
import { PatientService } from "services/patientServices";
import { ProfileService } from "services/profileServices";
import { isNumberString, time } from "utils";
import SoftTypography from "components/SoftTypography";
import Icon from "@mui/material/Icon";
import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { Link } from "react-router-dom";

const colorPool = [
  // "#6C5CE7",
  // "#00B894",
  // "#0984E3",
  // "#D63031",
  // "#E17055",
  // "#FD79A8",
  // "#00CEC9",
  // "#FAB1A0",
  "#8e8e8e",
];

function ChiTietBenhNhan() {
  const [activeStep, setActiveStep] = useState(0);
  const { formId, formField } = formPatient;
  const currentValidation = validations[activeStep];
  const { id } = useParams();
  const currentPath = window.location.pathname;
  const containsEdit = currentPath.includes("edit");
  const navigate = useNavigate();
  const [getData, setGetData] = useState({});
  const [data, setData] = useState({});
  const [getDataProfile, setGetDataProfile] = useState([]);
  const [idNewUser, setIdNewUser] = useState({});

  useEffect(() => {
    if (!id) return;
    (async () => {
      const { data } = await PatientService.getById(id);
      setGetData(data);
    })();
  }, [id]);

  useEffect(() => {
    if (!id) return;
    (async () => {
      const { data } = await ProfileService.getAll(id, {});
      setGetDataProfile(data.items || []);
    })();
  }, [id]);

  const onChangeValue = (type, value) => {
    setData((prev) => ({ ...prev, [type]: value }));
  };

  const submitForm = async (values, actions) => {
    try {
      const age = values?.age;
      if (!isNumberString(age)) {
        toast.error("Tuổi phải là số!");
        actions.setSubmitting(false);
        return;
      }
      if (age < 0) {
        toast.error("Tuổi phải lớn hơn 0!");
        actions.setSubmitting(false);
        return;
      }
      const newUser = await PatientService.create(values);
      toast.success("Tạo hồ sơ bệnh nhân thành công!");
      console.log({ a: newUser });
      setIdNewUser(newUser.data._id.toString());
      // actions.setSubmitting(false);
      // actions.resetForm();
      // setTimeout(() => {
      //   navigate(-1);
      // }, 1500);
    } catch (error) {
      actions.setSubmitting(false);
      toast.error("Tạo hồ sơ bệnh nhân thất bại!");
    }
  };

  const handleUpdate = async (values, actions) => {
    try {
      const age = values?.age;
      if (age && !isNumberString(age)) {
        toast.error("Tuổi phải là số!");
        actions.setSubmitting(false);
        return;
      }
      if (age < 0) {
        toast.error("Tuổi phải lớn hơn 0!");
        actions.setSubmitting(false);
        return;
      }
      await PatientService.update(id, values);
      toast.success("Cập nhật hồ sơ bệnh nhân thành công!");
      actions.setSubmitting(false);
      actions.resetForm();
      setTimeout(() => {
        navigate(-1);
      }, 1500);
    } catch (error) {
      actions.setSubmitting(false);
      toast.error("Cập nhật hồ sơ bệnh nhân thất bại!");
    }
  };

  const handleSubmit = (values, actions) => {
    if (id && containsEdit) {
      handleUpdate({ ...data, ...values }, actions);
    } else {
      submitForm({ ...data, ...values }, actions);
    }
  };

  const handleBack = () => navigate(-1);
  const handleDelete = async () => {
    try {
      await PatientService.delete(id);
      handleClose();
      toast.success("Xoá thông tin bệnh nhân thành công!");
      setTimeout(() => {
        navigate(-1);
      }, 1500);
    } catch (error) {
      toast.error("Xoá thất bại");
      console.log("🍕 ~ error:", error);
      handleClose();
    }
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3} mb={2}>
        <Grid container justifyContent="center" sx={{ height: "100%" }}>
          <Grid item xs={12} lg={12}>
            <Formik
              initialValues={initialValues}
              validationSchema={currentValidation}
              onSubmit={handleSubmit}
            >
              {({ values, errors, touched, isSubmitting, setFieldValue }) => (
                <Form id={formId} autoComplete="off">
                  <Card sx={{ height: "100%" }}>
                    <SoftBox p={2}>
                      <SoftBox>
                        <Info
                          formData={{
                            values,
                            touched,
                            formField,
                            errors,
                            getData,
                            onChangeValue,
                            setFieldValue,
                          }}
                        />
                        <SoftBox mt={2} width="100%" display="flex" justifyContent="space-between">
                          {/* Nút trở về nằm bên trái */}
                          <SoftButton onClick={handleBack} variant="gradient" color="light">
                            Trở về
                          </SoftButton>

                          {/* Nhóm nút Delete + Cập nhật/Tạo nằm bên phải */}
                          <SoftBox display="flex" gap={1}>
                            {(id || containsEdit) && (
                              <SoftButton
                                onClick={handleClickOpen}
                                variant="gradient"
                                color="error"
                              >
                                <Icon>delete</Icon>
                              </SoftButton>
                            )}

                            {id && containsEdit && (
                              <SoftButton
                                disabled={isSubmitting}
                                type="submit"
                                variant="gradient"
                                color="dark"
                              >
                                Cập nhật thông tin bệnh nhân
                              </SoftButton>
                            )}

                            {!id && (
                              <SoftButton
                                disabled={isSubmitting}
                                type="submit"
                                variant="gradient"
                                color="dark"
                              >
                                Tạo thông tin bệnh nhân
                              </SoftButton>
                            )}
                          </SoftBox>
                        </SoftBox>
                      </SoftBox>
                    </SoftBox>
                  </Card>
                </Form>
              )}
            </Formik>
          </Grid>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">Xóa bệnh nhân?</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Bạn có chắc chắn muốn xóa?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Hủy</Button>
              <Button color="error" onClick={handleDelete} autoFocus>
                Đồng ý
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </SoftBox>
      <SoftBox mt={2}>
        <SoftBox
          mt={2}
          mb={2}
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <SoftTypography variant="h5" fontWeight="bold">
            Các lần đo ECG: {getDataProfile.length}
          </SoftTypography>

          <Link
            to={`/quan-ly-benh-nhan/ecg/create/${id || idNewUser}`}
            style={{ textDecoration: "none" }}
          >
            <SoftButton variant="gradient" color="dark">
              Thêm ECG mới
            </SoftButton>
          </Link>
        </SoftBox>

        <Grid container spacing={2}>
          {getDataProfile.map((visit, index) => (
            <Grid item xs={12} sm={12} md={8} lg={6} key={index}>
              <Card
                sx={{
                  background: colorPool[index % colorPool.length],
                  color: "white",
                  height: "100%",
                  borderRadius: 3,
                  boxShadow: 6,
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.03)",
                  },
                }}
              >
                <SoftBox p={2}>
                  <SoftTypography variant="h6" fontWeight="bold" color="white">
                    Ngày khám: {time(visit.createdAt)}
                  </SoftTypography>
                  <SoftTypography color="white" variant="body2" mt={2}>
                    Chuẩn đoán: {visit.diagnosis}
                  </SoftTypography>
                  <SoftTypography color="white" variant="body2" mt={2}>
                    Tần số: {visit.ecg[0].frequency}
                  </SoftTypography>
                  <SoftTypography color="white" variant="body2" mt={1}>
                    Nhịp: {visit.ecg[0].rhythm}
                  </SoftTypography>
                  <SoftTypography color="white" variant="body2" mt={1}>
                    Trục: {visit.ecg[0].axis}
                  </SoftTypography>
                  <SoftTypography color="white" variant="body2" mt={1}>
                    Sóng P: {visit.ecg[0].waveP}
                  </SoftTypography>
                  <SoftTypography color="white" variant="body2" mt={1}>
                    Sóng T: {visit.ecg[0].waveT}
                  </SoftTypography>
                  <SoftTypography color="white" variant="body2" mt={1}>
                    QRS: {visit.ecg[0].QRS}
                  </SoftTypography>
                  <SoftTypography color="white" variant="body2" mt={1}>
                    ST: {visit.ecg[0].ST}
                  </SoftTypography>
                  <SoftTypography color="white" variant="body2" mt={1}>
                    Góc: {visit.ecg[0].corner}
                  </SoftTypography>
                  <SoftTypography color="white" variant="body2" mt={1}>
                    Chu kỳ: {visit.ecg[0].cycle}
                  </SoftTypography>
                  <SoftTypography color="white" variant="body2" mt={1}>
                    Khoảng cách PR: {visit.ecg[0].distancePR}
                  </SoftTypography>
                  <SoftTypography color="white" variant="body2" mt={1}>
                    Khoảng cách QT: {visit.ecg[0].distanceQT}
                  </SoftTypography>
                  <SoftTypography color="white" variant="body2" mt={1}>
                    Kết luận: {visit.ecg[0].conclude}
                  </SoftTypography>
                  <SoftTypography color="white" variant="body2" mt={1}>
                    Kết quả: {visit.result}
                  </SoftTypography>
                  <SoftBox mt={2} width="100%" display="flex" justifyContent="space-between">
                    <SoftButton variant="gradient" color="light">
                      In
                    </SoftButton>
                  </SoftBox>
                </SoftBox>
              </Card>
            </Grid>
          ))}
        </Grid>
      </SoftBox>
    </DashboardLayout>
  );
}

export default ChiTietBenhNhan;
