// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// NewUser page components
import FormField from "layouts/pages/users/new-user/components/FormField";
import { useParams } from "react-router-dom";

function UserInfo({ formData }) {
  const { formField, values, errors, touched } = formData;
  const {
    hoVaTen,
    diDen,
    diVe,
    loaiDichVu,
    loaiXeYeuCau,
    thoiGianDi,
    thoiGianVe,
    cccd,
    sdt,
    email,
    diaChi,
    ghiChu,
  } = formField;
  const {
    hoVaTen: hoVaTenV,
    diDen: diDenV,
    diVe: diVeV,
    loaiDichVu: loaiDichVuV,
    thoiGianDi: thoiGianDiV,
    thoiGianVe: thoiGianVeV,
    loaiXeYeuCau: loaiXeYeuCauV,
    cccd: cccdV,
    sdt: sdtV,
    email: emailV,
    diaChi: diaChiV,
    ghiChu: ghiChuV,
  } = values;
  const id = useParams();

  return (
    <SoftBox>
      <SoftBox lineHeight={0}>
        <SoftTypography variant="h5" fontWeight="bold">
          Chi tiết đơn hàng
        </SoftTypography>
      </SoftBox>
      <SoftBox mt={1.625}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <FormField
              type={hoVaTen.type}
              label={hoVaTen.label}
              name={hoVaTen.name}
              value={hoVaTenV}
              placeholder={hoVaTen.placeholder}
              error={errors.hoVaTen && touched.hoVaTen}
              success={hoVaTenV.length > 0 && !errors.hoVaTen}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormField
              type={diDen.type}
              label={diDen.label}
              name={diDen.name}
              value={diDenV}
              placeholder={diDen.placeholder}
              error={errors.diDen && touched.diDen}
              success={diDenV.length > 0 && !errors.diDen}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormField
              type={diVe.type}
              label={diVe.label}
              name={diVe.name}
              value={diVeV}
              placeholder={diVe.placeholder}
              error={errors.diVe && touched.diVe}
              success={diVeV.length > 0 && !errors.diVe}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <FormField
              type={loaiDichVu.type}
              label={loaiDichVu.label}
              name={loaiDichVu.name}
              value={loaiDichVuV}
              placeholder={loaiDichVu.placeholder}
              error={errors.loaiDichVu && touched.loaiDichVu}
              success={loaiDichVuV.length > 0 && !errors.loaiDichVu}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormField
              type={loaiXeYeuCau.type}
              label={loaiXeYeuCau.label}
              name={loaiXeYeuCau.name}
              value={loaiXeYeuCauV}
              placeholder={loaiXeYeuCau.placeholder}
              error={errors.loaiXeYeuCau && touched.loaiXeYeuCau}
              success={loaiXeYeuCauV.length > 0 && !errors.loaiXeYeuCau}
            />
          </Grid>
          <Grid item xs={12} sm={4} container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormField
                type={thoiGianDi.type}
                label={thoiGianDi.label}
                name={thoiGianDi.name}
                value={thoiGianDiV}
                placeholder={thoiGianDi.placeholder}
                error={errors.thoiGianDi && touched.thoiGianDi}
                success={thoiGianDiV.length > 0 && !errors.thoiGianDi}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormField
                type={thoiGianVe.type}
                label={thoiGianVe.label}
                name={thoiGianVe.name}
                value={thoiGianVeV}
                placeholder={thoiGianVe.placeholder}
                error={errors.thoiGianVe && touched.thoiGianVe}
                success={thoiGianVeV.length > 0 && !errors.thoiGianVe}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <FormField
              type={cccd.type}
              label={cccd.label}
              name={cccd.name}
              value={cccdV}
              placeholder={cccd.placeholder}
              error={errors.cccd && touched.cccd}
              success={cccdV.length > 0 && !errors.cccd}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormField
              type={sdt.type}
              label={sdt.label}
              name={sdt.name}
              value={sdtV}
              placeholder={sdt.placeholder}
              error={errors.sdt && touched.sdt}
              success={sdtV.length > 0 && !errors.sdt}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormField
              type={email.type}
              label={email.label}
              name={email.name}
              value={emailV}
              placeholder={email.placeholder}
              error={errors.email && touched.email}
              success={emailV.length > 0 && !errors.email}
            />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} sm={12}>
            <FormField
              type={diaChi.type}
              label={diaChi.label}
              name={diaChi.name}
              value={diaChiV}
              placeholder={diaChi.placeholder}
              error={errors.diaChi && touched.diaChi}
              success={diaChiV.length > 0 && !errors.diaChi}
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={12}>
            <FormField
              type={ghiChu.type}
              label={ghiChu.label}
              name={ghiChu.name}
              value={ghiChuV}
              placeholder={ghiChu.placeholder}
              error={errors.ghiChu && touched.ghiChu}
              success={ghiChuV.length > 0 && !errors.ghiChu}
            />
          </Grid>
        </Grid>
      </SoftBox>
    </SoftBox>
  );
}

// typechecking props for UserInfo
UserInfo.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default UserInfo;
