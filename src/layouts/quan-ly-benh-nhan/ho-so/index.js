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
import InfoHoSo from "./components/Info";
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

function HoSo() {
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
      const payload = {
        patient: id,
        diagnosis: values.diagnosis,
        result: values.result,
        ecg: values,
      };

      const newProfile = await ProfileService.create(payload);
      toast.success("Tạo ECG bệnh nhân thành công!");
      actions.setSubmitting(false);
      actions.resetForm();
      handlePrintDirect(newProfile.data);
      setTimeout(() => {
        navigate(-1);
      }, 1500);
    } catch (error) {
      actions.setSubmitting(false);
      toast.error("Tạo ECG bệnh nhân thất bại!");
    }
  };

  const handlePrintDirect = (visit) => {
    const ecg = Array.isArray(visit.ecg) && visit.ecg.length > 0 ? visit.ecg[0] : {};
    const printWindow = window.open("", "_blank");

    if (!printWindow) {
      toast.error("Không thể mở cửa sổ in. Trình duyệt có thể đã chặn.");
      return;
    }

    const content = `
      <html>
        <head>
          <title>In</title>
          <style>
            body {
              font-family: Roboto, sans-serif;
              padding: 20px;
              line-height: 1.6;
            }
            h2 {
              text-align: center;
              margin-bottom: 20px;
            }
            p {
              margin: 4px 0;
            }
            .info {
              border: 1px solid #ccc;
              padding: 16px;
              border-radius: 8px;
            }
          </style>
          <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
        </head>
        <body>
          <div class="info">
            <h2>KẾT QUẢ ĐIỆN TÂM ĐỒ</h2>
            <p><strong>Ngày khám:</strong> ${time(visit.createdAt)}</p>
            <p><strong>Chuẩn đoán:</strong> ${visit.diagnosis}</p>
            <p><strong>Tần số:</strong> ${ecg.frequency || "N/A"}</p>
            <p><strong>Nhịp:</strong> ${ecg.rhythm || "N/A"}</p>
            <p><strong>Trục:</strong> ${ecg.axis || "N/A"}</p>
            <p><strong>Sóng P:</strong> ${ecg.waveP || "N/A"}</p>
            <p><strong>Sóng T:</strong> ${ecg.waveT || "N/A"}</p>
            <p><strong>QRS:</strong> ${ecg.QRS || "N/A"}</p>
            <p><strong>ST:</strong> ${ecg.ST || "N/A"}</p>
            <p><strong>Góc:</strong> ${ecg.corner || "N/A"}</p>
            <p><strong>Chu kỳ:</strong> ${ecg.cycle || "N/A"}</p>
            <p><strong>Khoảng PR:</strong> ${ecg.distancePR || "N/A"}</p>
            <p><strong>Khoảng QT:</strong> ${ecg.distanceQT || "N/A"}</p>
            <p><strong>Kết luận:</strong> ${ecg.conclude || "N/A"}</p>
            <p><strong>Kết quả:</strong> ${visit.result}</p>
          </div>
          <script>
            setTimeout(() => {
              window.print();
            }, 300);
          </script>
        </body>
      </html>
    `;

    printWindow.document.open();
    printWindow.document.write(content);
    printWindow.document.close();
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
      <SoftBox mt={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12} key={0}>
            <Card
              sx={{
                background: "white",
                color: "white",
                height: "100%",
                borderRadius: 3,
                boxShadow: 6,
                // transition: "transform 0.3s",
                // "&:hover": {
                //   transform: "scale(1.03)",
                // },
              }}
            >
              <SoftBox p={2}>
                <SoftTypography variant="h6" fontWeight="bold" color="black">
                  Tên bệnh nhân: {getData.username}
                </SoftTypography>
                <SoftTypography color="black" variant="body2" mt={2}>
                  Tuổi: {getData.age}
                </SoftTypography>
                <SoftTypography color="black" variant="body2" mt={2}>
                  Giới tính: {getData.sex === "male" ? "Nam" : "Nữ"}
                </SoftTypography>
                <SoftTypography color="black" variant="body2" mt={2}>
                  Địa chỉ: {getData.address}
                </SoftTypography>
              </SoftBox>
            </Card>
          </Grid>
        </Grid>
      </SoftBox>
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
                        <InfoHoSo
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
                            <SoftButton
                              disabled={isSubmitting}
                              type="submit"
                              variant="gradient"
                              color="dark"
                            >
                              Lưu và In
                            </SoftButton>
                          </SoftBox>
                        </SoftBox>
                      </SoftBox>
                    </SoftBox>
                  </Card>
                </Form>
              )}
            </Formik>
          </Grid>
        </Grid>
      </SoftBox>
    </DashboardLayout>
  );
}

export default HoSo;
