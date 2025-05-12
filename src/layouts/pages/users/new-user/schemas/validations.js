import * as Yup from "yup";
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

const validations = [
  Yup.object().shape({
    [hoVaTen.name]: Yup.string().required(hoVaTen.errorMsg),
    [diDen.name]: Yup.string().required(diDen.errorMsg),
    [diVe.name]: Yup.string().required(diVe.errorMsg),
    [loaiDichVu.name]: Yup.string().required(loaiDichVu.errorMsg),
    [loaiXeYeuCau.name]: Yup.string().required(loaiXeYeuCau.errorMsg),
    [thoiGianDi.name]: Yup.string().required(thoiGianDi.errorMsg),
    [thoiGianVe.name]: Yup.string().required(thoiGianVe.errorMsg),
    [cccd.name]: Yup.string().required(cccd.errorMsg),
    [thoiGianDi.name]: Yup.string().required(thoiGianDi.errorMsg),
    [thoiGianDi.name]: Yup.string().required(thoiGianDi.errorMsg),
    [email.name]: Yup.string().required(email.errorMsg).email(email.invalidMsg),
  }),
];

export default validations;
