import checkout from "layouts/pages/users/new-user/schemas/form";

const {
  formField: {
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
  },
} = checkout;

const initialValues = {
  [hoVaTen.name]: "",
  [diDen.name]: "",
  [diVe.name]: "",
  [loaiDichVu.name]: "",
  [loaiXeYeuCau.name]: "",
  [thoiGianDi.name]: "",
  [thoiGianVe.name]: "",
  [cccd.name]: "",
  [sdt.name]: "",
  [email.name]: "",
  [diaChi.name]: "",
  [ghiChu.name]: "",
};

export default initialValues;
